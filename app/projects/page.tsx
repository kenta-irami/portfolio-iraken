import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Works',
  description: 'フルスタックエンジニアとしての制作実績・開発プロジェクトを紹介しています。',
}

export default function Page() {
  return (
    <section className="animate-fade-in-up">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">制作実績</h1>
      <BlogPosts />
    </section>
  )
}
