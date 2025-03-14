"use client"
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
]

export default function Skills3d() {
    return (
        <div className="relative flex size-full w-full mx-auto items-center justify-center text-white overflow-hidden bg-black px-20 pb-20 pt-2 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    )
}
