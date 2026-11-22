from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model


class AuthenticationTests(TestCase):
    def test_signup_signs_student_in_and_logout_ends_session(self):
        response = self.client.post(reverse("learning:signup"), {
            "username": "student", "password1": "A-strong-study-pass-42", "password2": "A-strong-study-pass-42",
        }, follow=True)
        self.assertRedirects(response, reverse("learning:home"))
        self.assertContains(response, "Welcome, student!")
        self.assertTrue(get_user_model().objects.filter(username="student").exists())
        self.assertEqual(self.client.get(reverse("logout")).status_code, 405)
        response = self.client.post(reverse("logout"), follow=True)
        self.assertRedirects(response, reverse("learning:home"))
        self.assertNotContains(response, "Welcome, student!")

    def test_signup_rejects_invalid_passwords(self):
        response = self.client.post(reverse("learning:signup"), {
            "username": "student", "password1": "short", "password2": "different",
        })
        self.assertEqual(response.status_code, 200)
        self.assertFormError(response.context["form"], "password2", "The two password fields didn’t match.")
        self.assertFalse(get_user_model().objects.filter(username="student").exists())

    def test_login_rejects_wrong_password_and_accepts_correct_password(self):
        get_user_model().objects.create_user(username="student", password="A-strong-study-pass-42")
        response = self.client.post(reverse("login"), {"username": "student", "password": "wrong"})
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.context["form"].errors)
        response = self.client.post(reverse("login"), {"username": "student", "password": "A-strong-study-pass-42"}, follow=True)
        self.assertRedirects(response, reverse("learning:home"))
        self.assertContains(response, "Welcome, student!")


class StudyPagesTests(TestCase):
    def test_home_links_to_science(self):
        response = self.client.get(reverse("learning:home"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "learning/home.html")
        self.assertContains(response, "Study Hub")
        self.assertContains(response, f'href="{reverse("learning:science")}"')
        self.assertContains(response, "Math")
        self.assertContains(response, "English")

    def test_science_welcome_and_return_link(self):
        response = self.client.get(reverse("learning:science"))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "learning/science.html")
        self.assertContains(response, "Science Study")
        self.assertContains(response, "eight planets")
        self.assertContains(response, f'href="{reverse("learning:home")}"')

    def test_science_includes_explorer(self):
        # These original files are served only with local development settings.
        with self.settings(DEBUG=True):
            from importlib import reload
            from django.urls import clear_url_caches
            from config import urls
            reload(urls)
            clear_url_caches()
            try:
                response = self.client.get("/science/")
                self.assertContains(response, 'src="/static/solar-system/index.html"')
                self.assertContains(response, '<title>Science Study | Study Hub</title>', html=True)
                self.assertContains(response, '<iframe', count=1)
                explorer = self.client.get("/science/solar-system/")
                self.assertEqual(explorer.headers.get("X-Frame-Options"), "SAMEORIGIN")
                explorer.close()
                for asset in ("", "app.js", "quiz.js", "style.css", "textures/earth_daymap.jpg"):
                    response = self.client.get("/science/solar-system/" + asset)
                    self.assertEqual(response.status_code, 200)
                    response.close()

            finally:
                # Restore the URL configuration for subsequent tests.
                with self.settings(DEBUG=False):
                    reload(urls)
                    clear_url_caches()
