import React, { ReactNode } from "react";
import {
  SiPython,
  SiFastapi,
  SiOpenai,
  SiGoogle,
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
  Python: {
    icon: React.createElement(SiPython),
    color: "bg-[#3776ab] text-white",
  },
  FastAPI: {
    icon: React.createElement(SiFastapi),
    color: "bg-[#009688] text-white",
  },
  "Semantic Scholar API": {
    icon: React.createElement(FaBook),
    color: "bg-[#1e88e5] text-white",
  },
  "OpenAI GPT-4o": {
    icon: React.createElement(SiOpenai),
    color: "bg-[#10a37f] text-white",
  },
  "OpenAI API": {
    icon: React.createElement(SiOpenai),
    color: "bg-[#10a37f] text-white",
  },
  "Gemini API": {
    icon: React.createElement(SiGoogle),
    color: "bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white",
  },
  "Google Gemini API": {
    icon: React.createElement(SiGoogle),
    color: "bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white",
  },
  Pydantic: {
    icon: React.createElement(FaTools),
    color: "bg-[#e92063] text-white",
  },
  "Next.js": {
    icon: React.createElement(SiNextdotjs),
    color: "bg-black dark:bg-white text-white dark:text-black",
  },
  TypeScript: {
    icon: React.createElement(SiTypescript),
    color: "bg-[#3178c6] text-white",
  },
  React: {
    icon: React.createElement(SiReact),
    color: "bg-[#61dafb] text-black",
  },
  Supabase: {
    icon: React.createElement(SiSupabase),
    color: "bg-[#3ecf8e] text-black",
  },
  "Tailwind CSS": {
    icon: React.createElement(SiTailwindcss),
    color: "bg-[#06b6d4] text-white",
  },
  "Plotly.js": {
    icon: React.createElement(SiPlotly),
    color: "bg-[#119dff] text-white",
  },
  "OpenAlex API": {
    icon: React.createElement(GiBookshelf),
    color: "bg-[#ff6b35] text-white",
  },
  Requests: {
    icon: React.createElement(FaGlobe),
    color: "bg-[#2ca02c] text-white",
  },
  STUDIO: {
    icon: React.createElement(FaTools),
    color: "bg-[#6366f1] text-white",
  },
  ノーコード: {
    icon: React.createElement(FaTools),
    color: "bg-[#8b5cf6] text-white",
  },
  レスポンシブデザイン: {
    icon: React.createElement(FaGlobe),
    color: "bg-[#06b6d4] text-white",
  },
  "UI/UX": {
    icon: React.createElement(FaTools),
    color: "bg-[#f59e0b] text-white",
  },
};

export function ProjectTechBadges({ techs }: TechBadgeProps) {
  return React.createElement(
    "div",
    { className: "flex flex-wrap gap-2 my-4" },
    techs.map((tech) => {
      const techInfo = techColors[tech] || {
        icon: React.createElement(FaTools),
        color: "bg-neutral-600 text-white",
      };
      return React.createElement(
        "div",
        {
          key: tech,
          className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${techInfo.color} text-sm font-medium`,
        },
        React.createElement("span", { className: "text-lg" }, techInfo.icon),
        React.createElement("span", null, tech)
      );
    })
  );
}
