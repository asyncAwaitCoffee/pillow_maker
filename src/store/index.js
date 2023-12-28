import { createStore } from "vuex";

export default createStore({

    state: {
        filler: null,
        cover: null,
        pattern: null,
        form: null,
        colorCase: '#000000',
        colorInner: '#ffd7df',
        colorOuter: '#ffc0cf'
    },

    mutations: {
        setColorCase(state, color) {
            state.colorCase = color;
        },

        setColorInner(state, color) {
            state.colorInner = color;
        },

        setColorOuter(state, color) {
            state.colorOuter = color;
        },

        resetColors(state) {
            state.colorCase = '#000000';
            state.colorInner = '#ffd7df';
            state.colorOuter = '#ffc0cf';

        }
    }
})