import {
  Aperture,
  ArrowDown,
  ArrowRight,
  Box,
  Camera,
  CircleDot,
  Clock3,
  Eye,
  Film,
  Layers3,
  Move3d,
  ScanLine,
  Sparkles,
  SunMedium,
} from "lucide-react";

const observed = [
  { icon: Eye, label: "Visible appearance", detail: "Color, texture, edges, and every pixel inside the frame." },
  { icon: Box, label: "Scene constraints", detail: "Objects, their visible poses, and clues about geometry." },
  { icon: SunMedium, label: "Lighting now", detail: "Shadows, highlights, atmosphere, and exposure at one instant." },
  { icon: Camera, label: "One viewpoint", detail: "Composition and perspective from a single camera position." },
];

const missing = [
  { icon: Move3d, label: "Future motion", detail: "What moves, in which direction, at what speed, and for how long?" },
  { icon: Aperture, label: "Camera movement", detail: "Does the camera hold, pan, orbit, zoom, or travel through the scene?" },
  { icon: Layers3, label: "Hidden surfaces", detail: "What should appear when an object turns or the camera reveals a new view?" },
  { icon: Clock3, label: "What happens next", detail: "The image gives no single answer. Many futures can fit the same present." },
];

const futures = [
  { id: "A", label: "The subject turns", tone: "cyan" },
  { id: "B", label: "The camera pushes in", tone: "amber" },
  { id: "C", label: "The scene stays still", tone: "violet" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="From Pixels to Worlds home">
          <span className="mark"><ScanLine size={18} /></span>
          <span>From Pixels to Worlds</span>
        </a>
        <nav aria-label="Day one navigation">
          <a href="#question">Question</a>
          <a href="#inventory">Inventory</a>
          <a href="#conclusion">Conclusion</a>
        </nav>
        <div className="day-chip"><span /> Day 01 · Learning</div>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>Mother problem</span><span>01 / 42</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">Making an image come alive</p>
            <h1>A photograph holds a <em>moment.</em><br />A video needs a <em>future.</em></h1>
            <p className="lede">
              A still image can constrain what the world looks like now. It cannot tell us exactly
              what moves next, what lies behind an object, or where the camera goes. Image-to-video
              generation must invent those missing facts while staying faithful to the visible ones.
            </p>
            <a className="text-link" href="#question">Start with the question <ArrowDown size={16} /></a>
          </div>

          <div className="future-diagram" aria-label="One source image branching into three plausible video futures">
            <div className="frame source-frame">
              <div className="frame-meta"><span>INPUT</span><span>t = 0</span></div>
              <div className="scene">
                <div className="scene-sun" />
                <div className="scene-line line-one" />
                <div className="scene-line line-two" />
                <div className="subject"><CircleDot size={32} /><span /></div>
              </div>
              <div className="frame-caption"><Film size={15} /> One observed frame</div>
            </div>
            <div className="branch" aria-hidden="true"><span /><ArrowRight size={20} /><span /></div>
            <div className="future-stack">
              {futures.map((future, index) => (
                <div className={`future-row ${future.tone}`} key={future.id}>
                  <span className="future-id">{future.id}</span>
                  <div className="mini-sequence" aria-hidden="true">
                    {[0, 1, 2].map((frame) => <i key={frame} />)}
                  </div>
                  <div><small>possible future {index + 1}</small><strong>{future.label}</strong></div>
                </div>
              ))}
            </div>
            <p className="diagram-note"><Sparkles size={14} /> All three may be compatible with the same image.</p>
          </div>
        </div>
      </section>

      <section className="question-section" id="question">
        <div className="section-index">01 — THE QUESTION</div>
        <div className="question-layout">
          <h2>How can a machine invent the missing future of a photograph?</h2>
          <div className="question-answer">
            <p>
              It cannot recover a hidden, predetermined video because no such video is contained in
              the pixels. Instead, it learns patterns from many examples and samples a plausible
              continuation, conditioned by the source image and any instruction we provide.
            </p>
            <div className="equation" aria-label="Probability of video given source image and prompt">
              <span className="probability">P</span><span className="paren">(</span>
              <span className="video-token">video</span><span className="condition">|</span>
              <span className="image-token">image</span><span className="comma">,</span>
              <span className="prompt-token">prompt</span><span className="paren">)</span>
            </div>
            <p className="equation-caption">
              Read this as: “Which videos remain plausible once this image and instruction are known?”
            </p>
          </div>
        </div>
      </section>

      <section className="inventory-section" id="inventory">
        <div className="section-index">02 — INFORMATION INVENTORY</div>
        <div className="inventory-heading">
          <div><span className="status-dot cyan" /><p>Observed or constrained</p><strong>What the frame gives us</strong></div>
          <div><span className="status-dot amber" /><p>Unobserved or ambiguous</p><strong>What the model must supply</strong></div>
        </div>
        <div className="inventory-grid">
          <div className="inventory-column known-column">
            {observed.map(({ icon: Icon, label, detail }, index) => (
              <article className="inventory-card" key={label}>
                <span className="item-number">0{index + 1}</span><Icon size={22} />
                <div><h3>{label}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
          <div className="inventory-divider" aria-hidden="true"><span>ONE FRAME</span></div>
          <div className="inventory-column unknown-column">
            {missing.map(({ icon: Icon, label, detail }, index) => (
              <article className="inventory-card" key={label}>
                <span className="item-number">0{index + 1}</span><Icon size={22} />
                <div><h3>{label}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </div>
        <p className="precision-note">
          <strong>Precision note:</strong> pixels are observed; labels such as “object,” “depth,” and
          “pose” are inferred. They are useful constraints, not guaranteed facts about the world.
        </p>
      </section>

      <section className="conclusion-section" id="conclusion">
        <div className="section-index">03 — DAY ONE CONCLUSION</div>
        <div className="conclusion-grid">
          <div className="conclusion-copy">
            <p className="pull-quote">I2V is not a command to “move the pixels.” It is a request to sample a coherent possible world.</p>
            <p>
              The source image anchors appearance and composition. The prompt narrows intent. The
              generative model supplies motion, newly revealed content, and temporal evolution. Its
              hardest obligation is not making each frame look good in isolation—it is making every
              invented frame agree with the frames around it.
            </p>
          </div>
          <div className="day-card">
            <div className="day-card-top"><span>DAY 01 · CHECKPOINT</span><span>v0.1</span></div>
            <dl>
              <div><dt>Question</dt><dd>What does one image tell us—and what can it never tell us?</dd></div>
              <div><dt>Current answer</dt><dd>It constrains appearance at one instant, while motion and future state remain distributions of possibilities.</dd></div>
              <div><dt>Evidence</dt><dd>Known/unknown inventory and a branching-futures diagram.</dd></div>
              <div><dt>Still unclear</dt><dd>How does a model represent and sample those possibilities?</dd></div>
            </dl>
            <div className="next-up"><span>NEXT</span><p>Conditional probability and multiple plausible futures</p><ArrowRight size={17} /></div>
          </div>
        </div>
      </section>

      <footer>
        <span>From Pixels to Worlds</span><p>A first-principles learning record · Day 01</p><a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
