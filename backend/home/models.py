from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    instructions = models.TextField()
    prep_time = models.BigIntegerField()
    cook_time = models.BigIntegerField()
    rating = models.IntegerField()
    image = models.CharField(max_length=256,)
class Event(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
    city = models.CharField(max_length=256,)
    datetime = models.DateTimeField()
    created_at = models.DateTimeField(null=True,blank=True,auto_now_add=True,)
    image = models.URLField(null=True,blank=True,)
    info = models.TextField(null=True,blank=True,)
class AttendEvent(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="attendevent_user",)
    event = models.ForeignKey("home.Event",on_delete=models.CASCADE,related_name="attendevent_event",)
