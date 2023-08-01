<!-- Navbar.svelte -->
<script>
    import { onMount } from "svelte";

    // State variable to control the visibility of the mobile menu
    let isMobileMenuOpen = false;

    // Array of tab items
    let tabs = [
        { text: "Project Face", url: "/" },
        { text: "Home", url: "/home" },
        { text: "About", url: "/about" },
        { text: "Showcase", url: "/showcase" },
        { text: "Developers", url: "/developers" },
    ];

    // Function to set the initial active tab based on the current URL
    function setActiveTab() {
        const currentURL = window.location.pathname;
        tabs = tabs.map((tab) => ({
            ...tab,
            active: tab.url === currentURL,
        }));
    }

    // Call the function on component mount
    onMount(() => {
        setActiveTab();
    });

    // Function to update the active tab when clicked
    function handleTabClick(tab) {
        tabs = tabs.map((t) => ({
            ...t,
            active: t === tab,
        }));
    }

    // Function to toggle the mobile menu
    function toggleMobileMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }
</script>

<nav class="bg-white border-gray-200 dark:bg-base-black">
    <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
        <a href="/" class="flex items-center">
            <img src="/logo.webp" class="h-16 mr-3" alt="Flowbite Logo" />
            <!-- <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >ACSS</span
            > -->
        </a>
        <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            on:click={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
        >
            <span class="sr-only">Open Main Menu</span>
            <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
        <div
            class="{isMobileMenuOpen
                ? 'block'
                : 'hidden'} w-full md:flex md:w-auto"
            id="navbar-default"
        >
            <ul
                class="font-medium flex flex-col md:flex-row md:space-x-8 md:mt-0 md:bg-white dark:bg-base-black md:dark:bg-base-black"
            >
                {#each tabs as tab}
                    <li>
                        <a
                            href={tab.url}
                            class="block py-2 px-3 rounded-md md:px-4 {tab.active
                                ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                                : 'text-white'} hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent {tab.active
                                ? 'bg-blue-700'
                                : 'hover:text-blue-700'}"
                            on:click={() => handleTabClick(tab)}>{tab.text}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
        {#if isMobileMenuOpen}
            <div
                class="md:hidden absolute z-10 top-16 right-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md"
            >
                <ul class="py-2">
                    {#each tabs as tab}
                        <li>
                            <a
                                href={tab.url}
                                class="block px-4 py-2 {tab.active
                                    ? 'text-blue-700 dark:text-blue-500'
                                    : 'text-white'} hover:bg-gray-100 dark:hover:bg-gray-700"
                                on:click={() => handleTabClick(tab)}
                                >{tab.text}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</nav>

<style>
    /* Add this to your CSS styles */
    .active {
        background-color: #4a86e8;
    }

    @media (max-width: 767px) {
        /* Hide the default navigation for small screens */
        #navbar-default {
            display: none;
        }

        /* Show the mobile menu button */
        .md\\:hidden {
            display: block;
        }
    }
</style>
