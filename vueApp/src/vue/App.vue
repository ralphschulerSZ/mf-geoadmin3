<template>
  <div id="app">
    <LanguageSwitcher :languages="languages"/>
    <ul>
      <li><Greeter name="World"/></li>
      <li><Greeter name="Dave"/></li>
    </ul>
    <translateable that="no_more_information"/>
  </div>
</template>

<script>
import Greeter from '@/vue/components/Greeter/index.vue'
import LanguageSwitcher from '@/vue/components/Translation/LanguageSwitcher.vue'
import Translateable from '@/vue/components/Translation/Translateable.vue'

import config from '@/config.js'
import $t from '@/js/i18n/translation'

export default {
  name: 'App',
  data: function() {
    return {
      languages: config.TRANSLATION_LANGUAGES
    }
  },
  components: {
    Greeter,
    LanguageSwitcher,
    Translateable
  },
  async beforeMount() {
    let lang = $t.navigatorLanguage(window.navigator);
    await $t.setLang(lang); //.then((lang) => {
    console.log("translations loaded",lang);
    // });

    

  }
}
</script>
