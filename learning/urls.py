from django.urls import path
from . import views

app_name = "learning"
urlpatterns = [
    path("", views.home, name="home"),
    path("accounts/signup/", views.signup, name="signup"),
    path("science/", views.science, name="science"),
]
