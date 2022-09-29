from django.urls import path
from . import views
urlpatterns = [
    path('all/', views.getTasks, name='all'),
    path('new/', views.createTask, name='new'),
    path('delete/<str:pk>', views.deleteTask, name='new'),
    path('update/<str:pk>', views.updateTask, name='new'),
]
