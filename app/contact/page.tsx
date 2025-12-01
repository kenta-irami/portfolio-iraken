export default function ContactPage() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-2xl py-10">
      <h1>お問い合わせ</h1>
      <p>
        お問い合わせは、以下のフォームからお気軽にお送りください。
        2営業日以内にご連絡いたします。
      </p>

      <div className="mt-8">
        {/* Googleフォーム埋め込み */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRFe13jkQF-dwOVRsS6SIfIsiLS91y3BfoFIUa_Qe_u94T_Q/viewform?embedded=true" width="640" height="381" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </div>
  );
}
