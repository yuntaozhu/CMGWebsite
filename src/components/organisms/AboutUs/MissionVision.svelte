<div class="mission-vision flex flex-row gap-8">
  <div class="mission-container flex grow justify-end items-start w-1/2">
    <div class="flex flex-col pt-12 p-10 gap-3 text-right w-4/5">
      <h3 class="mission-title">Mission</h3>
      <p class="card text-lg font-extralight h-1/2">
        It shall be the mission of this organization to develop students worthy
        of the title “Iskolar ng Bayan para sa Bayan”; to continuously expand
        the knowledge, wisdom, skills, and abilities of the members through its
        principles; to help the university, more importantly its students, in
        all that it can offer; and to assist in shaping individuals that shall
        lead in solving problems of the community using technology, especially
        computing sciences as its tool
      </p>
    </div>
  </div>
  <div class="vision-container flex grow justify-start items-end w-1/2">
    <div class="flex flex-col pt-12 p-10 gap-3 text-left w-4/5">
      <h3 class="vision-title">Vision</h3>
      <p class="card text-lg font-extralight h-1/2">
        It shall be the vision of this organization to become a national
        organization that shall be helpful to the country and its people, and
        establish a company that shall offer accessible, effective, and reliable
        services to the public.
      </p>
    </div>
  </div>
</div>

<style>
  .mission-vision {
    height: 90vh;
    margin-top: 10rem;
  }
  .mission-title,
  .vision-title {
    transition: color 0.5s, text-shadow 0.5s;
  }

  .mission-container {
    height: 50vh;
  }
  .mission-container:hover .mission-title,
  .vision-container:hover .vision-title {
    text-shadow: 0 0 1px white, 0 0 3px white, 0 0 3px white;
    color: transparent;
  }

  .card {
    border-radius: 10px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 80%
    );
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(21px);
    padding: 3rem;
    text-align: center;
  }
</style>
