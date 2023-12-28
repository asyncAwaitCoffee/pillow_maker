<template>
    <div class="container">
        <label :for="name">{{ name }}</label>
        <div class="input-wrapper">
            <input                
                v-model="color"
                type="color"
                :name="name"
                :id="name">
        </div>
    </div>
</template>
    
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
    },

    computed: {
        color: {
            get() {
                return this.$store.state[`color${this.name}`]
            },

            set(color) {
                this.$store.commit(`setColor${this.name}`, color)
            }
        }
    },

    mounted() {
        document.querySelector(`#${this.name}`).value = this.color
    }
}
    
</script>
    
<style scoped>

    .container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 15%;
        position: relative;
        padding-top: 15%;
    }

    .input-wrapper {
        width: 100%;
        position: absolute;
        border-radius: 50%;
        inset: 0;
        overflow: hidden;
        border: 1px solid var(--color-two);
    }

    label {
        padding: 0 5px;
        position: absolute;
        left: 0;  
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        cursor: pointer;
        background-color: rgba(255, 192, 203, 0.683);
    }

    input {
        outline: none;
        transform: translate(-25%, -25%);
        border: none;
        width: 250px;
        height: 250px;
        cursor: pointer;
    }
    
</style>