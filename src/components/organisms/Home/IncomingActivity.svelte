<!-- Incoming/Ongoing Event Section -->
<script>
  let eventName = "ACSS Orientation";
  let eventDescription =
    "Lorem ipsum dolor sit amet consectetur. Euismod tellus mattis eget bibendum tempus non sed. Posuere dis sapien suspendisse tellus. Urna venenatis.";
  let eventImage = "/assets/placeholder-event-image.svg";
  let eventDateTime = "September 00, 2023 7:00 PM";
  import { Button } from "$components";
  function handleButton() {
    window.location.href = "/registration/form-acss-orientation";
  }
</script>

<section class="scrollFadeIn">
  <div class="container banner-container p-2 grid grid-cols-1 ss:mt-20 md:mt-28 mx-auto">
    <div class="p-10 lg:px-14 xl:px-[18%] md:grid md:grid-cols-3 md:gap-8">
      <div class="md:col-span-2 justify-self-center">
        <div
          class="flex flex-row gap-2 px-4 py-2 mb-4 justify-center items-center max-w-fit incoming-event"
        >
          <img
            src="/assets/notification.svg"
            alt="Notification Vector"
            class="w-6"
          />

          <p class="font-bold text-sm">Incoming Event</p>
        </div>
        <p
          class="text-3xl content-center font-bold gradient-line py-2 max-w-fit"
        >
          {eventName}
        </p>
        <p class="pt-4">{eventDescription}</p>
        <div
          class="glassmorphic-rectangle flex flex-row gap-2 min-[485px]:gap-5 p-[7%] min-[485px]:p-3.5 min-[485px]:w-[325px] my-4 items-center"
        >
          <img
            src="/assets/calendar.svg"
            alt="Calendar Icon"
            class="w-[40px]"
          />
          <p class="text-center">{eventDateTime}</p>
        </div>
        <Button onClick={handleButton}>Register Now</Button>
      </div>
      <div class="justify-self-end self-center">
        <img
          src={eventImage}
          alt="ACSS Event Placeholder"
          class="object-cover"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .gradient-line {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-image-source: linear-gradient(
      270deg,
      rgba(46, 55, 146, 0) 0%,
      #2e3792 27.6%,
      #00f5f1 74.48%,
      rgba(0, 245, 241, 0) 100%
    );
  }

  .glassmorphic-rectangle {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .banner-container {
    background: linear-gradient(
      0deg,
      rgba(0, 245, 241, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: 10px;
  }

  .incoming-event {
    border-radius: 60px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>
