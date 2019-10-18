from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^team_list/$', views.team_list, name='team_list'),
    url(r'^file_upload/$', views.file_upload, name='file_upload'),
    url(r'^socket_io/$', views.socket_io, name='socket_io'),
]