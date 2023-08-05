<!-- 
  This is a registration page where you can alter the following:
    1. Header Photo (best resolution: 1600px x 400px)
    2. Event Name
    3. Event Description

  Go to src/components/forms/'the-form-component' to modify or add your own form form 
-->

<script>
    import Sample101 from "$components/forms/Sample101.svelte"; // your own form component
    import RegistrationTemplate from "$components/forms/forms-components/RegistrationTemplate.svelte"; // registration template component
  
    let headerPhotoURL = "https://wallpapercave.com/wp/wp5787527.jpg"; // Header Photo: a file from static folder
    let eventName = "Sample 101"; // Event Name
    let eventDescription = `
                This is a sample form.
                `; // Event Description
  </script>
  
  <RegistrationTemplate headerPhotoURL={headerPhotoURL} eventName={eventName} eventDescription={eventDescription}>
    <!-- Insert here your form component with an attribute slot="form" -->
    <Sample101 slot=form/>
  </RegistrationTemplate>
  