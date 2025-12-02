import { TechStack } from "app/components/tech-stack";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl animate-fade-in-up">
      <h1 className="text-2xl font-semibold mb-8 !mt-0">プロフィール</h1>

      <h2 className="text-xl font-semibold mb-4">
        伊良皆 健太（Kenta Iramina）
      </h2>
      <p className="mb-4">
        Web制作・Web開発フリーランス。
        小さな会社・個人事業向けに、Webサイト制作から
        「ちょっとした業務自動化」までをサポートしています。
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">提供していること</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>LP・コーポレートサイト制作（STUDIO / Next.js）</li>
        <li>問い合わせフォーム → スプレッドシート連携</li>
        <li>Slack通知や簡易ダッシュボードなどのミニ開発</li>
        <li>AIチャットボットや文章要約などの軽量AI導入</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">技術スタック</h2>
      <TechStack />

      <h2 className="text-xl font-semibold mb-4 mt-8">
        ミッション / 大切にしていること
      </h2>
      <p className="mb-4">
        「難しいものを、やさしくする」ことを大切にしています。
        ITが苦手な方にも、できるだけ専門用語を使わず、 “無理のない仕組み化”
        を一緒に作るスタイルです。
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">お問い合わせ</h2>
      <p className="mb-4">
        お仕事のご相談は{" "}
        <a href="/contact" className="underline">
          こちらのフォーム
        </a>
        からお気軽にどうぞ。
      </p>
    </div>
  );
}
