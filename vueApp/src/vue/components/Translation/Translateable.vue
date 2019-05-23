<template><span>{{translated}}</span></template>

<script>
import {mapState} from 'vuex'

/**
 * Simple component that binds a translation key
 * to the store
 * example:
 *    <Translateable that="key_to_translate"/>
 */
export default {
  name: "Translateable",
  // we use 'that' because 'key' is reserved and
  // cannot be used
  props: ["that"],
  computed: {
    // make the store state available in this component
    // `currentLang: 'lang'`` is a shortcut for 
    // `currentLang(){ return this.$store.state.lang }`` or
    // `currentLang: state => state.lang`
    ...mapState('translation', {
      currentLang: 'lang',
      translations: 'translations'
    }),
    translated(){
      return this.translations[this.currentLang][this.that];
    }
  }
}
</script>