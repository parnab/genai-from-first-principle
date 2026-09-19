import { ArrowLeft, ArrowRight, BrainCircuit, Check, CircleHelp, Eye, Layers3, ScanLine } from "lucide-react";

const nav = [
  ["01", "opening", "The missing future"],
  ["02", "learning", "Learning the machinery"],
  ["03", "inputs", "Seeing and reading"],
  ["04", "representations", "Holding a scene"],
  ["05", "recap", "Milestone recap"],
];

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className="article-figure"><img src={src} alt={alt} /><figcaption>{caption}</figcaption></figure>;
}

function Flow({ items }: { items: string[] }) {
  return <div className="mechanism-flow" role="img" aria-label={items.join(" then ")}>
    {items.map((item, index) => <div className="flow-part" key={item}><span>{item}</span>{index < items.length - 1 && <ArrowRight aria-hidden="true" size={17} />}</div>)}
  </div>;
}

export default function MilestoneOne() {
  return <main className="reader-page" id="reader-top">
    <header className="reader-header">
      <a href="/" className="reader-brand"><span className="mark"><ScanLine size={18} /></span><span>From Pixels to Worlds</span></a>
      <span>Milestone 1 · From frame to working scene</span>
      <a href="#recap">Jump to recap ↓</a>
    </header>

    <div className="reader-shell">
      <aside className="reader-nav" aria-label="Milestone chapters">
        <p>YOUR PATH</p>
        {nav.map(([number, id, title]) => <a href={`#${id}`} key={id}><span>{number}</span>{title}</a>)}
        <div className="reader-boundary"><strong>Boundary</strong><p>We stop before attention and generation.</p></div>
      </aside>

      <article className="longform">
        <section className="article-hero" id="opening">
          <a className="back-link" href="/"><ArrowLeft size={15} /> Milestone overview</a>
          <p className="article-kicker">Opening · The problem before the machinery</p>
          <h1>Make this image move.</h1>
          <p className="article-deck">A still photograph gives us evidence about one moment. A video demands a future the photograph never recorded.</p>
          <Figure src="/milestone-1/m1-01-hero-many-futures.png" alt="One dog photograph branching into several compatible moving futures" caption="One observed scene can support several different continuations." />

          <p>Look at one photograph of a golden dog standing in a field. Now add one instruction:</p>
          <blockquote>Make the dog run through the field in slow motion while the camera follows alongside it.</blockquote>
          <p>The request sounds simple because the desired result is short. But the image does not contain the next position of the dog&apos;s legs, the movement of its fur, the camera path, or the field that will be revealed when the viewpoint changes. Those future moments are not hidden in the pixels. They do not exist there at all.</p>

          <h2>Evidence is not a future</h2>
          <p>The source frame constrains visible appearance, composition, lighting, pose, and the current viewpoint. Even these are interpretations of pixel values rather than labels stored inside the photograph.</p>
          <div className="contrast-grid">
            <div><span>THE IMAGE CAN CONSTRAIN</span><ul><li>Identity and visible appearance</li><li>Current pose and composition</li><li>Lighting and material clues</li><li>One camera viewpoint</li></ul></div>
            <div><span>THE SYSTEM MUST CREATE</span><ul><li>Motion and deformation</li><li>Newly revealed surfaces</li><li>Camera trajectory</li><li>A sequence of future moments</li></ul></div>
          </div>
          <p>If the system preserves everything, it can repeat the first frame and make a frozen clip. If it creates without restraint, identity and geometry drift. Useful I2V must create <em>inside constraints</em>.</p>

          <div className="math-card"><span>ONE SMALL PIECE OF MATH</span><strong>P(V | I, c)</strong><p>Given image <b>I</b> and conditions <b>c</b>, which videos <b>V</b> remain plausible? You do not need to calculate it. The expression protects one idea: the input constrains the future without fully determining it.</p></div>

          <h2>Why beautiful frames are not automatically a video</h2>
          <p>Five individually attractive dog images can still flicker when played together: the collar disappears, the face changes, or the fence shifts. Video adds a second obligation. Each frame must agree with the frames around it in identity, motion, geometry, camera, and meaning.</p>
          <p className="earned"><Check size={17} /> <strong>Idea earned:</strong> time turns generation into a persistence problem.</p>
        </section>

        <section className="article-section" id="learning">
          <p className="article-kicker">Act I · Learning</p>
          <h2>Why not write rules for motion?</h2>
          <p>“Move the dog forward” immediately breaks into more rules: paws follow different paths, joints bend, fur responds to movement, perspective changes, grass becomes hidden and visible. Then a different dog and camera arrive. The space of situations is too large and irregular for a practical rulebook.</p>
          <Figure src="/milestone-1/m1-02-machine-learning.png" alt="Many motion examples teaching one adaptable machine that works on a new dog image" caption="Examples are practice. The goal is useful behaviour on a new request." />

          <div className="definition-ladder">
            <div><b>Artificial intelligence</b><span>the broad goal</span></div>
            <div><b>Machine learning</b><span>behaviour learned from examples</span></div>
            <div><b>Deep learning</b><span>many learned processing layers</span></div>
            <div><b>Neural networks</b><span>adjustable numerical machinery</span></div>
            <div><b>Generative models</b><span>create new compatible samples</span></div>
            <div><b>Image-to-video</b><span>generate video from an image and conditions</span></div>
          </div>

          <h2>The learning loop</h2>
          <Flow items={["Training example", "Model attempt", "Loss", "Backpropagation", "Optimizer update"]} />
          <p>A neural network contains adjustable numbers called parameters or weights. A loss function measures one selected kind of error. Backpropagation calculates how a small parameter change would affect that loss. The optimizer uses those gradients to adjust the parameters. Repeated across many examples, this produces a trained model.</p>
          <Figure src="/milestone-1/m1-03-loss.png" alt="A flawed prediction compared with a coherent target, producing a corrective signal" caption="Loss is a specific scorecard—not a complete understanding of whether a video is good." />

          <div className="two-column-callout"><div><span>TRAINING</span><p>Learns parameters from many examples. It repeatedly computes loss, gradients, and updates.</p></div><div><span>INFERENCE</span><p>Uses the learned parameters for a new image and instruction. This is the pipeline the user experiences.</p></div></div>
          <p>The user&apos;s photograph is not the dataset from which the model relearns dogs and motion. It is a new inference input that constrains patterns acquired during training.</p>
          <p className="earned"><Check size={17} /> <strong>Machinery earned:</strong> learning can create the model components we will later assemble.</p>
        </section>

        <section className="article-section" id="inputs">
          <p className="article-kicker">Act II · Inputs</p>
          <h2>The user sees a dog. The model receives numbers.</h2>
          <p>The image file contains a grid of pixel values. The instruction becomes identifiers for words or word pieces. Before either can guide a video, they must be translated into forms the model can transform and compare.</p>
          <Figure src="/milestone-1/m1-04-multimodal-inputs.png" alt="Image, instruction, camera path, and audio becoming distinct internal streams" caption="Different modalities need distinct encoders, but their representations must eventually participate in one request." />

          <div className="concept-pairs">
            <article><Eye size={21} /><h3>CNN</h3><p>Learned filters notice local patterns and combine them into larger visual features.</p></article>
            <article><ScanLine size={21} /><h3>Vision Transformer</h3><p>Image patches become token-like units whose relationships can later be computed.</p></article>
            <article><BrainCircuit size={21} /><h3>Text encoder</h3><p>Tokens become contextual language representations, so “runs” is interpreted with “dog” and “slow motion.”</p></article>
            <article><Layers3 size={21} /><h3>Multimodal alignment</h3><p>Visual and language representations learn enough shared structure for the instruction to reach the relevant content.</p></article>
          </div>

          <h2>Tokens are pieces; embeddings are representations</h2>
          <Flow items={["Pixels or text", "Tokens / patches", "Encoder", "Embeddings"]} />
          <p>A token is a unit the model processes. An embedding is the learned vector representing that unit numerically. Optional audio, depth, pose, or camera controls may enter through their own encoders.</p>
          <p>Weak vision features can lose identity or structure. Weak text features can reduce “camera follows alongside” to vague motion. Weak alignment can make the system understand image and instruction separately while changing the wrong thing.</p>
          <p className="earned"><Check size={17} /> <strong>Machinery earned:</strong> the request has become machine-usable evidence and conditions. Nothing has been generated yet.</p>
        </section>

        <section className="article-section" id="representations">
          <p className="article-kicker">Act III · Representations</p>
          <h2>The model needs a smaller place to work.</h2>
          <p>A short video contains millions of pixel values. Repeatedly reasoning over every full-resolution pixel is expensive. The model needs a compact numerical workspace that preserves useful structure while discarding some literal detail: a latent space.</p>
          <Figure src="/milestone-1/m1-05-latent-workshop.png" alt="A detailed dog image compressed into a structured latent workspace and expanded into coherent frames" caption="A latent is a useful compressed workspace, not a miniature photograph or a list of named objects." />

          <h2>Learn to pack and unpack</h2>
          <Flow items={["Pixel image", "Encoder", "Latent representation", "Decoder", "Reconstructed pixels"]} />
          <p>An autoencoder learns two related transformations. The encoder compresses the input; the decoder reconstructs visible data. A variational autoencoder adds pressure for a more organized latent distribution, making the space more suitable for later sampling and generation.</p>
          <div className="tradeoff"><span>THE COMPRESSION TRADEOFF</span><div><strong>More compression</strong><p>Cheaper generation, greater risk of lost detail.</p></div><div><strong>Less compression</strong><p>Richer detail, higher memory and compute cost.</p></div></div>

          <h2>A representation is not the world</h2>
          <p>A latent can lose tiny text, subtle texture, or exact geometry. It may preserve statistical patterns useful for plausible images without preserving facts needed for measurement or physical reasoning. An attractive reconstruction is not proof of a grounded simulation.</p>
          <p className="earned"><Check size={17} /> <strong>Machinery earned:</strong> visual and language representations now exist. The next question is how the right pieces influence one another.</p>
        </section>

        <section className="article-section milestone-section" id="recap">
          <p className="article-kicker">Milestone I · Cumulative recap</p>
          <h2>From a frozen frame to a working scene.</h2>
          <p>This milestone does not pretend we can generate the video yet. It checks whether the foundation is strong enough to support what comes next.</p>
          <Figure src="/milestone-1/m1-06-cumulative-scene.png" alt="Training creates learned machinery that converts a new image and instruction into an internal scene while later stages remain unresolved" caption="Solid stages are earned. The unresolved paths on the right are the next missing capability." />

          <div className="stack-recap">
            <div><span>LEARNING PATH</span><Flow items={["Examples", "Training loop", "Learned encoders"]} /></div>
            <div><span>INFERENCE PATH SO FAR</span><Flow items={["New image + instruction", "Encoders", "Embeddings + latent scene"]} /></div>
            <div className="unresolved"><span>NEXT NEED</span><strong>Coordination</strong><p>Which internal pieces should find and influence one another?</p></div>
          </div>

          <h2>Explain it back</h2>
          <ol className="reader-questions">
            <li>Why is a still image not a tiny hidden video?</li>
            <li>Why are hand-written motion rules insufficient?</li>
            <li>What changes during training—and what happens during inference?</li>
            <li>What is the difference between a token and an embedding?</li>
            <li>Why does the model use a latent representation?</li>
            <li>What critical ability is still missing?</li>
          </ol>
          <div className="milestone-statement"><CircleHelp size={24} /><div><span>MILESTONE IN ONE SENTENCE</span><p>A learned I2V system must first translate partial image evidence and an instruction into useful internal representations; the next problem is coordinating those representations before a future can be generated.</p></div></div>
        </section>

        <section className="sources-section">
          <h2>Sources and deeper reading</h2>
          <p>The story uses a deliberately gentle surface. These primary and authoritative references support the technical mechanisms behind it.</p>
          <ul>
            <li><a href="https://www.deeplearningbook.org/contents/ml.html">Goodfellow, Bengio & Courville — Machine Learning Basics ↗</a></li>
            <li><a href="https://arxiv.org/abs/2204.03458">Ho et al. — Video Diffusion Models ↗</a></li>
            <li><a href="https://arxiv.org/abs/2010.11929">Dosovitskiy et al. — An Image Is Worth 16×16 Words ↗</a></li>
            <li><a href="https://arxiv.org/abs/2103.00020">Radford et al. — Learning Transferable Visual Models From Natural Language Supervision ↗</a></li>
            <li><a href="https://arxiv.org/abs/1312.6114">Kingma & Welling — Auto-Encoding Variational Bayes ↗</a></li>
            <li><a href="https://arxiv.org/abs/2112.10752">Rombach et al. — High-Resolution Image Synthesis with Latent Diffusion Models ↗</a></li>
          </ul>
          <a className="back-to-start" href="#reader-top">Return to the beginning ↑</a>
        </section>
      </article>
    </div>
  </main>;
}
