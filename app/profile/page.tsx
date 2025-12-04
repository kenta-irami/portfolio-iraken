import { TechStack } from "app/components/tech-stack";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-2xl animate-fade-in-up">
      <h1 className="text-2xl font-semibold mb-8 !mt-0">プロフィール</h1>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">
          伊良皆 健太（Iramina Kenta）
        </h2>
        <p className="mb-4 leading-relaxed">
          Next.js、TypeScript、クラウド技術を専門とするフリーランスのフルスタックエンジニアです。
          モダンなフレームワークを活用し、パフォーマンスとユーザー体験を重視した
          Webアプリケーション開発を行っています。
        </p>
        <p className="mb-4 leading-relaxed">
          技術力だけでなく、ビジネス課題の理解と実践的な問題解決を大切にしており、
          クライアントのニーズに合わせた最適なソリューションを提供します。
          アイデアをプロダクションレベルのアプリケーションへと変え、
          ビジネスの成長をサポートすることに情熱を注いでいます。
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">技術スタック</h2>
        <TechStack />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold text-sm text-blue-600 dark:text-blue-400 mb-2">Frontend Development</h3>
            <ul className="text-sm space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>• Next.js (App Router, Server Components)</li>
              <li>• React (Hooks, Context API)</li>
              <li>• TypeScript, JavaScript (ES6+)</li>
              <li>• HTML5, CSS3, Responsive Design</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold text-sm text-green-600 dark:text-green-400 mb-2">Backend Development</h3>
            <ul className="text-sm space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>• Python (FastAPI, Pydantic)</li>
              <li>• Node.js, API Design</li>
              <li>• Google Apps Script</li>
              <li>• RESTful API開発</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold text-sm text-orange-600 dark:text-orange-400 mb-2">Cloud & Infrastructure</h3>
            <ul className="text-sm space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>• AWS (EC2, S3, Lambda)</li>
              <li>• GCP (Cloud Functions, BigQuery)</li>
              <li>• Vercel, Firebase, Supabase</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold text-sm text-purple-600 dark:text-purple-400 mb-2">APIs & Integration</h3>
            <ul className="text-sm space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>• OpenAI API, Gemini API</li>
              <li>• Google APIs (Sheets, Gmail)</li>
              <li>• Slack API, Notion API, LINE API</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">提供できること</h2>
        <div className="space-y-3">
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-200">フルスタックWeb開発</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Next.js・React・TypeScriptを用いたモダンなWebアプリケーション開発。
              パフォーマンスとSEOを重視したプロダクション品質のサイト構築。
            </p>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-200">LP・コーポレートサイト制作</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              レスポンシブ対応、アクセシビリティ対応を含む、
              ビジネス目標に沿った効果的なWebサイトの企画・制作。
            </p>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-200">API連携・業務自動化</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              問い合わせフォーム、Googleスプレッドシート連携、Slack通知、
              外部API統合など、ワークフローの自動化・効率化。
            </p>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-200">AI機能実装</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              OpenAI・Gemini APIを活用したチャットボット、
              文章生成、データ分析など、ビジネスに合わせたAI機能の統合。
            </p>
          </div>

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
            <h3 className="font-semibold mb-2 text-neutral-800 dark:text-neutral-200">クラウドデプロイ・インフラ構築</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              AWS、GCP、Vercelなどを活用した、
              スケーラブルで信頼性の高いインフラの設計・構築・運用。
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">強み</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
            <span className="leading-relaxed">
              <strong>モダンな技術スタック：</strong>
              Next.js、React、TypeScriptなど、最新のフロントエンド技術を駆使した開発
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
            <span className="leading-relaxed">
              <strong>クラウド活用：</strong>
              AWS、GCPなどのクラウドプラットフォームを活用した、スケーラブルなシステム構築
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
            <span className="leading-relaxed">
              <strong>外部API連携：</strong>
              多様なサードパーティAPIの統合経験による、効率的なワークフロー構築
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
            <span className="leading-relaxed">
              <strong>保守性重視：</strong>
              クリーンなコード、適切なドキュメント作成による、長期的な保守性の確保
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
            <span className="leading-relaxed">
              <strong>ビジネス理解：</strong>
              技術だけでなく、ビジネス目標を理解した上での実践的なソリューション提供
            </span>
          </li>
        </ul>
      </section>

      {/* Work Philosophy */}
      <div className="my-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
        <h2 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center gap-2">
          <span className="text-xl">💡</span>
          大切にしていること
        </h2>

        <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-4 leading-relaxed">
          技術を活用してビジネス課題を解決し、
          <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-400">
            ユーザーにとって本当に価値のあるプロダクト
          </span>
          を作ることを目指しています。
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          単なる機能実装だけでなく、パフォーマンス、保守性、拡張性を考慮し、
          <br className="hidden sm:block" />
          長期的な視点でプロジェクトの成功をサポートします。
          明確なコミュニケーション、反復的な開発、高品質なコードを重視しています。
        </p>
      </div>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">お問い合わせ</h2>
        <p className="mb-4 leading-relaxed">
          フリーランス案件、技術コンサルティング、開発のご相談など、
          お仕事に関するご相談は{" "}
          <a href="/contact" className="underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            こちらのフォーム
          </a>
          からお気軽にお問い合わせください。
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          GitHubでのコード確認や、より詳しいお話をご希望の場合もお気軽にご連絡ください。
        </p>
      </section>
    </div>
  );
}
