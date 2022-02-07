import os
import json

from django.core.management.base import BaseCommand

from userapp.models import User

# JSON_PATH = 'userapp/management/jsons'
#
#
# def load_from_json(file_name):
#     with open(os.path.join(JSON_PATH, file_name + '.json'), mode='r', encoding='utf-8') as infile:
#         return json.load(infile)
#
#
# class Command(BaseCommand):
#     def handle(self, *args, **options):
#         users = load_from_json('users')
#
#         User.objects.all().delete()
#         for user in users:
#             new_user = User(**user)
#             new_user.save()
#
#         super_user = User.objects.create_superuser('admin', 'admin@local.ru', 'admin')


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('count', type=int)

    def handle(self, *args, **options):
        # очищаем базу юзеров
        User.objects.all().delete()
        # создаем суперюзера
        User.objects.create_superuser('admin', 'admin@local.ru', 'admin')
        # создаем тестовых юзеров
        user_count = options['count']
        for i in range(user_count):
            User.objects.create_user(f'user_{i}', f'user_{i}@test.ru', 'qwerty')

        print('Done')
