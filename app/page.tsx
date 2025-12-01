// app/page.tsx
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        小さな会社のための
        <br className="hidden sm:block" />
        Webサイト制作と、ちょっとした業務自動化。
      </h1>

      <p className="mb-4">
        Web制作・Web開発フリーランスの伊良皆 健太です。
        LP / コーポレートサイト制作（ノーコード〜Next.js）を中心に、
        問い合わせフォームの設置や、スプレッドシート連携・Slack通知などの
        「小さな仕組み化」までまとめてお手伝いしています。
      </p>

      <p className="mb-4">
        ITが得意ではない方とも、できるだけ専門用語を減らして、
        いまの課題を一緒に整理しながら進めていくスタイルです。
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4 tracking-tight">プロジェクト</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
