<template>
    <a 
        v-on:click="activateLang" 
        v-bind:class="{ current: isCurrent }">
        <!-- slot is replaced with whatever is between the
            LanguageSelector tags, e.g.
            
            <LanguageSelector>BLAH</LanguageSelector>
            -> <slot></slot> is replaced with BLAH
         -->
        <slot></slot>
    </a>
</template>

<script>
import {mapActions, mapState} from 'vuex'

import $t from '@/js/i18n/translation'

export default {
    name: "LanguageSelector",
    props: ["lang"],
    methods: {
        // ...mapActions({
        //     $setLang: 'translation/setLang'
        // }),
        activateLang: function() {
            console.log('set lang to', this.lang);
            
            try {
                // Demonstrates the usage of the Translation
                // wrapper class, this could be done simpler
                // by directly accessing the store actions
                // (uncomment following line and ...mapActions
                // above)
                // this.$setLang(this.lang);
                $t.setLang(this.lang);
            } catch (ex) {
                console.log("Failed to load translations:", ex);
            }
        }
    },
    computed: {
        // get currently active language from store
        ...mapState('translation', {
            currentLang: 'lang'
        }),
        isCurrent: function() {
            return this.lang === this.currentLang;
        }
    }
}

</script>

<!-- This style is only valid for this component -->
<style scoped>
.current {
    color: #f00;
}
a {
    margin: 4px;
}
</style>