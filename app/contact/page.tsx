export default function ContactPage() {
  return (
    <section className="animate-fade-in-up">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-semibold mb-8 !mt-0">お問い合わせ</h1>

        <p className="mb-4">
          お問い合わせは以下のフォームからお気軽にお送りください。
        </p>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRFe13jkQF-dwOVRsS6SIfIsiLS91y3BfoFIUa_Qe_u94T_Q/viewform?embedded=true"
          width="640"
          height="381"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
}
