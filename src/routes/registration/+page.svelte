<!-- 
  This is the registration page where you can alter the following:
    1. Form Header (best resolution: 1600px x 400px)
    2. Event Name
    3. Event Description
-->

<script>
  import Regformhead from "$components/registration/registration-components/Regformhead.svelte"; // head component
  import Regform from "$components/registration/Regform.svelte"; // form component

  let photoHeaderURL = "sample-reg-header.png"; // Form Header: a file from static folder
  let eventName = "ACSS Orientation"; // Event Name
  let eventDescription = `
              This is an early registration form for the incoming ACSS Orientation
              "Insert Orientation Name" which aims to familiarize you with our
              growing organization. The orientation will be held on September 00,
              2023 at 6:00 PM. If you wish to join the orientation, kindly fill
              out this form. Orientation details and updates will be sent through
              the email used in answering this form.
              `; // Event Description
</script>

<head>
  <title>Registration Form</title>
</head>

<div
  class="h-full min-h-screen flex-column bg-base-dark-2 text-base-white overflow-y-auto overflow-x-hidden pb-20"
>
  <Regformhead {photoHeaderURL} {eventName} {eventDescription} />
  <Regform />
</div>
