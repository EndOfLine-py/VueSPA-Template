<script setup>

</script>

<template>
  <div class="container">
    <h1>Hello!</h1>
    <p>This is a template for SPA websites, to ease development and make prototypes or app or whatever floats your
      boat.</p>
    <hr>
    <h1>Why ?</h1>
    <p>This serves as a playground for my personal projects, also sharpens my frontend skills, design wise, colors...
      And backend with NodeJS/VueJS.</p>
    <br>
    <p>And it's also a base foundation for any Router SPAs based on VueJS, since I couldn't find one with a lightweight
      stack and simple structure.</p>
    <hr>
    <h1>How it works</h1>
    <p>Works like most VueJS SPAs, kept the stack very lightweight, features nav bar buttons that are tied to the
      router's registered routes, light and dark mode support in a global CSS, customizable palette.</p>
    <br>
    <p>The goal was to make something easy and accessible that I can re-use for almost every project I want. And also
      make something easy to understand and play around for devs starting their VueJS adventure.</p>
    <hr>
    <h1>Technical</h1>
    <p>Name wise, Page-specific components are usually composed like: <code>[view name][Component name].vue</code>.</p>
    <br>
    <p>New routes are first defined in <code>router/index.js</code>.</p>
    <br>
    <p>Then, they need a page/view. There's a <code>views</code> folder, define new ones, edit or delete, do whatever,
      you're free!</p>
    <br>
    <p>App layout is a grid/bento box grid layout. Found the idea of using <code>grid-area-template</code> very useful
      for making page structures easily. I simply just define a container that takes the whole grid area, and I can put
      whatever inside, without having to worry about the website's structure besides it.</p>
    <br>
    <p>The main grid area's <code>max-width</code> is defined in <code>src/assets/main.css</code>, default is <code>grid-template-columns:
      1fr minmax(0, 1000px) 1fr;</code>.</p>
    <br>
    <p>VueJS DevTools are commented out, can be re-enabled in <code>vite.config.js</code>.</p>
  </div>
</template>

<style scoped>
.container {
  padding: 2em;
  border-radius: 15px;
  background-color: var(--color-background-light);
  width: 100%;
  height: 100%;
  transition: border-radius 0.2s;
  box-shadow: 0 0 5px var(--shadow);
}

hr {
  margin: 2em 4em;
}

@media (max-width: 600px) {
  .container {
    border-radius: 0;
  }
}

</style>