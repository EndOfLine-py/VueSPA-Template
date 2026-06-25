<script setup>

</script>

<template>
    <div class="container">
        <h4 class="right">Made in 2026</h4>
        <h4 class="center">-</h4>
        <h4 class="left">With <3 by <a href="https://github.com/EndOfLine-py/" target="_blank" draggable="false">EndOfLine-Py</a></h4>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    background-color: var(--color-background-dark);
    display: flex;
    align-items: center;
    gap: 1em;
    user-select: none;
}

.container .left {
    flex: 1;
    text-align: left;
}

.container .center {
    text-align: center;
    font-weight: bold;
}

.container .right {
    flex: 1;
    text-align: right;
}
</style>