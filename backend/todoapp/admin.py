from django.contrib import admin

from .models import ProjectList, TODOList

admin.site.register(ProjectList)
admin.site.register(TODOList)
