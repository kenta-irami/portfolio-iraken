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

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-xl font-semibold mb-4">SNSでのお問い合わせ</h2>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400">
            SNSのダイレクトメッセージ（DM）でもお問い合わせを受け付けています。<br className="hidden sm:block" />
            お使いのSNSからお気軽にご連絡ください。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://x.com/irakensX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-neutral-200 font-medium"
            >
              <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X (Twitter) で連絡する
            </a>
            <a
              href="https://note.com/ira_ken"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-[#41C9B4] text-white rounded-lg hover:bg-[#36a996] transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M192 96v320h-64V96h64zm192 0c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64s-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm0 64v192h-64V160h64z" />
              </svg>
              Note を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
