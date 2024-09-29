from django.shortcuts import render
from .models import *

def index(request):
    products = Product.objects.all()
    context = {'Products':products}
    return render(request,'store/index.html', context)

def cart(request):
   context = {}
   return render(request, 'store/cart.html', context)

def checkout(request):
    context = {}
    return render(request, 'store/checkout.html', context)

def shop(request):
    return render(request,'store/shop.html')

def blog(request):
    return render(request,'store/blog.html')

def about(request):
    return render(request,'store/about.html')

def contact(request):
    return render(request,'store/contact.html')

def login(request):
    return render(request,'store/login.html')

def forgetpass(request):
    return render(request,'store/forgetpass.html')

def signup(request):
    return render(request,'store/signup.html')

def sproduct(request):
    return render(request,'store/sproduct.html')

def payment(request):
    return render(request,'store/payment.html') 

def tq(request):
    return render(request,'store/tq.html')  

def tq1(request):
    return render(request,'store/tq1.html')

def tq2(request):
    return render(request,'store/tq2.html')  
# Create your views here.
