<script>
    let showModal = false
</script>

{#if showModal}
    <div class = "modal fixed inset-0 flex justify-center z-20 backdrop-blur-lg bg-base-black w-full height-full ">
        <div>
           
        </div>
    </div>
{/if}

<style>
    .modal{
        background: linear-gradient(
            180deg,
            rgba(9, 9, 54, 0.663) 0%,
            rgba(6, 2, 23, 0.8) 100%
        );
    }

</style>