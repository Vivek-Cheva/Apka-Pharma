from django.urls import path
from. import views

urlpatterns = [
    path('',views.home,name='home'),
    path('contact',views.contact,name='home'),
    path('results',views.results,name='results'),
    path('portfolio',views.portfolio,name='portfolio'),
    path('stock',views.stock,name='stock'),
    path('stock_add',views.stock_add,name='stock_add'),
    
    path('update/<int:sno>/', views.update, name='update')
]