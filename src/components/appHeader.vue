<script setup>
import NavBar from "@/components/navBar.vue";
</script>

<template>
    <div class="container">
        <h1>
            <router-link to="/" draggable="false">SPA Template</router-link>
        </h1>
        <navBar/>
    </div>
</template>

<style scoped>
.container {
    grid-area: header;
    width: 100%;
    background-color: var(--color-background-dark);
    display: flex;
    gap: 1em;
    flex-direction: row;
    user-select: none;
}

.container h1 {
    text-indent: 1rem;

    a {
        color: var(--color-heading);
    }
}

.container h1::after {
    color: var(--color-background);
    content: " |";
}
</style>