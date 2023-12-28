<template>
    <article class="create">
        <h1 class="pink-header">Create your own Pillow!</h1>
        <section class="sec-selects">
            <UISelect :name="'filler'" :options="fillers"/>
            <UISelect :name="'covers'" :options="covers"/>
            <UISelect :name="'patterns'" :options="patterns"/>
            <UISelect :name="'forms'" :options="forms"/>
        </section>
        <h1 class="pink-header">And paint it as you wish!</h1>
        <section class="sec-colors">
            <UIInputColor :name="'Case'" />
            <UIInputColor :name="'Inner'" />
            <UIInputColor :name="'Outer'" />
            <!-- <UIInputColor :name="'Reset'" /> -->
            <UIRoundBotton @click="resetColors" />
        </section>
        <section class="sec-btns">
            <button @click="console.log(2)">Order</button>
        </section>
    </article>
    <YourPillow />
</template>
    
<script>
import YourPillow from '@/components/YourPillow.vue';
import UISelect from '@/components/UI/UISelect.vue'
import UIInputColor from '@/components/UI/UIInputColor.vue'
import UIRoundBotton from '@/components/UI/UIRoundBotton.vue'

export default {
    components: {
        YourPillow, UISelect, UIInputColor, UIRoundBotton
    },

    name: "Create",

    methods: {
        resetColors() {
            this.$store.commit('resetColors')
        }
    },

    data() {
        return {
            fillers: ['Feathers', 'Cotton', 'Wool', 'Cheese', 'Stones'],
            covers: ['Linen', 'Silk', 'Polyester', 'Duct Tape', 'Plastic Bag'],
            patterns: ['Squares', 'Circles', 'X', 'None'],
            forms: ['Square', 'Rectangle', 'Round', 'Heart'],
        }
    }
}
    
</script>
    
<style scoped>
    .create {
        background-image: linear-gradient(transparent, var(--color-one));
        border: 2px solid var(--color-one);
        border-radius: 25px;
        align-items: center;
    }

    .sec-selects {
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        height: 50%;
        width: 80%;
        gap: 20px;
    }

    .sec-colors {
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        height: 10%;
        width: 80%;
        position: relative;
    }
    
    .sec-btns {
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
        height: 20%;
        width: 80%;
  }

  button {
    outline: none;
    color: white;
    font-size: var(--big-font-size);
    width: 40%;
    height: 50%;
    border: 4px solid var(--color-one);
    border-radius: 25px;
    background-color: var(--color-two);
    transition: scale 1s;
  }

  button:hover {
    scale: 1.05;
    transition: scale 0.3s; 
  }
</style>