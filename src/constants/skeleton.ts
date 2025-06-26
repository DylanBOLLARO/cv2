import { technologies } from './technologies'

function g(n: number) {
    return Array.from({ length: n }, (_, i) => String(i + 1))
}

export const skeleton: any = {
    experiences: {
        'universite-cote-d-azur-ulysseus': {
            slug: 'universite-cote-d-azur-ulysseus',
            'image-source': '/universite-cote-dazur.jpg',
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
                    'image-alt': `match-4-cooperation`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/match-4-cooperation',
                    'developed-features': g(5),
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
                'open-science-repository': {
                    slug: 'open-science-repository',
                    'image-source': '/open-science-repository.jpg',
                    'image-alt': `open-science-repository`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/open-science-repository',
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
                    'fun-facts': {
                        items: [
                            {
                                'image-source':
                                    '/inveniordm-partner-meeting-summary-march-2024.jpg',
                                'image-alt': `inveniordm-partner`,
                                'learn-more': true,
                                'learn-more-url':
                                    'https://inveniosoftware.org/blog/2024-04-23-april-project-meeting-update',
                            },
                            {
                                'image-source': '/expert-database.jpg',
                                'image-alt': `expert-database`,
                                'learn-more': true,
                                'learn-more-url':
                                    '/experiences/universite-cote-d-azur-ulysseus/expert-database',
                            },
                        ],
                    },
                },
                'microsoft-azure': {
                    slug: 'microsoft-azure',
                    'image-source': '/microsoft-azure.png',
                    'image-alt': `microsoft-azure`,
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
                    'fun-facts': {
                        items: [
                            {
                                'image-source': '/ulysseus-toolbox.jpg',
                                'image-alt': `ulysseus-toolbox`,
                                'learn-more': true,
                                'learn-more-url': '/portfolio',
                            },
                        ],
                    },
                },
                airflow: {
                    slug: 'airflow',
                    'image-source': '/airflow.png',
                    'image-alt': `airflow`,
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
                    'image-alt': `student-portal`,
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
                            technologies.python,
                        ],
                    },
                    'fun-facts': {
                        items: [
                            {
                                'image-source': '/member-curriculum.jpg',
                                'image-alt': `member-curriculum`,
                                'learn-more': true,
                                'learn-more-url':
                                    '/experiences/universite-cote-d-azur-ulysseus/member-curriculum',
                            },
                        ],
                    },
                },
                'servers-details': {
                    slug: 'servers-details',
                    'image-source': '/servers-details.jpg',
                    'image-alt': `servers-details`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/servers-details',
                    'developed-features': g(1),
                    'technologies-used': {
                        items: [technologies.python, technologies.docker],
                    },
                },
                'expert-database': {
                    slug: 'expert-database',
                    'image-source': '/expert-database.jpg',
                    'image-alt': `expert-database`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/expert-database',
                    'developed-features': g(1),
                    'fun-facts': {
                        items: [
                            {
                                'image-source': '/open-science-repository.jpg',
                                'image-alt': `open-science-repository`,
                                'learn-more': true,
                                'learn-more-url':
                                    '/experiences/universite-cote-d-azur-ulysseus/open-science-repository',
                            },
                        ],
                    },
                },
                'member-curriculum': {
                    slug: 'member-curriculum',
                    'image-source': '/member-curriculum.jpg',
                    'image-alt': `member-curriculum`,
                    'learn-more': true,
                    'learn-more-url':
                        'experiences/universite-cote-d-azur-ulysseus/member-curriculum',
                    'developed-features': g(5),
                    'fun-facts': {
                        items: [
                            {
                                'image-source': '/student-portal.jpg',
                                'image-alt': `student-portal`,
                                'learn-more': true,
                                'learn-more-url':
                                    '/experiences/universite-cote-d-azur-ulysseus/student-portal',
                            },
                        ],
                    },
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
                            technologies.python,
                        ],
                    },
                },
            },
        },
    },
    portfolio: {
        overcraft: {
            badges: ['Frontend', 'Backend', 'DevOps'],
            'image-source': '/oc_main_page.png',
            'image-alt': `overcraft`,
            'left-button-text': `GitHub`,
            'left-button-url': `https://github.com/DylanBOLLARO/overcraft-deployment`,
            'right-button-text': `Overcraft`,
            'right-button-url': `https://overcraft.bollarodylan.fr`,
        },
        'web-cv': {
            badges: ['Frontend'],
            'image-source': '/cv_main_page.jpg',
            'image-alt': `cv`,
            'left-button-text': `GitHub`,
            'left-button-url': ` https://github.com/DylanBOLLARO/cv2`,
            'right-button-text': `Web CV`,
            'right-button-url': `https://cv.bollarodylan.fr/en`,
        },
        'island-ship': {
            badges: ['Godot Engine', 'Photoshop', 'C#'],
            'image-source': '/island_ship.jpg',
            'image-alt': `island-ship`,
            'left-button-text': `GitHub`,
            'left-button-url': `https://github.com/DylanBOLLARO/island-ship`,
        },
        'ulysseus-toolbox': {
            badges: ['Frontend', 'Backend', 'DevOps'],
            'image-source': '/ulysseus-toolbox.jpg',
            'image-alt': `ulysseus-toolbox`,
            'left-button-text': `GitHub`,
            'left-button-url': `https://github.com/DylanBOLLARO/ulysseus-toolbox`,
        },
    },
    education: {
        licence: {
            'image-source': '/licence.webp',
            'image-alt': `licence`,
            'start-date': true,
            'end-date': true,
        },
        bts: {
            'image-source': '/bts.jpg',
            'image-alt': `bts`,
            'start-date': true,
            'end-date': true,
        },
    },
    'contact-me': {},
}
