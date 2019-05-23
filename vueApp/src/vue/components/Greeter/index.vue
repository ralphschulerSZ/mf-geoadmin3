<template>
    <button v-on:click="greet">{{prefix}} {{name}} in {{lang}}</button>
</template>

<script>
import {mapState} from 'vuex'

import { Greeter } from '@/js/poc.js'
import $t from '@/js/i18n/translation.js'


export default {
    name: "Greeter",
    props: ["name"],
    // data is a function -> each instance has
    // its own copy
    data: function() {
        return {
            greeter: new Greeter(this.name)
        }
    },
    methods: {
        greet: function() {
            // console.log(this);
            let lang = $t.getLang();
            // let lang = this.lang;
            console.log(this.greeter.greet() + ` in ${lang}`);
        }
    },
    computed: {
        ...mapState('translation', {
            lang: 'lang'
        }),
        prefix: () => {
            return $t.t("description");
        }
    }
}

</script>