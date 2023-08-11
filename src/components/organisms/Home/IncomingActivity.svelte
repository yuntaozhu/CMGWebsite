<!-- Incoming/Ongoing Event Section -->
<script>
  let eventName = "ACSS Orientation";
  let eventDescription = "Get to know more about the organization.";
  let eventImage = "/assets/event-image.svg";
  let eventDateTime = "September 00, 2023 7:00 PM";
  import Button from "../../atoms/Button.svelte";
</script>

<section>
  <div class="grid grid-cols-1 ss:pt-20 md:pt-32">
    <div class="relative h-[40px] ss:h-[75px]">
      <img
        src="/assets/event-header.svg"
        alt="ACSS Event Header"
        class="absolute top-0 left-0 md:left-[38%]"
      />

      <p
        class="absolute font-bold text-xl ss:text-2xl pl-[30%] pt-[6%] ss:pt-[6.5%] min-[510px]:pt-8 min-[510px]:pl-30 min-[615px]:pl-[25%] md:pl-[58%] min-[935px]:pl-[55%] min-[1115px]:pl-[52%] min-[1420px]:pl-[50%] 2xl:pl-[48%]"
      >
        Incoming Event
      </p>
    </div>
    <div
      class="p-10 md:py-20 lg:px-28 xl:px-[20%] md:grid md:grid-cols-3 md:gap-8"
    >
      <div
        class="md:w-[200px] md:h-[200px] lg:h-[280px] lg:w-[280px] justify-self-end"
      >
        <img
          src={eventImage}
          alt="ACSS Event Placeholder"
          class="object-cover"
        />
      </div>
      <div class="md:col-span-2 justify-self-center">
        <p
          class="text-3xl ss:text-4xl lg:text-5xl content-center font-bold gradient-line py-2"
        >
          {eventName}
        </p>
        <p class="pt-4">{eventDescription}</p>
        <div
          class="glassmorphic-rectangle flex flex-row gap-2 min-[485px]:gap-5 p-[7%] min-[485px]:p-3.5 min-[485px]:w-[325px] mt-4 mb-6 items-center"
        >
          <img
            src="/assets/calendar.svg"
            alt="Calendar Icon"
            class="w-[40px]"
          />
          <p class="text-center">{eventDateTime}</p>
        </div>
        <Button text="Register Now" />
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
</style>
