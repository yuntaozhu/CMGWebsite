<!-- 
  This is a registration page where you can alter the following:
    1. Header Photo (best resolution: 1600px x 400px)
    2. Event Name
    3. Event Description

  Go to src/components/forms/'the-form-component' to modify a form 
-->

<script>
    import RegistrationTemplate from "$components/forms/forms-components/RegistrationTemplate.svelte"; // registration template component
    import ACSSOrientation from "$components/forms/ACSSOrientation.svelte"; // form component
  
    let headerPhotoURL = "sample-reg-header.png"; // Header Photo: a file from static folder
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
  
  <RegistrationTemplate headerPhotoURL={headerPhotoURL} eventName={eventName} eventDescription={eventDescription}>
    <ACSSOrientation slot=form/>
  </RegistrationTemplate>
  