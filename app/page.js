"use client"
import Image from "next/image";
import Hero from "./component/hero";
import Skills from "./component/skills";
import SkillButton from "./component/skillButton";
import ProjectShowCase from "./component/ProjectShowCase";
import { Timeline } from "@/components/ui/timeline";
import ExperienceTimeline from "./component/TimeLine";
import CodingJourney from "./component/AchievementJourney";
import AchievementTimeLine from "./component/AchievemetTimeLIne";
import { AnimatedLinks } from "./component/AnimatedLinks";
import Skills3d from "./component/Skills3d";
 

 
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
    
      <Skills />
       <Skills3d />
      <ProjectShowCase />
      <ExperienceTimeline />
      {/* <CodingJourney /> */}
      <AchievementTimeLine />
    
        <AnimatedLinks />
   

      
    

    </div>
  );
}
