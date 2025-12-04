import { ReactNode } from 'react';
import {
  SiPython,
  SiFastapi,
  SiOpenai,
  SiGoogle,
  SiPydantic,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiPlotly,
} from "react-icons/si";
import { FaBook, FaTools, FaGlobe } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

interface TechBadgeProps {
  techs: string[];
}

const techColors: Record<string, { icon: ReactNode; color: string }> = {
  'Python': { icon: <SiPython />, color: 'bg-[#3776ab] text-white' },
  'FastAPI': { icon: <SiFastapi />, color: 'bg-[#009688] text-white' },
  'Semantic Scholar API': { icon: <FaBook />, color: 'bg-[#1e88e5] text-white' },
  'OpenAI GPT-4o': { icon: <SiOpenai />, color: 'bg-[#10a37f] text-white' },
  'OpenAI API': { icon: <SiOpenai />, color: 'bg-[#10a37f] text-white' },
  'Gemini API': { icon: <SiGoogle />, color: 'bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white' },
  'Google Gemini API': { icon: <SiGoogle />, color: 'bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white' },
  'Pydantic': { icon: <SiPydantic />, color: 'bg-[#e92063] text-white' },
  'Next.js': { icon: <SiNextdotjs />, color: 'bg-black dark:bg-white text-white dark:text-black' },
  'TypeScript': { icon: <SiTypescript />, color: 'bg-[#3178c6] text-white' },
  'React': { icon: <SiReact />, color: 'bg-[#61dafb] text-black' },
  'Supabase': { icon: <SiSupabase />, color: 'bg-[#3ecf8e] text-black' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'bg-[#06b6d4] text-white' },
  'Plotly.js': { icon: <SiPlotly />, color: 'bg-[#119dff] text-white' },
  'OpenAlex API': { icon: <GiBookshelf />, color: 'bg-[#ff6b35] text-white' },
  'Requests': { icon: <FaGlobe />, color: 'bg-[#2ca02c] text-white' },
};

export function ProjectTechBadges({ techs }: TechBadgeProps) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {techs.map((tech) => {
        const techInfo = techColors[tech] || { icon: <FaTools />, color: 'bg-neutral-600 text-white' };
        return (
          <div
            key={tech}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${techInfo.color} text-sm font-medium`}
          >
            <span className="text-lg">{techInfo.icon}</span>
            <span>{tech}</span>
          </div>
        );
      })}
    </div>
  );
}
