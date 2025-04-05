export const technologies = {
    javascript: {
        name: 'JavaScript',
        imgPath: '/icons/js.svg',
    },
    typescript: {
        name: 'TypeScript',
        imgPath: '/icons/ts.svg',
    },
    react: {
        name: 'React',
        imgPath: '/icons/react.svg',
    },
    nextjs: {
        name: 'NextJs',
        imgPath: '/icons/light/next.svg',
        imgDarkPath: '/icons/dark/next.svg',
    },
    tailwind: {
        name: 'Tailwind',
        imgPath: '/icons/tailwindcss.svg',
    },
    redux: {
        name: 'Redux',
        imgPath: '/icons/redux.svg',
    },
    nestjs: {
        name: 'NestJs',
        imgPath: '/icons/nestjs.svg',
    },
    prisma: {
        name: 'Prisma',
        imgPath: '/icons/light/prisma.svg',
        imgDarkPath: '/icons/dark/prisma.svg',
    },
    postgresl: {
        name: 'PostgreSQL',
        imgPath: '/icons/postgresql.svg',
    },
    ansible: {
        name: 'Ansible',
        imgPath: '/icons/ansible.svg',
    },
    gitlab: {
        name: 'Gitlab CI / CD',
        imgPath: '/icons/gitlab.svg',
    },
    docker: {
        name: 'Docker',
        imgPath: '/icons/docker.svg',
    },
    nginx: {
        name: 'Nginx',
        imgPath: '/icons/nginx.svg',
    },
    airflow: {
        name: 'Airflow',
        imgPath: '/icons/airflow.svg',
    },
    python: {
        name: 'Python',
        imgPath: '/icons/python.svg',
    },
    mastodon: {
        name: 'Mastodon',
        imgPath: '/icons/mastodon.svg',
    },
    powershell: {
        name: 'Powershell',
        imgPath: '/icons/powershell.svg',
    },
}

export const FRONTEND = {
    name: 'Frontend',
    items: [
        technologies.javascript,
        technologies.typescript,
        technologies.react,
        technologies.nextjs,
        technologies.tailwind,
        technologies.redux,
    ],
}

export const BACKEND = {
    name: 'Backend',
    items: [
        technologies.javascript,
        technologies.typescript,
        technologies.nestjs,
        technologies.prisma,
        technologies.postgresl,
    ],
}

export const DEVOPS = {
    name: 'DevOps',
    items: [
        technologies.airflow,
        technologies.gitlab,
        technologies.docker,
        technologies.nginx,
        technologies.ansible,
        technologies.python,
    ],
}
