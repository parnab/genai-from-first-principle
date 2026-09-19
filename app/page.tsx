import { ArrowRight, BookOpen, Layers3, ScanLine, Sparkles } from "lucide-react";

const chapters = [
  { number: "01", title: "The missing future", question: "What does one photograph give us—and what must be invented?", accent: "cyan" },
  { number: "02", title: "Learning the machinery", question: "Why can’t we animate the world with a giant rulebook?", accent: "blue" },
  { number: "03", title: "Seeing and reading", question: "How do pixels and instructions become machine-usable evidence?", accent: "amber" },
  { number: "04", title: "Holding a scene", question: "Why does the model need a compact internal workspace?", accent: "violet" },
  { number: "05", title: "Milestone one", question: "Can we rebuild the partial machine and name the next missing ability?", accent: "green" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="From Pixels to Worlds home">
          <span className="mark"><ScanLine size={18} /></span>
          <span>From Pixels to Worlds</span>
        </a>
        <nav aria-label="Milestone one navigation">
          <a href="#journey">Journey</a>
          <a href="#promise">What you will learn</a>
        </nav>
        <span className="release-chip"><i /> Milestone 1 · v1.0</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">The Generative AI stack through one problem</p>
          <h1>From a frozen frame<br />to a <em>working scene.</em></h1>
          <p className="lede">
            Give a machine one photograph of a dog and ask it to create a coherent video. Before it can generate motion, it must learn what the image constrains, translate pixels and language, and build an internal place to work.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/milestone-1">Read Milestone 1 <ArrowRight size={17} /></a>
            <span><BookOpen size={16} /> Five connected readings · about 35 minutes</span>
          </div>
        </div>
        <figure className="hero-visual">
          <img src="/milestone-1/m1-01-hero-many-futures.png" alt="One dog photograph branching into several plausible futures that preserve the same scene" />
          <figcaption><span>ONE OBSERVED FRAME</span><span>MANY COMPATIBLE FUTURES</span></figcaption>
        </figure>
      </section>

      <section className="journey" id="journey">
        <div className="section-heading">
          <span>THE READING PATH</span>
          <h2>Let the problem reveal<br />the machinery.</h2>
          <p>Each chapter begins where the previous explanation stops working. No disconnected glossary. No architecture name before the reader has a reason to need it.</p>
        </div>
        <div className="chapter-list">
          {chapters.map((chapter) => (
            <article className={`chapter-row ${chapter.accent}`} key={chapter.number}>
              <span className="chapter-number">{chapter.number}</span>
              <div><h3>{chapter.title}</h3><p>{chapter.question}</p></div>
              <span className="chapter-state">READY</span>
            </article>
          ))}
        </div>
      </section>

      <section className="promise" id="promise">
        <div className="section-heading compact">
          <span>THE FIRST MENTAL MODEL</span>
          <h2>What you will be able<br />to explain.</h2>
        </div>
        <div className="promise-grid">
          <article><Sparkles size={23} /><h3>Why the future is missing</h3><p>A photograph constrains one present moment. It does not contain the motion, hidden surfaces, or camera path of a future video.</p></article>
          <article><Layers3 size={23} /><h3>How learning builds the machine</h3><p>Examples, loss, backpropagation, and optimization shape the encoders and representations later used during inference.</p></article>
          <article><ScanLine size={23} /><h3>Why representation comes first</h3><p>Pixels and words must become useful embeddings and a compact latent scene before later machinery can coordinate or generate.</p></article>
        </div>
        <div className="next-boundary">
          <span>NEXT MISSING CAPABILITY</span>
          <p>The pieces exist. How can the right pieces find and influence one another?</p>
          <ArrowRight size={20} />
        </div>
      </section>

      <footer><span>From Pixels to Worlds</span><p>One problem. Every necessary concept. A growing machine.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
