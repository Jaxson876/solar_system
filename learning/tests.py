from django.test import TestCase
from django.urls import reverse


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
                self.assertContains(response, 'src="/science/solar-system/"')
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
