// app/page.tsx
import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          伊良皆 健太
        </h1>
        <h2 className="mb-6 text-xl text-neutral-600 dark:text-neutral-400 font-medium">
          フルスタックエンジニア
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          Next.js、TypeScript、クラウド技術を用いた
          <br className="hidden sm:block" />
          モダンなWebアプリケーション開発を得意としています。
          <br />
          優れたUI/UXの提供を重視しています。
        </p>
      </div>

      {/* About */}
      <div className="mb-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
        <h3 className="text-lg font-semibold mb-3">自己紹介</h3>
        <p className="mb-3 leading-relaxed">
          フリーランスのフルスタックエンジニアとして、
          Next.js・React・TypeScriptを中心としたモダンなWeb開発から、
          クラウド技術（AWS、GCP）を活用したシステム構築まで幅広く対応しています。
        </p>
        <p className="leading-relaxed">
          技術力だけでなく、ビジネス課題の理解と実践的な問題解決を大切にし、
          アイデアをプロダクションレベルのアプリケーションへと変えることに情熱を注いでいます。
        </p>
        <Link
          href="/profile"
          className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          詳しいプロフィールを見る →
        </Link>
      </div>

      {/* Skills Highlight */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">技術スタック</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">フロントエンド</div>
            <div className="text-neutral-800 dark:text-neutral-200">Next.js, React, TypeScript, HTML/CSS</div>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">バックエンド</div>
            <div className="text-neutral-800 dark:text-neutral-200">Python, FastAPI, Node.js, API Design</div>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">クラウド・インフラ</div>
            <div className="text-neutral-800 dark:text-neutral-200">AWS, GCP, Vercel, Firebase</div>
          </div>
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">API連携・ツール</div>
            <div className="text-neutral-800 dark:text-neutral-200">OpenAI, Google APIs, Slack, Notion</div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tight">主な制作実績</h2>
        <BlogPosts />
        <Link
          href="/projects"
          className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          すべてのプロジェクトを見る →
        </Link>
      </div>

      {/* CTA Section */}
      <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl border border-blue-100 dark:border-neutral-700 text-center">
        <h3 className="text-xl font-semibold mb-3">お仕事のご相談</h3>
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          フリーランス案件、技術コンサルティング、開発のご相談など
          <br className="hidden sm:block" />
          お気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          お問い合わせフォームへ
        </Link>
      </div>
    </section>
  )
}
