from django.db import models

from userapp.models import User


class ProjectList(models.Model):
    name = models.CharField(verbose_name='Название', max_length=64, unique=True)
    repository = models.URLField(verbose_name='Репо', blank=True)
    users = models.ManyToManyField(User, verbose_name='Юзеры')

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'project_list'
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'


class TODOList(models.Model):
    project = models.ForeignKey(ProjectList, on_delete=models.CASCADE, verbose_name='Проект', related_name='todo')
    text = models.CharField(verbose_name='Текст заметки', max_length=256)
    created_at = models.DateTimeField(verbose_name='Создано', auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name='Обновлено', auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Автор')
    is_active = models.BooleanField(verbose_name='Активно', default=True)

    def __str__(self):
        return self.text

    class Meta:
        db_table = 'todo_list'
        verbose_name = 'Заметка'
        verbose_name_plural = 'Заметки'
