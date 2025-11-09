import { json, type MetaFunction } from '@remix-run/cloudflare';
import { Header } from '~/components/header/Header';
import BackgroundRays from '~/components/ui/BackgroundRays';

const FEATURE_SECTIONS = [
  {
    title: 'Agentic by Design',
    description:
      'Wadeh Ai orchestrates planning, coding, testing, and deployment so you can stay focused on big-picture strategy.',
  },
  {
    title: 'Bring Your Own Models',
    description: 'Connect OpenAI, Anthropic, Groq, Ollama, and more with a single, secure configuration flow.',
  },
  {
    title: 'Crafted for Teams',
    description: 'Share conversations, manage environments, and broadcast terminal output to keep everyone in sync.',
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Wadeh Ai Studio' },
    {
      name: 'description',
      content:
        'Explore Wadeh Ai Studio — a creative development partner that threads ideation, code generation, and deploys together.',
    },
  ];
};

export const loader = () => json({});

export default function StudioPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-bolt-elements-background-depth-1 text-bolt-elements-textPrimary">
      <BackgroundRays />
      <Header />
      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-24 pt-16 lg:px-12 lg:pt-24">
        <section className="grid gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div className="flex flex-col gap-8">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.4em] text-bolt-elements-textSecondary">
              Wadeh Ai Studio
            </span>
            <h1 className="text-4xl font-semibold leading-tight lg:text-6xl">
              A creative development partner that builds with you, not for you.
            </h1>
            <p className="max-w-2xl text-base text-bolt-elements-textSecondary lg:text-lg">
              Wadeh Ai threads your entire workflow together—from ideation, to code generation, to live previews and
              deploys. Bring your favourite LLMs, plug into familiar tools, and let the agent orchestrate the busywork
              while you steer the vision.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://github.com/TheWadeh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8f5fff] via-[#9c85ff] to-[#57c1ff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8f5fff]/40 transition hover:scale-[1.01] hover:shadow-[#8f5fff]/60"
              >
                Explore the blueprint
              </a>
              <a
                href="/settings"
                className="inline-flex items-center justify-center rounded-lg border border-bolt-elements-borderColor px-5 py-3 text-sm font-semibold text-bolt-elements-textPrimary transition hover:border-bolt-elements-borderColorActive hover:text-bolt-elements-textPrimary/80"
              >
                Configure your stack
              </a>
            </div>
            <dl className="grid gap-6 border-t border-bolt-elements-borderColor pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-bolt-elements-textSecondary">Connected providers</dt>
                <dd className="mt-2 text-2xl font-semibold">10+</dd>
              </div>
              <div>
                <dt className="text-bolt-elements-textSecondary">Live coding latency</dt>
                <dd className="mt-2 text-2xl font-semibold">&lt; 2s</dd>
              </div>
              <div>
                <dt className="text-bolt-elements-textSecondary">Projects shipped with Wadeh</dt>
                <dd className="mt-2 text-2xl font-semibold">2k+</dd>
              </div>
            </dl>
          </div>
          <div className="relative overflow-hidden rounded-[24px] border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2/80 p-6 shadow-lg shadow-black/5 backdrop-blur">
            <div className="grid gap-4 text-sm text-bolt-elements-textSecondary">
              <div className="rounded-xl border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1/90 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-bolt-elements-textTertiary">Playbook</p>
                <p className="mt-2 text-bolt-elements-textPrimary">
                  "Spin up a Remix playground, apply the Wadeh theme, and surface our Github actions in a deploy
                  checklist."
                </p>
              </div>
              <div className="rounded-xl border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1/90 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-bolt-elements-textTertiary">Instruments</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="i-ph:lightning-duotone text-accent" />
                    Anthropic Claude 3.5 Sonnet
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="i-ph:circles-four-duotone text-accent" />
                    Groq LLaMA 3.1
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="i-ph:terminal-window-duotone text-accent" />
                    Wadeh WebContainer Runtime
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1/90 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-bolt-elements-textTertiary">Outcome</p>
                <p className="mt-2 text-bolt-elements-textPrimary">
                  A polished prototype, demo-ready in minutes with live previews and diff-aware commits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2/80 p-8 shadow-xl shadow-black/5 backdrop-blur lg:grid-cols-3">
          {FEATURE_SECTIONS.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl border border-bolt-elements-borderColor/40 bg-bolt-elements-background-depth-1/60 p-6"
            >
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-bolt-elements-textSecondary">{feature.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent/70">
                Wadeh inside
                <div className="i-ph:arrow-up-right text-sm" />
              </span>
            </div>
          ))}
        </section>

        <section className="rounded-[32px] border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2/80 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h2 className="mb-6 text-xl font-semibold text-bolt-elements-textPrimary">Jam with Wadeh Ai</h2>
          <p className="mb-8 max-w-3xl text-sm text-bolt-elements-textSecondary">
            Drop a prompt, upload screenshots, or paste diffs—Wadeh Ai will adapt to your process and surface the right
            actions. When you are ready, the workbench is a click away.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#8f5fff] via-[#9c85ff] to-[#57c1ff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8f5fff]/40 transition hover:scale-[1.01] hover:shadow-[#8f5fff]/60"
            >
              Launch the workbench
            </a>
            <a
              href="/git"
              className="inline-flex items-center justify-center rounded-lg border border-bolt-elements-borderColor px-5 py-3 text-sm font-semibold text-bolt-elements-textPrimary transition hover:border-bolt-elements-borderColorActive hover:text-bolt-elements-textPrimary/80"
            >
              Import from GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
