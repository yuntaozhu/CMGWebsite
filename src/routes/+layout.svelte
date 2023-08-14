<script>
    import "../app.css";
    import { NavBar, Footer, ChatBot } from "$components";
</script>

<main class="overflow-hidden">
    <NavBar />
    <!-- <ChatBot /> -->
    <slot />
    <Footer />
</main>
