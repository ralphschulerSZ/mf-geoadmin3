import $store from '@/js/i18n/store.module.js'
import { store } from '@/vue/store.js'
import config from '@/config'
import { SET_LANG } from '@/names'

/**
 * This is mainly a wrapper class around the translation
 * store module which makes the translation store module
 * available to plain js (i.e. non-vue components) modules.
 * It's mainly intended to demonstrate that it can be done,
 * providing the interface to the ngVueBridge $translation
 * module
 */
export class Translation {
  constructor() {
    this.$store = store;
  }

  /**
   * Determine the language preference of the browser
   * Language/localisation code can be of the form 'de' or 'en-US',
   * we're just interested in the language part
   */
  navigatorLanguage(navigator) {
    let lang = (navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage) ).split('-')[0];

    if (config.TRANSLATION_LANGUAGES.indexOf(lang) === -1) {
      lang = config.TRANSLATION_FALLBACK_CODE;
    }
    return lang;
  }
  
  /**
   * Translate the `key` into the currently active
   * language
   * example:
   *    import $t from '@/js/i18n/translation'
   *    
   *    console.log($t.t('some_key_to_translate'));
   *  > Die Übersetzung davon
   */
  t(key) {
    return this.$store.state.translation.translations[this.getLang()][key];
  }

  /**
   * Change the currently active Language to `lang`
   */
  setLang(lang) {
    return this.$store.dispatch(`translation/${SET_LANG}`, lang);
  }
  
  /**
   * Get the currently active Language
   */
  getLang() {
    return this.$store.state.translation.lang;
  }
}

const translation = new Translation()

export default translation;