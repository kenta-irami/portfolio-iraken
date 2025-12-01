interface TechItem {
    name: string;
    icon: string;
    color: string;
}

const techStacks: TechItem[] = [
    { name: 'Next.js', icon: '▲', color: 'bg-black dark:bg-white text-white dark:text-black' },
    { name: 'TypeScript', icon: 'TS', color: 'bg-[#3178c6] text-white' },
    { name: 'React', icon: '⚛', color: 'bg-[#61dafb] text-black' },
    { name: 'HTML/CSS', icon: '🎨', color: 'bg-gradient-to-r from-[#E34F26] to-[#1572B6] text-white' },
    { name: 'JavaScript', icon: 'JS', color: 'bg-[#F7DF1E] text-black' },
    { name: 'Python', icon: '🐍', color: 'bg-[#3776AB] text-white' },
    { name: 'Google Apps Script', icon: '📊', color: 'bg-[#34a853] text-white' },
    { name: 'Google Sheets', icon: '📈', color: 'bg-[#0f9d58] text-white' },
    { name: 'LINE API', icon: '💬', color: 'bg-[#06C755] text-white' },
    { name: 'Supabase', icon: '⚡', color: 'bg-[#3ecf8e] text-black' },
    { name: 'Firebase', icon: '🔥', color: 'bg-[#ffca28] text-black' },
    { name: 'AWS', icon: '☁️', color: 'bg-[#FF9900] text-white' },
    { name: 'GCP', icon: '☁️', color: 'bg-[#4285F4] text-white' },
    { name: 'OpenAI API', icon: '🤖', color: 'bg-[#10a37f] text-white' },
    { name: 'Gemini API', icon: '✨', color: 'bg-gradient-to-r from-[#4285f4] to-[#ea4335] text-white' },
    { name: 'Slack API', icon: '💬', color: 'bg-[#4a154b] text-white' },
    { name: 'Notion API', icon: '📝', color: 'bg-black dark:bg-white text-white dark:text-black' },
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
                        className={`flex items-center justify-center w-8 h-8 rounded-md ${tech.color} font-bold text-sm flex-shrink-0`}
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
