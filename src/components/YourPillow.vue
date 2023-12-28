<template>
    <article class="pillow-create" :style="gradientColor + borderColor">
        <IconPillow class="custom-pillow" />
    </article>
</template>

<script>
import IconPillow from '@/components/icons/IconPillow.vue';

export default {
    components: {
        IconPillow
    },

    data() {
        return {
            thePillow: undefined
        }
    },

    mounted() {
        this.pillowCase = document.querySelector('.pillow-create .custom-pillow')
        this.pillowOuter = document.querySelector('.pillow-create .custom-pillow #pillow__outer-part')
        this.pillowInner = document.querySelector('.pillow-create .custom-pillow #pillow__inner-part')
    },

    computed: {
        gradientColor() {
            return `background-image: linear-gradient(${this.$store.state.colorInner}50, ${this.$store.state.colorOuter}50);`
        },
        borderColor() {
            return `border: 1px solid ${this.$store.state.colorCase}50;`
        }
    },

    watch: {
        '$store.state.colorCase': function(newValue) {
            this.pillowCase.style.fill = newValue
        },
        '$store.state.colorInner': function(newValue) {
            this.pillowInner.style.fill = newValue
        },
        '$store.state.colorOuter': function(newValue) {
            this.pillowOuter.style.fill = newValue
        },
    }
}
</script>

<style scoped>
    .pillow-create {
        align-items: center;
        overflow: hidden;
        border-radius: 25px;
    }

    .custom-pillow {
        rotate: 5deg;
        animation-name: pillow-rotate;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-direction: alternate;
    }
    
    
    @keyframes pillow-rotate {
        0% {
            margin-top: 220px;
            rotate: -20deg;
            scale: 1.2;
        }
        30% {
            rotate: -5deg;
            margin-top: 160px;
            scale: 0.95;
        }
        50% {
            rotate: 0deg;
            scale: 1.05;
        }
        70% {
            scale: 1;
        }
        80% {
            rotate: 5deg;
            margin-top: 40px;
        }
        85% {
            margin-top: 30px;
        }
        90% {
            margin-top: 20px;
        }
        95% {
            margin-top: 10px;
        }
  }
</style>