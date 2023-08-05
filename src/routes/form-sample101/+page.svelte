<!-- 
  This is a registration page where you can alter the following:
    1. Header Photo (best resolution: 1600px x 400px)
    2. Event Name
    3. Event Description

  Go to src/components/forms/'the-form-component' to modify a form 
-->

<script>
    import RegistrationTemplate from "$components/forms/forms-components/RegistrationTemplate.svelte"; // registration template component
    import Sample101 from "$components/forms/Sample101.svelte"; // form component
  
    let headerPhotoURL = "https://wallpapercave.com/wp/wp5787527.jpg"; // Header Photo: a file from static folder
    let eventName = "Sample 101"; // Event Name
    let eventDescription = `
                This is a sample form.
                `; // Event Description
  </script>
  
  <RegistrationTemplate headerPhotoURL={headerPhotoURL} eventName={eventName} eventDescription={eventDescription}>
    <Sample101 slot=form/>
  </RegistrationTemplate>
  