from django.shortcuts import render


def index(request):
    return render(request, 'angular_app/index.html')


def team_list(request):
    return render(request, 'angular_app/team_list.html')


def file_upload(request):
    return render(request, 'angular_app/file_upload.html')


def socket_io(request):
    return render(request, 'angular_app/socket_io.html')


