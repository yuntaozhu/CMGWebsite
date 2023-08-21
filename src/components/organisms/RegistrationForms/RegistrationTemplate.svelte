<script>
    import RegSectionHead from "$components/organisms/RegistrationForms/RegSectionHead.svelte"; // head component
  
    /**
     * @type {any}
     */
     export let headerPhotoURL;
    /**
     * @type {any}
     */
     export let eventName;
    /**
     * @type {any}
     */
     export let eventDescription;
  </script>
  
  <head>
    <title>Form / {eventName}</title>
  </head>
  
  <div
    class="h-full min-h-screen flex-column text-base-white overflow-y-hidden overflow-x-hidden pb-20"
  >
    <RegSectionHead {headerPhotoURL} {eventName} {eventDescription} />
    <!-- Form Component-->
    <slot name="form" />
  </div>
  