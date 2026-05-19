export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Feedback Routing
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Route customer feedback to the{" "}
          <span className="text-[#58a6ff]">right team</span>, instantly
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          FeedbackRouter uses AI to analyze incoming tickets, score priority, and automatically assign them to the correct team — so nothing falls through the cracks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $32/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn more
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="text-white font-semibold mb-1">Smart Categorization</h3>
            <p className="text-[#8b949e] text-sm">OpenAI classifies every ticket by type, urgency, and affected product area automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-1">Priority Scoring</h3>
            <p className="text-[#8b949e] text-sm">Each ticket gets a 1–10 priority score so your team always works on what matters most.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-1">Routing Analytics</h3>
            <p className="text-[#8b949e] text-sm">Track routing accuracy, team load, and response times from a single dashboard.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$32<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to automate feedback routing</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited feedback tickets",
              "AI categorization & priority scoring",
              "Custom routing rules per team",
              "Webhook & API ingestion",
              "Dashboard + analytics",
              "Email & Slack notifications",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get started now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does the AI routing work?</h3>
            <p className="text-[#8b949e] text-sm">Feedback is sent to our API or via webhook. OpenAI analyzes the content, assigns a category and priority score, then our rules engine routes it to the correct team channel or inbox automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I customize the routing rules?</h3>
            <p className="text-[#8b949e] text-sm">Yes. The dashboard lets you define rules based on category, priority, keywords, or customer tier — and map them to any team or individual.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is there a free trial?</h3>
            <p className="text-[#8b949e] text-sm">We offer a 7-day money-back guarantee. If FeedbackRouter doesn't save your team time in the first week, we'll refund you — no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} FeedbackRouter. All rights reserved.
      </footer>
    </main>
  )
}
