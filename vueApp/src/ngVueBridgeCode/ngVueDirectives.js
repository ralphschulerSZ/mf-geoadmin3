import Vue from 'vue';
import ngVueComponentsModule from '@/ngVueBridgeCode/ngVueComponentsModule';
import Greeter from '@/vue/components/Greeter/index.vue';
import LanguageSwitcher from '@/vue/components/Translation/LanguageSwitcher.vue';
import Translateable from '@/vue/components/Translation/Translateable.vue'
import $t from '@/js/i18n/translation.js';
Vue.config.devtools = true
ngVueComponentsModule.directive('greeter',
    /** @ngInject */
    createVueComponent => createVueComponent(Vue.component('greeter', Greeter))
);

ngVueComponentsModule.directive('languageSwitcher',
    /** @ngInject */
    createVueComponent => createVueComponent(Vue.component('language-switcher', LanguageSwitcher))
);

ngVueComponentsModule.directive('translateable',
    /** @ngInject */
    createVueComponent => createVueComponent(Vue.component('translateable', Translateable))
);

/**
 * This directive is used as 'attribute' in other tags,
 * e.g. 
 * <a 
    class="testviewer-link" 
    href="{{ url }}" 
    ng-click="openTestViewerWithSamePermalink($event)" 
    target="_blank" 
    translate>try_test_viewer
 * </a>
 */
ngVueComponentsModule
.directive('translate', function($compile) {
    return {
        // restrict: "A",
        // transclude: true,
        link: function(scope, elem, attr){
            let key = elem.text();
            // console.log(key);
            // remove current content of the eleg, i.e. the key
            elem.html('');
 
            let tmpl = `<span><translateable that="'${key}'"></translateable><span>`;
            // console.log(tmpl);
            let e = $compile(tmpl)(scope);
            // console.log(e);
            elem.append(e);
        }
    }
})
.filter('translate', function(){
    return function(input){
        return $t.t(input);
    }
});
