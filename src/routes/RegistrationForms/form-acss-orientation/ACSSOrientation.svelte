<script>
    // Import statements
    import RegSectionBody from "$components/organisms/RegistrationForms/RegSectionBody.svelte";
    import TextInputComponent from "$components/atoms/TextInputComponent.svelte";
    import NumberInputComponent from "$components/atoms/NumberInputComponent.svelte";
    import DropdownInputComponent from "$components/atoms/DropdownInputComponent.svelte";
    import RadioInputComponent from "$components/atoms/RadioInputComponent.svelte";
    import SubmitButton from "$components/atoms/SubmitButton.svelte";

    // CUSTOMIZATION: Add the list of dropdown and radio selection here
    let colleges = [
        "College of Arts and Sciences",
        "College of Economics and Management",
        "College of Forestry and Natural Resources",
        "College of Development Communication",
        "Collegee of Agriculture and Food Science",
        "College of Engineering and Agro-industrial Technology",
        "College of Human Ecology",
        "College of Veterinary Medicine",
        "College of Public Affairs and Development",
        "School of Environmental Science and Management",
    ];

    let howYouHear = ["ACSS Social Media Post", "Shared Post of a Friend"];
    // END OF CUSTOMIZATION

    // Form submission
    function submitForm() {
        let formValues = {};
        console.log(formValues);
    }
</script>

<RegSectionBody>
    <div
        slot="registration-form"
        class="h-[100%] flex flex-col justify-between"
    >
        <div id="components">
            <!-- CUSTOMIZATION: Add The Input Components Here -->
            <TextInputComponent label="Name" />
            <TextInputComponent label="Nickname" />
            <TextInputComponent label="Email" />
            <DropdownInputComponent label="College" options={colleges} />
            <TextInputComponent label="Degree Program" />
            <NumberInputComponent label="Batch" />
            <TextInputComponent label="Facebook Profile Link" />
            <RadioInputComponent
                label="How did you hear about this event?"
                options={howYouHear}
            />
            <!-- END OF CUSTOMIZATION -->
        </div>
        <div class="overflow-hidden">
            <SubmitButton submit={submitForm} />
        </div>
    </div>
</RegSectionBody>

<style>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
