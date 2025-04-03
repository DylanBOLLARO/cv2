'use client'

import { ChevronLeft } from 'lucide-react'
import { Card, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

export const HeaderCard = ({
    title,
    backButton = null,
}: {
    title: string
    backButton?: any
}) => {
    return (
        <Card>
            <CardHeader>
                {backButton != null && (
                    <Button
                        className="md:absolute mb-3 cursor-pointer"
                        onClick={backButton}
                    >
                        <ChevronLeft />
                        Back
                    </Button>
                )}
                <CardTitle className="text-md text-center md:text-2xl">
                    {title}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
