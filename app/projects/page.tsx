import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'プロジェクト',
  description: '制作実績・開発プロジェクトの紹介です。',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">プロジェクト</h1>
      <BlogPosts />
    </section>
  )
}
