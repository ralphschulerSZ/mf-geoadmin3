import $t from '@/js/i18n/translation'

export class Greeter {

    constructor(name) {
        this.name = name;
    }

    greet() {
        let msg = $t.t('no_more_information');
        return `${msg} ${this.name}`;
    }
}