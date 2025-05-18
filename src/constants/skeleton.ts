import { technologies } from './technologies'

function g(n: number) {
    return Array.from({ length: n }, (_, i) => String(i + 1))
}

export const skeleton: any = {
    experiences: {
        'universite-cote-d-azur-ulysseus': {
            slug: 'universite-cote-d-azur-ulysseus',
            'image-source': '/universite-cote-dazur.png',
            'image-alt': `Logo of the University of Nice Cote D'azur`,
            badges: ['Frontend', 'Backend', 'DevOps'],
            'learn-more': true,
            'learn-more-url': 'experiences/universite-cote-d-azur-ulysseus',
            'start-date': true,
            'end-date': true,
            projects: {
                'match-4-cooperation': {
                    slug: 'match-4-cooperation',
                    'image-source': '/m4c.webp',
                    'image-alt': `Logo of the University of Nice Cote D'azur`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/match-4-cooperation',
                    'developed-features': g(2),
                    'technologies-used': {
                        items: [
                            technologies.javascript,
                            technologies.typescript,
                            technologies.react,
                            technologies.redux,
                            technologies.mastodon,
                            technologies.nestjs,
                            technologies.postgresl,
                            technologies.docker,
                        ],
                    },
                },
                'invenio-rdm': {
                    slug: 'invenio-rdm',
                    'image-source': '/invenio-rdm.jpg',
                    'image-alt': `Logo of the University of Nice Cote D'azur`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/invenio-rdm',
                    'developed-features': g(3),
                    'technologies-used': {
                        items: [
                            technologies.javascript,
                            technologies.react,
                            technologies.python,
                            technologies.postgresl,
                            technologies.docker,
                        ],
                    },
                },
                'microsoft-azure': {
                    slug: 'microsoft-azure',
                    'image-source': '/microsoft-azure.png',
                    'image-alt': `Logo of the University of Nice Cote D'azur`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/microsoft-azure',
                    'developed-features': g(2),
                    'technologies-used': {
                        items: [
                            technologies.python,
                            technologies.powershell,
                            technologies.typescript,
                            technologies.nestjs,
                        ],
                    },
                },
                airflow: {
                    slug: 'airflow',
                    'image-source': '/airflow.png',
                    'image-alt': `Logo of the University of Nice Cote D'azur`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/airflow',
                    'developed-features': g(2),
                    'technologies-used': {
                        items: [technologies.python, technologies.docker],
                    },
                },
                'student-portal': {
                    slug: 'student-portal',
                    'image-source': '/student-portal.jpg',
                    'image-alt': `Logo of the University of Nice Cote D'azur`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/student-portal',
                    'developed-features': g(3),
                    'technologies-used': {
                        items: [
                            technologies.javascript,
                            technologies.typescript,
                            technologies.react,
                            technologies.nestjs,
                            technologies.postgresl,
                            technologies.prisma,
                            technologies.docker,
                            technologies.nginx,
                        ],
                    },
                },
                'servers-details': {
                    slug: 'servers-details',
                    'image-source': '/servers-details.jpg',
                    'image-alt': `Logo of the University of Nice Cote D'azur`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/servers-details',
                    'developed-features': g(1),
                    'technologies-used': {
                        items: [technologies.python, technologies.docker],
                    },
                },
            },
        },
    },
    portfolio: {
        overcraft: {
            badges: ['Frontend', 'Backend', 'DevOps'],
            'image-source': '/oc_main_page.png',
            'image-alt': `Logo of the University of Nice Cote D'azur`,
            'left-button-text': `GitHub`,
            'left-button-url': `https://github.com/DylanBOLLARO/overcraft-deployment`,
            'right-button-text': `Overcraft`,
            'right-button-url': `https://overcraft.bollarodylan.fr`,
        },
        'web-cv': {
            badges: ['Frontend'],
            'image-source': '/cv_main_page.jpg',
            'image-alt': `Logo of the University of Nice Cote D'azur`,
            'left-button-text': `GitHub`,
            'left-button-url': ` https://github.com/DylanBOLLARO/cv2`,
            'right-button-text': `Web CV`,
            'right-button-url': `https://cv.bollarodylan.fr/en`,
        },
        'godot-tower-defense': {
            badges: ['Godot Engine', 'Photoshop'],
            'image-source': '/godot-tower-defense.jpg',
            'image-alt': `godot-tower-defense`,
            'left-button-text': `GitHub`,
            'left-button-url': ` https://github.com/DylanBOLLARO/godot-tower-defense.git`,
        },
    },
    education: {
        licence: {
            'image-source': '/licence.webp',
            'image-alt': `Logo of the University of Nice Cote D'azur`,
            'start-date': true,
            'end-date': true,
        },
        bts: {
            'image-source': '/bts.jpg',
            'image-alt': `Logo of the University of Nice Cote D'azur`,
            'start-date': true,
            'end-date': true,
        },
    },
    'contact-me': {},
}
