export default function ProfilePage() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-2xl py-10">
      <h1>プロフィール</h1>

      <h2>伊良皆 健太（Kenta Iraken）</h2>
      <p>
        Web制作・Web開発フリーランス。  
        小さな会社・個人事業向けに、Webサイト制作から「ちょっとした業務自動化」までをサポートしています。
      </p>

      <h2>提供していること</h2>
      <ul>
        <li>LP・コーポレートサイト制作（STUDIO / Next.js）</li>
        <li>問い合わせフォーム → スプレッドシート連携</li>
        <li>Slack通知や簡易ダッシュボードなどのミニ開発</li>
        <li>AIチャットボットや文章要約などの軽量AI導入</li>
      </ul>

      <h2>技術スタック</h2>
      <ul>
        <li>Next.js / TypeScript / React</li>
        <li>Google Apps Script / Google Sheets / Workspace API</li>
        <li>Supabase / Firebase</li>
        <li>OpenAI API / Gemini API / embeddings</li>
        <li>Slack API / Notion API / Webhook連携</li>
      </ul>

      <h2>これまでの開発例</h2>
      <ul>
        <li>問い合わせフォーム → スプレッドシート → Slack通知の自動化</li>
        <li>発注書OCR（Document AI）→ スプレッドシート処理</li>
        <li>AIチャットボットの組み込み（ベクトル検索＋LLM）</li>
        <li>YouTube分析ツール（Buzzスコア計算）</li>
        <li>Slack × Notion × GitHub のオンボーディング自動化</li>
      </ul>

      <h2>ミッション / 大切にしていること</h2>
      <p>
        「難しいものを、やさしくする」ことを大切にしています。  
        ITが苦手な方にも、できるだけ専門用語を使わず、  
        “無理のない仕組み化” を一緒に作るスタイルです。
      </p>

      <h2>お問い合わせ</h2>
      <p>
        お仕事のご相談は <a href="/contact">こちらのフォーム</a> からお気軽にどうぞ。
      </p>
    </div>
  );
}
