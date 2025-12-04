import { TechStack } from "app/components/tech-stack";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl animate-fade-in-up">
      <h1 className="text-2xl font-semibold mb-8 !mt-0">プロフィール</h1>

      <h2 className="text-xl font-semibold mb-4">
        伊良皆 健太（Iramina Kenta）
      </h2>
      <p className="mb-4">
        Web制作・Web開発フリーランス。
        小さな会社・個人事業向けに、Webサイト制作から
        「ちょっとした業務自動化」までをサポートしています。
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8">提供していること</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>LP・コーポレートサイト制作（Next.js）</li>
        <li>問い合わせフォーム → スプレッドシート連携</li>
        <li>Slack通知や簡易ダッシュボードなどのミニ開発</li>
        <li>AIチャットボットや文章要約などの軽量AI導入</li>
        <li>そのほか、ご要望に応じて柔軟に対応いたします</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8">技術スタック</h2>
      <TechStack />

      <div className="my-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
        <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
          <span className="text-xl">🌱</span>
          大切にしていること
        </h2>

        <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-4 leading-relaxed">
          ITを活用してルーティーン業務の負担を軽減し、<br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-400">より大事なことに時間やエネルギーを注げるようになること</span>
          を目指しています。
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          ITが苦手な方にも、できるだけ専門用語を使わず、<br className="hidden sm:block" />
          現場に馴染む“無理のない仕組み化”を一緒に作るスタイルです。
        </p>
      </div>

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
