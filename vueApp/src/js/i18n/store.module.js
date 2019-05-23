import axios from 'axios'
import Vue from 'vue'

import config from '@/config.js'
import { SET_LANG } from '@/names'

import de from '@/assets/locales/de.json'

/**
 * Guidelines for store modules
 *
 *   - Using dummy getters to return a part of a store is an overdo
 *   - mapState is a simple and elegant solution which allows us to get rid of dummy getters, by directly mapping the store data to a component
 *   - Use getters only for non-trivial data calculation wich is required in few components
 *   - Getters cache is based on Vue’s calculate properties
 *   - Parameterised getters are not cached!
*/

const state = {
  lang: config.TRANSLATION_FALLBACK_CODE,
  translations: {
    'de': de
  }
}

const getters = {
  currentTranslations: state => {
    return new Promise((resolve, reject) => {

    }) 
  }
}

const mutations = {
  'setLang': (state, payload) => {
    state.lang = payload;
    console.log(`commited setLang to ${payload}`);
  },
  'setTranslation': (state, payload) => {
    Vue.set(state.translations, payload.lang, payload.translation);
    console.log('commited setTranslation to',payload);
  }
}

const actions = {
  // Best-practice: Use global constants for action
  // names
  [SET_LANG](store, lang) {
    if ( lang in store.state.translations ){
      console.log(`translations for ${lang} are already in store`);
      store.commit('setLang', lang);
    } else {
      console.log(`no translations for ${lang} in store, loading from server...`);
      return axios.get(config.LOCALES_BASE_URL + `/locales/${lang}.json`).then(function(response){
        store.commit('setTranslation', {'lang': lang, 'translation': response.data})
        store.commit('setLang', lang);
        return lang;
      });
    }
  }
}


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}