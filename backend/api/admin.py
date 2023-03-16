from django.contrib import admin
from .models import User, Hostel, Review, Booking
# Register your models here.
admin.site.register(User)
admin.site.register(Hostel)
admin.site.register(Review)
admin.site.register(Booking)
