<script>
    // Import statements
    import RegSectionBody from "./forms-components/RegSectionBody.svelte";
    import TextInputComponent from "./forms-components/TextInputComponent.svelte";
    import NumberInputComponent from "./forms-components/NumberInputComponent.svelte";
    import DropdownInputComponent from "./forms-components/DropdownInputComponent.svelte";
    import RadioInputComponent from "./forms-components/RadioInputComponent.svelte";
    import SubmitButton from "./forms-components/SubmitButton.svelte";

    // Dropdown input options
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

    // Radio input options
    let howYouHear = ["ACSS Social Media Post", "Shared Post of a Friend"];

    // Form submission
    function submitForm() {
        let formValues = {};
        console.log(formValues);
    }
</script>

<RegSectionBody>
    <div slot="registration-form">
        <!-- Add The Input Components Here -->
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
        <SubmitButton submit={submitForm} />
    </div>
</RegSectionBody>
