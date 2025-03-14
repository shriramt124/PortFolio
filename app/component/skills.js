import { Layout, Pointer, Zap } from "lucide-react";

import { Feature108 } from "@/components/shadcnblocks-com-feature108"
import { Navbar } from "./navbar";
import FrontendSkill from "./skillButton";
import BackendSkill from "./BackendSkill";
import OtherSkill from "./OtherSkill";

const demoData = {
   
    heading: "✨ My Tech Toolbox: Skills & Expertise",
    description: "🔍 Crafting scalable solutions with cutting-edge technologies.",
    tabs: [
        {
            value: "tab-1",
            icon: <Zap className="h-auto w-4 shrink-0" />,
            label: "Frontend",
            content: {
                element: <FrontendSkill />
            },
        },
        {
            value: "tab-2",
            icon: <Pointer className="h-auto w-4 shrink-0" />,
            label: "Backend",
            content: {
                 element:<BackendSkill />
            },
        },
        {
            value: "tab-3",
            icon: <Layout className="h-auto w-4 shrink-0" />,
            label: "Others",
            content: {
                 element:<OtherSkill />
            },
        },
    ],
};

export default function Skills() {
    return <Feature108 {...demoData} />;
}
 
