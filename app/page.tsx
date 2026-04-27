export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-sm font-semibold tracking-wide text-emerald-300">Atomic Builder</span>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#workflow" className="hover:text-white">Workflow</a>
          <a href="#cta" className="hover:text-white">Get started</a>
        </nav>
      </header>
      <section id="hero" className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center">
        <p className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-wider text-emerald-300">
          Starter preview
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">Build a modern portfolio website with dark mode</h1>
        <p className="max-w-2xl text-base text-slate-300 md:text-lg">
          Build a modern portfolio website with dark mode. Keep iterating in the builder chat to reshape copy, swap sections,
          and add real data — this scaffold is ready for refinement.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#cta" className="rounded-lg bg-emerald-500 px-6 py-3 font-medium text-slate-900 hover:bg-emerald-400">
            Start refining
          </a>
          <a href="#features" className="rounded-lg border border-slate-500 px-6 py-3 font-medium text-slate-200 hover:border-slate-300">
            See the scaffold
          </a>
        </div>
      </section>
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">What you get out of the box</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-lg font-semibold">Responsive layout</h3>
            <p className="text-sm text-slate-300">A mobile-first scaffold with typographic rhythm ready for real content.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-lg font-semibold">Composable sections</h3>
            <p className="text-sm text-slate-300">Swap the hero, features, and CTA for your own components as you iterate.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-lg font-semibold">Instant preview</h3>
            <p className="text-sm text-slate-300">Every edit in the chat re-renders here so you can see changes immediately.</p>
          </div>
        </div>
      </section>
      <section id="workflow" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">Refine with three moves</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6"><span className="text-emerald-300">01</span><p className="mt-2 text-sm text-slate-200">Describe the section you want next in the chat.</p></li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6"><span className="text-emerald-300">02</span><p className="mt-2 text-sm text-slate-200">Review the diff, tweak wording or styles, and approve.</p></li>
          <li className="rounded-2xl border border-white/10 bg-white/5 p-6"><span className="text-emerald-300">03</span><p className="mt-2 text-sm text-slate-200">Deploy when it feels done, or keep iterating here.</p></li>
        </ol>
      </section>
      <section id="cta" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Ready to shape this into your product?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Send your next instruction in the builder chat — describe the hero copy, add a pricing section, or wire in real data.</p>
        <a href="#hero" className="mt-8 inline-block rounded-lg bg-emerald-500 px-8 py-3 font-medium text-slate-900 hover:bg-emerald-400">Continue building</a>
      </section>
      <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-400">
        Crafted with Atomic Builder. Iterate freely.
      </footer>
    </main>
  );
}
