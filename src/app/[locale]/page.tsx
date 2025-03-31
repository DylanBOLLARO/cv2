'use client'

import { AboutMe } from '@/components/AboutMe'
import { Skills } from '@/components/Skills'

export default function HomePage() {
    return (
        <div className="flex flex-col gap-y-5">
            <AboutMe />
            <Skills />
        </div>
    )
}
