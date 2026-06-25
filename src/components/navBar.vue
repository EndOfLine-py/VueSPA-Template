<script setup>
import {RouterLink} from 'vue-router';

import router from '@/router';

const navRoutes = router.options.routes.filter(
    route => route.meta?.showInNav
);
</script>

<template>
    <nav>
        <router-link
            v-for="route in navRoutes"
            :key="route.path"
            :to="route.path"
            draggable="false"
        >
            {{ route.name }}
        </router-link>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    gap: 1.2em;
    align-items: center;
    font-size: 18px;
}

.router-link-active {
    text-decoration: underline;
    color: var(--accent-light);
}
</style>