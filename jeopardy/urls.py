from django.urls import path

from . import views

app_name = 'jeopardy'

urlpatterns = [
    path('', views.ajax, name='ajax'),
    path('jeopardy', views.jeopardy, name='jeopardy'),
    path('get_questions<int:category_pk>', views.get_questions, name='get_questions'),
    path('get_answers', views.get_answers, name='get_answers'),
]
