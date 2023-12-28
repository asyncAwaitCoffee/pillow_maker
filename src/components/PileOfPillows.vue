<template>
    <article class="pillow-article">
      <div class="pillow-pile">
        <IconPillowBlack class="pillow pillow__top" />
        <IconPillowPink class="pillow pillow__mid" />
        <IconPillow class="pillow pillow__bottom" />
        <h1 class="pink-header">Create the Pillow you've dreamed about!</h1>
      </div>
    </article>
</template>
    
<script>
import IconPillow from '@/components/icons/IconPillow.vue';
import IconPillowPink from '@/components/icons/IconPillowPink.vue';
import IconPillowBlack from '@/components/icons/IconPillowBlack.vue';

export default {
    components: {
        IconPillow, IconPillowPink, IconPillowBlack
    }
}
</script>
    
<style scoped>

  h1 {
    position: absolute;
    z-index: 3;
    animation-name: text-appears;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }

  @keyframes text-appears {
    0% {
      opacity: 0;
    }
  }

  .pillow-article {
    overflow: hidden;
    justify-content: flex-start;

    z-index: 1;
  }

  .pillow-pile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  .pillow-pile:hover .pillow__top {
    rotate: 12deg;
  }

  .pillow-pile:hover .pillow__mid {
    rotate: -17deg;
  }

  .pillow-pile:hover .pillow__bottom {
    rotate: -8deg;
  }

  .pillow {
    transition: rotate 0.5s;
  }

  .pillow__top {
    z-index: 1;
    rotate: 10deg;
  }

  .pillow__mid {
    z-index: 2;
    rotate: -15deg;
  }

  .pillow__bottom {
    z-index: 3;
  }

  .pillow__mid, .pillow__bottom {
    margin-top: calc(-43vw + 25vh);
  }

  .pillow__bottom, .pillow__top {
    animation-name: pillow-from-right;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
  }

  .pillow__mid {
    animation-name: pillow-from-left;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-direction: alternate;
  }

  @keyframes pillow-from-right {
    0% {
      margin-top: -500px;
      rotate: 25deg;
    }
  }

  @keyframes pillow-from-left {
    0% {
      margin-top: -500px;
      rotate: -25deg;
    }
  }
</style>