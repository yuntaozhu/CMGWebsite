<script>
    import TeamCard from './TeamCard.svelte';
    import DeveloperCard from './DeveloperCard.svelte';
    import { teams } from './data.js';
    import { onMount } from 'svelte';

    let activeSection = teams[0].name;

    onMount(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
                } else {
                    document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
                }
            });
        });

        // Track all sections that have an `id` applied
        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        // Function to handle smooth scrolling
        function scrollToSection(sectionId) {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                const offset = targetSection.offsetTop - 75; // Adjust the offset as needed
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            }
        }

        // Add click event listeners to navigation links
        document.querySelectorAll('.section-nav a').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const sectionId = link.getAttribute('href').substring(1); // Remove the # symbol
                scrollToSection(sectionId);
            });
        });
    });
</script>

<div class="team-tabs-wrapper">
    <div class="team-tabs flex justify-center items-center ">
        <nav class="section-nav">
            <ol class='flex flex-wrap mx-auto'>
                {#each teams as team}
                <li class="{activeSection === team.name ? 'active ' : ''}">
                    <a href="#{team.name}" class="block py-1 transition px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                            <circle cx="12" cy="12" r="9" />
                            </svg>
                    </a>
                </li>
                {/each}
            </ol>
        </nav>
    </div>
</div>

<div class="container mx-auto">
        {#each teams as team}
        <section id={team.name} class="pb-32">
            <TeamCard teamName={team.name} description={team.description} />

            <div class="flex flex-col items-center justify-center pt-4">
                <div class="grid grid-cols-4 gap-4 mb-4">
                    {#each team.developers as developer, i}
                        {#if i < (team.developers.length - 1) - ((team.developers.length - 1) % 4)}
                            <DeveloperCard developer={developer} />
                        {/if}
                    {/each}
                </div>
                <div class="flex gap-4">
                    {#each team.developers as developer, i}
                        {#if i >= (team.developers.length - 1) - ((team.developers.length - 1) % 4)}
                            <DeveloperCard developer={developer} />
                        {/if}
                    {/each}
                </div>
            </div>
        </section>
        {/each}
</div>

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    .section-nav li.active > a {
        color: #ffffff;
        font-weight: 500;
    }

    .section-nav a {
        color: #02aeed;
        transition: all 50ms ease-in-out;
    }

    .section-nav a:hover,
    .section-nav a:focus {
        color: #ffffff;
    }
    .team-tabs-wrapper {
        position: sticky;
        top: 0;
        z-index: 40; /* Add a high z-index value */
    }
</style>