<script>
    // Import statements
    import RegSectionBody from "$components/organisms/RegistrationForms/RegSectionBody.svelte";
    import TextInputComponent from "$components/atoms/TextInputComponent.svelte";
    import NumberInputComponent from "$components/atoms/NumberInputComponent.svelte";
    import DropdownInputComponent from "$components/atoms/DropdownInputComponent.svelte";
    import RadioInputComponent from "$components/atoms/RadioInputComponent.svelte";
    import SubmitButton from "$components/atoms/SubmitButton.svelte";

    // CUSTOMIZATION: Add the list of dropdown and radio selection here
    let dropdown = ["Option 1", "Option 2", "Option 3"]; 
    let radio = ["Option 1", "Option 2"];
    // END OF CUSTOMIZATION

    // Form submission
    function submitForm() {
        let components = document.getElementById("components")?.children;
        let formValues = [];
        for(let component in components){
            // @ts-ignore
            console.log(component);
        }
    }
</script>

<RegSectionBody>
    <div
        slot="registration-form"
        class="h-[100%] flex flex-col justify-between"
    >
        <div id="components">
            <!-- CUSTOMIZATION: Add The Input Components Here -->
            <TextInputComponent label="Text" />
            <NumberInputComponent label="Number" />
            <TextInputComponent label="Email" />
            <DropdownInputComponent label="Dropdown" options={dropdown} />
            <RadioInputComponent label="Radio" options={radio} />
            <!-- END OF CUSTOMIZATION -->
        </div>
        <div class="overflow-hidden">
            <SubmitButton submit={submitForm} />
        </div>
    </div>
</RegSectionBody>