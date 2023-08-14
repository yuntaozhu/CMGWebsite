<script>
    import { Button, HamburgerMenu } from "$components";
    import { page } from "$app/stores";

    let pages = [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/about-us" },
        { title: "Showcase", url: "/showcase" },
        { title: "Developers", url: "/developers" },
        { title: "Contact Us", url: "/contact-us" },
    ];

    const isActive = (/** @type {string} */ path) => {
        console.log(path === $page.url.pathname, $page.url.pathname, path);
        return $page.url.pathname == path;
    };
</script>

<nav class="py-2 fixed w-screen z-50 md:px-5 md:backdrop-blur-md">
    <div class="flex justify-between container mx-auto">
        <a href="/" class="hidden md:block">
            <img
                src="/logo.webp"
                alt="The official seal of The Alliance of Computer Science Student"
                width="50"
                height="50"
                class="w-14 h-14"
            />
        </a>
        <ul class="hidden md:flex items-center gap-5">
            {#each pages as { title, url }}
                <li>
                    <a
                        href={url}
                        class={`duration-300 ${
                            isActive(url)
                                ? "border-b-2 border-base-sky-blue"
                                : ""
                        } hover:text-base-sky-blue`}>{title}</a
                    >
                </li>
            {/each}
        </ul>
        <div class="flex md:hidden justify-start self-start">
            <HamburgerMenu />
        </div>
    </div>
</nav>

<style>
    /* .border-gradient {
        border-image: linear-gradient(
            270deg,
            rgba(0, 245, 241, 0) 0%,
            #00f5f1 47.92%,
            rgba(0, 245, 241, 0) 100%
        );
        border-width: 100px;
        border-style: solid;
    } */

    .show {
        opacity: 1;
    }
    .nav {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        padding: 3rem;

        width: 100%;
        max-height: 5rem;
    }

    .nav__logo {
        max-height: 4rem;
    }

    .nav__right {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        column-gap: 3rem;
    }
</style>
