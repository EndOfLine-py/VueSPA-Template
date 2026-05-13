<script setup>

</script>

<template>
    <div class="container">
        <div class="box">
            <img src="https://avatars.githubusercontent.com/u/54771755" alt="No image for you! :D">
            <p>
                French Comp Sci student using my coding experience to solve micro problems, do things my way or just have fun!
                <br>
                <br>
                And about me, I code <a href="https://github.com/EndOfLine-py?tab=repositories"
                                        target="_blank">stuff</a>.
            </p>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    gap: 1em;
    background-color: var(--color-background-light);
    padding: 1em;
    border-radius: 15px;
    box-shadow: 0px 0px 5px var(--shadow);
    margin: 1em;

}

img {
    flex-shrink: 0;
    width: 120px;
    border-radius: 15px;
    text-align: center;
}
</style>