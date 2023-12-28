<template>
    <fieldset>
        <label class="main-title" :for="name">{{ nameTitled }}</label>
        <input
            @focusin="hidden = false;"
            @focusout="hidden = true;"
            type="text" 
            :id="name"
            :value="this.selected || this.options[0]"
            readonly
            >
        <div class="radio-group" :class="{'radio-group--hidden': hidden}">
            <label
                class="sub-title"                
                v-for="option in options"
                :for="name + option">{{ option }}
                <input
                    v-model="this.selected"
                    :value="option"
                    :key="name + option"
                    :name="name"
                    :id="name + option"
                    type="radio"
                >
            </label>
        </div>
    </fieldset>
    
</template>
    
<script>
import { toTitled } from '@/scripts'

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            selected: undefined,
            hidden: true
        }
    },

    computed: {
        nameTitled() {
            return toTitled(this.name)
        }
    },
}
    
</script>
    
<style scoped>

    fieldset {
        border: none;
        position: relative;
    }

    input {
        outline: none;
    }

    input[type="text"] {
        padding: 15px;
        border-radius: 25px;
        width: 100%;
        cursor: pointer;
        border: 2px solid var(--color-one);
        background-color: var(--color-one);
        font-size: var(--mid-font-size);
    }

    input[type="text"]:focus-visible {
        border: 2px solid var(--color-two);
    }

    .radio-group {
        display: flex;
        flex-flow: column;
        position: absolute;
        z-index: 3;
        background-color: var(--color-two);
        left: 25px;
        width: 50%;
        border-radius: 0 0 25px 25px;

        transition: all 0.3s;
    }

    .radio-group--hidden {
        opacity: 0;
        visibility: hidden;
    }

    input[type="radio"] {
        display: none;
    }

    .main-title, .sub-title {
        padding: 15px;
    }

    .sub-title:hover {
        background-color: var(--color-one);
    }
    
</style>