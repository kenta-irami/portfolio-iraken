interface TechBadgeProps {
    techs: string[];
}

const techColors: Record<string, { icon: string; color: string }> = {
    'Python': { icon: '🐍', color: 'bg-[#3776ab] text-white' },
    'FastAPI': { icon: '⚡', color: 'bg-[#009688] text-white' },
    'Semantic Scholar API': { icon: '📚', color: 'bg-[#1e88e5] text-white' },
    'OpenAI GPT-4o': { icon: '🤖', color: 'bg-[#10a37f] text-white' },
    'Gemini API': { icon: '✨', color: 'bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white' },
    'Pydantic': { icon: '✓', color: 'bg-[#e92063] text-white' },
    'Next.js': { icon: '▲', color: 'bg-black dark:bg-white text-white dark:text-black' },
    'TypeScript': { icon: 'TS', color: 'bg-[#3178c6] text-white' },
    'React': { icon: '⚛', color: 'bg-[#61dafb] text-black' },
};

export function ProjectTechBadges({ techs }: TechBadgeProps) {
    return (
        <div className="flex flex-wrap gap-2 my-4">
            {techs.map((tech) => {
                const techInfo = techColors[tech] || { icon: '🔧', color: 'bg-neutral-600 text-white' };
                return (
                    <div
                        key={tech}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${techInfo.color} text-sm font-medium`}
                    >
                        <span>{techInfo.icon}</span>
                        <span>{tech}</span>
                    </div>
                );
            })}
        </div>
    );
}
