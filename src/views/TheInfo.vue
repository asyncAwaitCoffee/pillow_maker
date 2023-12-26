<template>
    <article>
      <section>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum rerum, quidem facilis maiores obcaecati velit aspernatur, autem id ut ratione vel, veniam tempore illo at libero doloribus blanditiis? Nulla accusamus soluta vitae, laudantium qui fuga, omnis eius assumenda repudiandae atque corporis suscipit magnam dicta iste, iusto eveniet ipsam facere.</p>
      </section>
      <section>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eveniet necessitatibus ipsam. Commodi dolor sint esse similique fuga at nobis ex tempore voluptas quae atque sit impedit numquam, ullam beatae totam non dicta quas dolorem eaque. Dicta deleniti labore, inventore nostrum quis iure odit? Dolore mollitia ipsam, dolores error quam iusto autem eius excepturi et quae. Temporibus, dolor? Quibusdam voluptatibus, impedit accusamus dignissimos distinctio inventore eaque quod magnam iusto amet sint id libero, reprehenderit minus illo atque? Labore voluptatem illum iste, at natus perspiciatis earum temporibus nostrum! Accusantium temporibus beatae debitis obcaecati in. Ex, sequi! Eveniet natus temporibus quod aliquid?</p>
      </section>
      <section class="btn-group">
        <button @click="console.log(1)">Click 1</button>
        <button @click="console.log(2)">Click 2</button>
      </section>
    </article>    
</template>
    
<script>
export default {
    
}
    
</script>
    
<style>
  article {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    height: 100%;
    width: 50%;
  }

  section {
    height: 40%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background-image: linear-gradient(rgba(211, 211, 211, 0.1), rgba(128, 128, 128, 0.1));
    border-radius: 25px;
    padding: 0 10px;
  }

  section:where(:first-child, :last-child) {
    height: 25%;
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
    width: 40%;
    height: 40%;
  }
</style>