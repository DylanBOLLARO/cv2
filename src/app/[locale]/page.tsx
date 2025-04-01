'use client'

import { AboutMe } from '@/components/about-me'
import { Skills } from '@/components/skills'

export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-5">
            <AboutMe />
            <Skills />
        </div>
    )
}
