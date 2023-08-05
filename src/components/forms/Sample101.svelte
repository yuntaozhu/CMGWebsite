<script>
    // Import statements
    import RegSectionBody from "./forms-components/RegSectionBody.svelte";
    import TextInputComponent from "./forms-components/TextInputComponent.svelte";
    import NumberInputComponent from "./forms-components/NumberInputComponent.svelte";
    import DropdownInputComponent from "./forms-components/DropdownInputComponent.svelte";
    import RadioInputComponent from "./forms-components/RadioInputComponent.svelte";
    import SubmitButton from "./forms-components/SubmitButton.svelte";

    // Dropdown input options
    let dropdown = [
        "Option 1",
        "Option 2",
        "Option 3",
    ];

    // Radio input options
    let radio = ["Option 1" , "Option 2"];

    // Form submission
    function submitForm() {
        let formValues = {};
        console.log(formValues);
    }
</script>

<RegSectionBody>
    <div id="a" slot="registration-form" class="h-[100%] flex flex-col justify-between">
        <div>
            <!-- Add The Input Components Here -->
            <TextInputComponent label="Text" />
            <NumberInputComponent label="Number" />
            <TextInputComponent label="Email" />
            <DropdownInputComponent label="Dropdown" options={dropdown} />
            <RadioInputComponent
                label="Radio"
                options={radio}
            />
        </div>
        <div class="overflow-hidden">
            <SubmitButton submit={submitForm} />
        </div>
    </div>
</RegSectionBody>