<script>
    // Import statements
    import RegSectionBody from "$components/organisms/RegistrationForms/RegSectionBody.svelte";
    import TextInputComponent from "$components/atoms/TextInputComponent.svelte";
    import EmailInputComponent from "$components/atoms/EmailInputComponent.svelte";
    import NumberInputComponent from "$components/atoms/NumberInputComponent.svelte";
    import DropdownInputComponent from "$components/atoms/DropdownInputComponent.svelte";
    import RadioInputComponent from "$components/atoms/RadioInputComponent.svelte";
    import SubmitButton from "$components/atoms/SubmitButton.svelte";

    // CUSTOMIZE THIS: Add the list of dropdown options and radio options here
    let dropdown = ["Option 1", "Option 2", "Option 3"];
    let radio = ["Option 1", "Option 2"];
    // END OF CUSTOMIZATION

    // Form submission
    function submitForm() {
        let formValues = {};
        
        // @ts-ignore
        let components = document.getElementById("components")?.children;
        if (components) {
            for (let component of components) {
                if (
                    component.id.substring(0, 14) === "FormRadioACSS-"
                ) {
                    let name = component.id.replace("FormRadioACSS-", "");
                    console.log(component.id);
                    const radio = document.querySelectorAll(
                        `input[name="${name}"]`
                    );
                    for (const f of radio) {
                        // @ts-ignore
                        if (f.checked) {
                            // @ts-ignore
                            formValues[name] = f.value;
                        }
                    }
                }else{
                    // @ts-ignore
                    formValues[component.id] = document.getElementById(`Form${component.id}`).value;
                }
            }
            console.log(formValues);
        }
    }
</script>

<RegSectionBody>
    <form
        id="registration-form"
        slot="registration-form"
        class="h-[100%] flex flex-col justify-between"
        on:submit={submitForm}
    >
        <div id="components">
            <!-- CUSTOMIZE THIS: Add the input components here -->
            <TextInputComponent label="Text" />
            <NumberInputComponent label="Number" />
            <EmailInputComponent label="Email" />
            <DropdownInputComponent label="Dropdown" options={dropdown} />
            <RadioInputComponent label="Radio" options={radio} />
            <!-- END OF CUSTOMIZATION -->
        </div>
        <div class="overflow-hidden">
            <SubmitButton/>
        </div>
    </form>
</RegSectionBody>
