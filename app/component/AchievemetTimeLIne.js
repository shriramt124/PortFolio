import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import AchievementsList from "./AchievementList";

export default function AchievementTimeLine() {
    const data = [
        {
            title: "DSA",
            content: (
                <div>
                    <div className=" text-neutral-200 text-xs md:text-sm font-normal mb-8">
                       <AchievementsList />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/leetcode.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        {/*
                        <Image
                            src="https://assets.aceternity.com/templates/startup-2.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-3.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        /> */}
                    </div>
                </div>
            ),
        },
        {
            title: "Hackethons",
            content: (
                <div>
                    <p className=" text-neutral-200 text-sm md:text-md font-normal mb-8">
                        🚀 Level Supermind Hackathon, Mumbai: Participated and earned a certificate of achievement for showcasing problem-solving skills and innovation.
                    </p>
                    <p className=" text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        🧠 Adobe GenAI Hackathon: Cleared Round 1, presenting an AI-driven solution with potential for social impact.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                         <Image
                            src="/levelmind.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                       
                    </div>
                </div>
            ),
        },
        {
            title: "Linkedin",
            content: (
                <div>
                    <p className=" text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Expanded professional network to 1500+ connections with focus on tech industry leaders and developers.


                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center  text-neutral-300 text-xs md:text-sm">
                            ✅Published 12+ posts
                        </div>
                        
                        <div className="flex gap-2 items-center  text-neutral-300 text-xs md:text-sm">
                            ✅ Connected with engineers from Top companies
                        </div>
                       
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className=" w-full ">

            <Timeline data={data} dark={true} />

        </div>
    );
}
