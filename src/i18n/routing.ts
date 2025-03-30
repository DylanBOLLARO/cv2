import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'fr', 'es', 'de', 'it', 'dk', 'fi', 'no', 'se'],
    defaultLocale: 'en',
})
