import { Blog7 } from "@/components/blog7"
import ProjectTechStacks from "./ProjectTechtStacks";

const demoData = {
    tagline: "My Creations",
    heading: "Projects I've Built",
    description:
        "A collection of projects showcasing my skills in web development, problem-solving, and innovation",
    buttonText: "Explore all Projects",
    buttonUrl: "https://www.shadcnblocks.com",
    posts: [
        {
            id: "post-1",
            title: "Ai Resume Maker",
            summary: <ProjectTechStacks stacks={["React.js","mongodb","nodejs","express.js","puppeteer"]} />,
            label: "Ut varius dolor turpis",
            author: "Jane Doe",
            published: "1 Jan 2024",
            url: "https://ai-resume-maker-ruby.vercel.app/",
            image: "/airesume.png"
        },
        {
            id: "post-2",
            title: "Ecommerce website",
            summary:<ProjectTechStacks stacks={["Next.js","App Router","Mongodb","tailwind","Javascript"]} />,
                
            label: "Ut varius dolor turpis",
            author: "Jane Doe",
            published: "1 Jan 2024",
            url: "https://ecomm-luxe.vercel.app/",
            image:"/ecommerce.png"
        },
        {
            id: "post-3",
            title: "Compiler",
            summary:<ProjectTechStacks stacks={["Next.js","Api","Javascript"]}/>,
            label: "Ut varius dolor turpis",
            author: "Jane Doe",
            published: "1 Jan 2024",
            url: "https://editix.netlify.app/",
            image: "/codeditor.png",
        },
        {
            id: "post-4",
            title: "Resume Maker landing Page",
            summary:<ProjectTechStacks stacks={["Next.js","Javascript","Framer motion","tailwind","material ui"]}/>,
            label: "Ut varius dolor turpis",
            author: "Jane Doe",
            published: "1 Jan 2024",
            url: "https://resuminthireme.netlify.app/",
            image: "/landing.png",
        },
        {
            id: "post-5",
            title: "Task Manager",
            summary:<ProjectTechStacks stacks={["Next.js","Tailwind","Prisma","tailwind","clerk"]}/>,
            label: "Ut varius dolor turpis",
            author: "Jane Doe",
            published: "1 Jan 2024",
            url: "https://resuminthireme.netlify.app/",
            image: "/task.png",
        },
        {
            id: "post-6",
            title: "Hotel Management",
            summary:<ProjectTechStacks stacks={["React.js","Tailwind","Supabase","chart.js"]}/>,
            label: "Ut varius dolor turpis",
            author: "Jane Doe",
            published: "1 Jan 2024",
            url: "https://shriram-hotel-project.netlify.app/",
            image: "/hotel.png",
        },
    ],
};

export default function ProjectShowCase() {
    return <Blog7 {...demoData} />;
}

 
