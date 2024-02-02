<script>
  import { AW24ButtonDark } from "../../../aw2024-components";
  const companies = [
    {
      company: "UPLB1",
      desc: "Happy to have served as the adviser for several years. Keep up the great work with the projects and activities that benefit the ICS students.",
      photo: "/assets/advisers-1.webp",
      url: "/",
    },
    {
      company: "UPLB2",
      desc: "I've had the privilege of advising ACSS, and it's been a remarkable experience. ACSS stands out for its proactive efforts in launching programs to aid their fellow students.",
      photo: "/assets/advisers-2.webp",
      url: "/",
    },
  ];
  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
</script>

<div
  class="w-3/5 flex mt-10 flex-row justify-center align-center items-center ctalks-text gap-20"
>
  {#each companies as companies (companies.company)}
    <div class="flex flex-col flex-1 justify-center align-center items-center">
      <div class="flex justify-center align-center self-center float">
        <img src={companies.photo} alt={companies.company} class="photo-size" />
      </div>
      <div
        class="flex flex-col mt-5 justify-center align-center items-center text-center"
      >
        <div class="font-xl font-extrabold">{companies.company}</div>
        <div class="mt-3 font-medium">{companies.desc}</div>
        <a
          href={companies.url}
          class="flex justify-center align-center items-center"
        >
          <div class="flex justify-center align-center items-center mt-2">
            <AW24ButtonDark onClick={handleClick}>View</AW24ButtonDark>
          </div>
        </a>
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
