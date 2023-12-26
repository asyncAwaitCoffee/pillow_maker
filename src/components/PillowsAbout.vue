<template>
    <article>
      <section>
        <h1>Can't find the pillow you want?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum rerum, quidem facilis maiores obcaecati velit aspernatur, autem id ut ratione vel, veniam tempore illo at libero doloribus blanditiis? Nulla accusamus soluta vitae, laudantium qui fuga, omnis eius assumenda repudiandae atque corporis suscipit magnam dicta iste, iusto eveniet ipsam facere.</p>
      </section>
      <section class="btn-group">
        <button @click="console.log(1)">Click 1</button>
        <button @click="console.log(2)">Click 2</button>
      </section>
      <section>
        <h1>Did you know?</h1>
        <p>The ancient Egyptians are believed to be among the first to use pillows. However, these early pillows were not filled with the soft materials we use today. Instead, they were often made of stone, wood, or ceramic. The purpose of these hard pillows was to provide support and keep the head elevated to promote better breathing and prevent insects from crawling into the ears, nose, and mouth while sleeping.</p>
      </section>
    </article>    
</template>
    
<script>
export default {
    
}
    
</script>
    
<style scoped>
  article {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
  }

  section {
    height: 20%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0 10px;
  }

  section:is(:first-child, :last-child) {
    height: 35%;
    background-image: linear-gradient(transparent, var(--color-one));
    border: 2px solid var(--color-one);
    border-radius: 25px;
  }

  h1 {
    font-size: var(--big-font-size);
    padding: 5px 0;
  }

  p {
    font-size: var(--mid-font-size);
  }

  .btn-group {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
  }

  button {
    outline: none;
    color: white;
    font-size: var(--big-font-size);
    width: 40%;
    height: 40%;
    border: 4px solid var(--color-one);
    border-radius: 25px;
    background-color: var(--color-two);
  }

  button:hover {
    animation-name: jumping;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;    
  }

  @keyframes jumping {
    50% {
      translate: 0 -2px;
    }
  }
</style>