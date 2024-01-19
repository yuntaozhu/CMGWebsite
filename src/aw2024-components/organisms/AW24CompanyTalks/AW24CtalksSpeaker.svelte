<script>
  const speakers = [
    {
      name: "Sir Fermin Roberto G. Lapitan",
      position: "Senior Adviser",
      company: "UPLB",
      desc: "Happy to have served as the adviser for several years. Keep up the great work with the projects and activities that benefit the ICS students.",
      photo: "/assets/advisers-1.webp",
    },
    {
      name: "Sir John O-Neil Geronimo",
      position: "Junior Adviser",
      company: "UPLB",
      desc: "I've had the privilege of advising ACSS, and it's been a remarkable experience. ACSS stands out for its proactive efforts in launching programs to aid their fellow students.",
      photo: "/assets/advisers-2.webp",
    },
  ];
</script>

<div
  class="w-3/5 flex mt-10 flex-row justify-center align-center items-center ctalks-text gap-20"
>
  {#each speakers as speaker (speaker.name)}
    <div class="flex flex-col flex-1 justify-center align-center items-center">
      <div class="flex justify-center align-center self-center float">
        <img src={speaker.photo} alt={speaker.name} class="photo-size" />
      </div>
      <div
        class="flex flex-col mt-5 justify-center align-center items-center text-center"
      >
        <div class="font-xl font-extrabold">{speaker.name}</div>
        <div class="mt-3 font-base">{speaker.position}</div>
        <div class="font-base italic">{speaker.company}</div>
        <div class="mt-3 font-medium">{speaker.desc}</div>
      </div>
    </div>
  {/each}
</div>

<style>
  .ctalks-text {
    color: #1c110a;
    text-shadow: 0px 24px 50.5px #faecce;
  }

  .float {
    animation: floatUpDown 3s infinite alternate;
  }

  @keyframes floatUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
</style>
