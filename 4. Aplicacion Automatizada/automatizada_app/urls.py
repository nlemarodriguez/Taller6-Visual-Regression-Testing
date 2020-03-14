from django.urls import path
from automatizada_app import views

urlpatterns = [
    path("", views.home, name="home"),
    path("agregar_reporte/", views.agregar_reporte, name="agregar_reporte"),
]