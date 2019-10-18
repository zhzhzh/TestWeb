from django.shortcuts import render


def index(request):
    return render(request, 'd3_app/index.html')

