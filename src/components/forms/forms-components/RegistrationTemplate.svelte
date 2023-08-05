<!-- 
  Go to src/components/forms/'the-form-component' to modify a form 
-->

<script>
    import RegSectionHead from "$components/forms/forms-components/RegSectionHead.svelte"; // head component
  
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
    class="h-full min-h-screen flex-column bg-base-dark-2 text-base-white overflow-y-hidden overflow-x-hidden pb-20"
  >
    <RegSectionHead {headerPhotoURL} {eventName} {eventDescription} />
    <!-- Form Component-->
    <slot name="form" />
  </div>
  