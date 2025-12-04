import { ReactNode } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiGoogle,
  SiGooglesheets,
  SiLine,
  SiSupabase,
  SiFirebase,
  SiGooglecloud,
  SiOpenai,
  SiSlack,
  SiNotion,
  SiPydantic,
  SiFastapi,
  SiVercel,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandGoogleBigQuery } from "react-icons/tb"; // Using as a placeholder or alternative if needed, but sticking to Si for consistency where possible

interface TechItem {
  name: string;
  icon: ReactNode;
  color: string;
}

const techStacks: TechItem[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "bg-black dark:bg-white text-white dark:text-black",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "bg-[#3178c6] text-white",
  },
  { name: "React", icon: <SiReact />, color: "bg-[#61dafb] text-black" },
  {
    name: "HTML/CSS",
    icon: (
      <div className="flex gap-1">
        <SiHtml5 />
        <SiCss3 />
      </div>
    ),
    color: "bg-gradient-to-r from-[#E34F26] to-[#1572B6] text-white",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "bg-[#F7DF1E] text-black",
  },
  { name: "Python", icon: <SiPython />, color: "bg-[#3776AB] text-white" },
  {
    name: "Google Apps Script",
    icon: <SiGoogle />,
    color: "bg-[#34a853] text-white",
  },
  {
    name: "Google Sheets",
    icon: <SiGooglesheets />,
    color: "bg-[#0f9d58] text-white",
  },
  { name: "LINE API", icon: <SiLine />, color: "bg-[#06C755] text-white" },
  { name: "Supabase", icon: <SiSupabase />, color: "bg-[#3ecf8e] text-black" },
  { name: "Firebase", icon: <SiFirebase />, color: "bg-[#ffca28] text-black" },
  { name: "AWS", icon: <FaAws />, color: "bg-[#FF9900] text-white" },
  { name: "GCP", icon: <SiGooglecloud />, color: "bg-[#4285F4] text-white" },
  { name: "OpenAI API", icon: <SiOpenai />, color: "bg-[#10a37f] text-white" },
  {
    name: "Gemini API",
    icon: <SiGoogle />,
    color: "bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white",
  }, // SiGooglegemini might not be in the installed version yet, using SiGoogle as fallback or we can try importing it.
  { name: "Slack API", icon: <SiSlack />, color: "bg-[#4a154b] text-white" },
  {
    name: "Notion API",
    icon: <SiNotion />,
    color: "bg-black dark:bg-white text-white dark:text-black",
  },
  { name: "Vercel", icon: <SiVercel />, color: "bg-black text-white" },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {techStacks.map((tech) => (
        <div
          key={tech.name}
          className="flex items-center gap-2 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all hover:shadow-md"
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-md ${tech.color} text-lg flex-shrink-0`}
          >
            {tech.icon}
          </div>
          <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
