from django.db import models

# Create your models here.
class User (models.Model):
    user_id=models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    picture = models.URLField(null=True, blank=True)
    given_name = models.CharField(max_length=100, blank=True)
    email_verified = models.BooleanField(blank=True, null=True)
    sub = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name +' '+ self.email

class Hostel(models.Model):
    manager_id=models.ForeignKey(User, on_delete=models.CASCADE, related_name='hostel') #hostel.managerid
    hostel_id=models.BigAutoField(primary_key=True)
    hostel_name=models.CharField(max_length=200, null=True, blank=True)
    type=(
        ('Boys',"Boys"),
        ('Girls',"Girls")
    )
    hostel_type = models.CharField(max_length=10 , choices=type, null=True)
    pan_no=models.CharField(max_length=200, null=True, blank=True)
    district=models.CharField(max_length=100,null=True, blank=True)
    place=models.CharField(max_length=100,null=True, blank=True)
    manager_name=models.CharField(max_length=100,null=True, blank=True)
    manager_contact=models.CharField(max_length=100,null=True, blank=True)
 #price
    single_seater=models.IntegerField(null=True, blank=True)
    two_seater=models.IntegerField(null=True, blank=True)
    three_seater=models.IntegerField(null=True, blank=True)
    four_seater=models.IntegerField(null=True, blank=True)
    admission_fee=models.IntegerField(null=True, blank=True)
    # ----
    description=models.TextField(max_length=1000, blank=True, null=True)
#images
    image_1=models.URLField(null=True, blank=True)
    image_2=models.URLField(null=True, blank=True)
    image_3=models.URLField(null=True, blank=True)
# Facilities
    wifi=models.BooleanField(default=False)
    closet=models.BooleanField(default=False)
    hot_water=models.BooleanField(default=False)
    laundry=models.BooleanField(default=False)
    parking=models.BooleanField(default=False)
    cctv=models.BooleanField(default=False)
    fan=models.BooleanField(default=False)
    balcony=models.BooleanField(default=False)
    # ----------------------------
    map_link=models.URLField(null=True, blank=True)

    def __int__(self):
        return self.hostel_id

   

    def __str__(self):
        # return self.hostel_name+' '+self.hostel_type
        return f"{self.hostel_id} - {self.hostel_name}"