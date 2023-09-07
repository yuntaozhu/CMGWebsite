<script>
    import RegSectionHead from "$components/molecules/Form/RegSectionHead.svelte"; // head component
  
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
    <title>{eventName} Form - The Alliance of Computer Science Students UPLB</title>
    <meta name="title" content="{eventName} Form - The Alliance of Computer Science Students UPLB" />
    <meta
    property="og:title"
    content="{eventName} Form - The Alliance of Computer Science Students UPLB"
    />
    <meta
    property="twitter:title"
    content="{eventName} Form - The Alliance of Computer Science Students UPLB"
    />
    <meta name="description" content="{eventDescription}" />
    <meta
      property="og:description"
      content="{eventDescription}"
    />
    <meta
      property="twitter:description"
      content="{eventDescription}"
    />
  </head>
  
  <div
    class="h-full min-h-screen flex-column text-base-white overflow-y-hidden overflow-x-hidden pb-20"
  >
    <div class="relative z-20">
      <RegSectionHead {headerPhotoURL} {eventName} {eventDescription} />
    </div>
    <!-- Form Component-->
    <slot name="form" />
  </div>
  