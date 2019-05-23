<template>
    <div>
      <LanguageSelector 
      v-for="lang in languages" 
      :lang="lang">
        {{lang}}
      </LanguageSelector>
    </div>
</template>

<script>
import LanguageSelector from '@/vue/components/Translation/LanguageSelector.vue'


export default {
    name: "LanguageSwitcher",
    props: {
      // define the valid type for each props      
      "languages": {
        type: Array,
        required: true
      }
    },
    components: {
        LanguageSelector
    }
}

</script>
