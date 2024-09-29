from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('index/', views.index, name="index"),
    path('shop/', views.shop, name="shop"),
    path('blog/', views.blog, name="blog"),
    path('about/', views.about, name="about"),
    path('contact/', views.contact, name="contact"),
    path('cart/', views.cart, name="cart"),
    path('checkout/', views.checkout, name="checkout"),
    path('login/', views.login, name="login"),
    path('forgetpass/', views.forgetpass, name="forgetpass"),
    path('signup/', views.signup, name="signup"),
    path('sproduct/', views.sproduct, name="sproduct"),
    path('payment/', views.payment, name="payment"),
    path('tq/', views.tq, name="tq"),
    path('tq1/', views.tq1, name="tq1"),
    path('tq2/', views.tq2, name="tq2"),

]