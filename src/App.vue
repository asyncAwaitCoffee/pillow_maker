<script>
import Navigation from './components/Navigation.vue';
import TheInfo from './views/TheInfo.vue';

export default {
  components: {
    Navigation, TheInfo
  }
}
</script>

<template>
  <Navigation />
  <main>
    <TheInfo />

    <article>
      <h1></h1>
    </article>
  </main>
</template>

<style>

  :root {
    --large-font-size: clamp(1.5rem, calc(1.5vh + 1.5vw), 2rem);
    --big-font-size: clamp(1.2rem, calc(1.2vh + 1.2vw), 1.6rem);
    --mid-font-size: clamp(1rem, calc(1vh + 1vw), 1.3rem);

    --flex-gap: 5px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    height: 90vh;
    align-items: center;
    justify-content: space-evenly;
    padding: var(--flex-gap);
    gap: var(--flex-gap);
    margin-left: 3vw;
  }


</style>
