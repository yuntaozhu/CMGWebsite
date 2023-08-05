<!-- Incoming/Ongoing Event Section -->
<script>
    let eventName = "ACSS Orientation";
    let eventDescription = "Get to know more about the organization.";
    let eventImage = "/home/event-image.svg";
    let eventDateTime = "September 00, 2023 7:00 PM";
    import Button from "./Button.svelte";
</script>

<section class="p-10">
    <div class="grid grid-cols-1">
        <div class="relative">
            <img
                src="/home/event-header.svg"
                alt="ACSS Event Header"
                class="absolute top-0 left-0"
            />
            <p class="absolute pl-[20%] pt-[2%]">Incoming Event</p>
        </div>

        <img src={eventImage} alt="ACSS Event Placeholder" />
        <p>{eventName}</p>
        <p>{eventDescription}</p>
        <div>
            <img src="/home/calendar.svg" alt="Calendar Icon" />
            <p>{eventDateTime}</p>
        </div>
        <Button text="Register Now" />
    </div>
</section>
