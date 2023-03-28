from django.contrib import admin
from .models import AttendEvent,Event,Recipe
admin.site.register(Recipe)
admin.site.register(Event)
admin.site.register(AttendEvent)

# Register your models here.
