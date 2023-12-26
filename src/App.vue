<script>
import Navigation from './components/Navigation.vue';
import Home from './views/Home.vue';

export default {
  components: {
    Navigation, Home
  }
}
</script>

<template>
  <Navigation />
  <main>
    <router-view></router-view>
  </main>
</template>

<style>



  :root {
    --large-font-size: clamp(1.5rem, calc(1.5vh + 1.5vw), 2rem);
    --big-font-size: clamp(1.2rem, calc(1.2vh + 1.2vw), 1.6rem);
    --mid-font-size: clamp(1rem, calc(1vh + 1vw), 1.3rem);

    --flex-gap: 5px;

    --color-one: rgba(255, 215, 223, 0.3);
    --color-two: rgba(255, 156, 171, 1);
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
    margin-right: 3vw;
  }

  article {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
  }


</style>
