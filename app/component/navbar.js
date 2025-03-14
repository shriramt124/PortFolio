"use client"

import * as React from "react" // Import React
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
    {
        name: "About",
        url: "#about",
        href: "#",
        icon: Home,
    },
    {
        name: "Project",
        url: "#project",
        href: "#",
        icon: FileText,
    },
    {
        name: "Blogs",
        url: "#",
        href: "#",
        icon: CreditCard,
    },
    {
        name: "Experience",
        url: "#",
        href: "#",
        icon: Info,
    },
]

export function Navbar() {
    return <AnimeNavBar items={items} defaultActive="Home" />
}
