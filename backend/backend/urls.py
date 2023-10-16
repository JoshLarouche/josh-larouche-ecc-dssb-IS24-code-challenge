"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from products import views

# Define a schema view for Swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Product Manager API",
        default_version='v1',
        description="API for managing products",
        terms_of_service="https://www.yourapp.com/terms/",
        contact=openapi.Contact(email="joshua.t.larouche@gmail.com"),
        license=openapi.License(name="Apache 2.0"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/products/$', views.products_list),
    re_path(r'^api/products/(?P<id>[0-9a-f-]+)$', views.products_detail),

    # Swagger and ReDoc documentation URLs
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
