const config = {
    TRANSLATION_FALLBACK_CODE: 'de',
    TRANSLATION_LANGUAGES: ['de', 'fr', 'en', 'it', 'rm'],
    // Making sure that we're doing
    // everything correctly by enabling
    // strict mode in the dev environment.
    STRICT: process.env.NODE_ENV !== 'production',
    LOCALES_BASE_URL: '/static'
}

export default config;