from django.urls import path
from sample import views

urlpatterns = [
        path('', views.index, name='index'),
        path('template', views.index_render, name='index_render'),
        path('template_dict', views.index_dict, name='index_dict'),
]


