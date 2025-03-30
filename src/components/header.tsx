'use client'

import { ModeToggle } from './mode-toggle'
import { GB, FR, ES, DE } from 'country-flag-icons/react/3x2'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export const Header = () => {
    return (
        <div className="flex justify-end p-3 gap-3">
            <Select defaultValue="gb">
                <SelectTrigger className="w-[140px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="gb">
                        <GB />
                        English
                    </SelectItem>
                    <SelectItem value="fr">
                        <FR />
                        Français
                    </SelectItem>
                    <SelectItem value="es">
                        <ES />
                        Español
                    </SelectItem>
                    <SelectItem value="de">
                        <DE />
                        Deutsch
                    </SelectItem>
                </SelectContent>
            </Select>
            <ModeToggle />
        </div>
    )
}
