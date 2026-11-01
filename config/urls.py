from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from django.views.decorators.clickjacking import xframe_options_sameorigin
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("learning.urls")),
]

# Keep the page address named in all settings; serve files only locally.
@xframe_options_sameorigin
def solar_system(request):
    from django.http import Http404
    if not settings.DEBUG:
        raise Http404
    return serve(request, "index.html", document_root=settings.BASE_DIR / "orbit" / "dist")

urlpatterns += [path("science/solar-system/", solar_system, name="solar_system")]
urlpatterns += static("/science/solar-system/", document_root=settings.BASE_DIR / "orbit" / "dist")
