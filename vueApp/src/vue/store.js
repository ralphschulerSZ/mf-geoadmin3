import Vue from 'vue';
import Vuex from 'vuex';

import translation from '@/js/i18n/store.module.js'
import config from '@/config'

// Note: remove in production!
Vue.config.devtools = true
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        translation
    },
    // state: {
    //     lang: 'en'
    // },

    // actions: {
    //     setLang: (store, lang) => {
    //         return new Promise((resolve, reject) => {

    //             setTimeout(() => {
    //                 store.commit('setLang', lang);
    //                 resolve(lang);
    //             }, 2000);
    //         });
    //     }
    // },

    // mutations: {
    //     setLang: (state, lang) => {
    //         state.lang = lang;
    //         console.log(`commited setLang to ${lang}`);
    //     }
    // },

    // getters: {
    //     lang: state => state.lang
    // }


    // Making sure that we're doing
    // everything correctly by enabling
    // strict mode in the dev environment.
    strict: config.STRICT,
});

export default store;