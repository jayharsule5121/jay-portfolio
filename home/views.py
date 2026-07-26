from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact

def index(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Save to Database
        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

        # ----------------------------
        # Mail to YOU
        # ----------------------------
        send_mail(
            subject="New Contact Form Submission",
            message=f"""
New message received from Portfolio

Name : {name}
Email : {email}

Message:
{message}
            """,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=["jayharsule5121@gmail.com"],   # <-- Tumcha email
            fail_silently=False,
        )

        # ----------------------------
        # Auto Reply to USER
        # ----------------------------
        send_mail(
            subject="Thank You for Contacting Me",
            message=f"""
Hi {name},

Thank you for contacting me.

I have received your message and will get back to you soon.

Regards,
Jay Harsule
Python Developer
            """,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],   # <-- User cha email
            fail_silently=False,
        )

        return redirect("/")

    return render(request, "index.html")