from django.contrib.auth.models import User
from django.db import models
#from django.urls import reverse


#class ProductManager(models.Manager):
#    def get_queryset(self):
 #       return super(ProductManager, self).get_queryset().filter(is_active=True)


#class Category(models.Model):
    #user = models.OneToOneField(User,on_delete=models.CASCADE, null=True, blyank=True)
   # slug = models.SlugField(max_length=255, unique=True)

   # class Meta:
    #    verbose_name_plural = 'categories'

  #  def get_absolute_url(self):
   #     return reverse('store:category_list', args=[self.slug])

  #  def __str__(self):
        #return self.name
    
class Customer(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name  

class Product(models.Model):
    name = models.CharField(max_length=200, null=True)
    price = models.FloatField()
    digital = models.BooleanField(default=False, null=True, blank=False)
    image = models.ImageField(null=True, blank=True)


    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url   

    #category = models.ForeignKey(Category, related_name='product', on_delete=models.CASCADE)
    #created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_creator')
    #title = models.CharField(max_length=255)
    #author = models.CharField(max_length=255, default='admin')
    #description = models.TextField(blank=True)
    #image = models.ImageField(upload_to='images/')
    #slug = models.SlugField(max_length=255)
    #price = models.DecimalField(max_digits=4, decimal_places=2)
    #in_stock = models.BooleanField(default=True)
    #is_active = models.BooleanField(default=True)
    #created = models.DateTimeField(auto_now_add=True)
    #updated = models.DateTimeField(auto_now=True)
    #objects = models.Manager()
    #products = ProductManager()

    #class Meta:
     #   verbose_name_plural = 'Products'
      #  ordering = ('-created',)

    #def get_absolute_url(self):
     #   return reverse('store:product_detail', args=[self.slug])

    def __str__(self):
        return self.name
    
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    date_ordered = models.DateTimeField(auto_now_add=True)
    complete = models.BooleanField(default=False, null=True, blank=False)
    transaction_id = models.CharField(max_length=200, null=True)

    def __str__(self):
        return str(self.id)
    
    @property
    def get_cart_total(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.get_total for item in orderitems])
        return total
    
    @property
    def get_cart_items(self):
        orderitems = self.orderitem_set.all()
        total = sum([item.quantity for item in orderitems])
        return total
    
class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    quantity = models.IntegerField(default=0, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)


    @property
    def get_total(self):
        total = self.product
        return total    
        
class ShippingAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=200, null=True)
    state = models.CharField(max_length=200, null=True)
    zipcode = models.CharField(max_length=200, null=True)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)