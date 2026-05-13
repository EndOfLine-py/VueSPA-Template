<script setup>
import {RouterView} from 'vue-router'
import AppFooter from "@/components/appFooter.vue";
import AppHeader from "@/components/appHeader.vue";
</script>

<template>
    <header>
        <app-header></app-header>
    </header>

    <main>
        <RouterView/>
    </main>

    <footer>
        <app-footer></app-footer>
    </footer>
</template>

<style scoped>

</style>
