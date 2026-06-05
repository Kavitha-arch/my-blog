import React from "react";
import style from "../Reflection.module.css"
import sketchStyle from "../SketchGraphic.module.css";
import BlogLayout from "@/app/blog/BlogLayout";

export default function DurgaReflection() {
  return (
    <BlogLayout>
      <div className={style.reflectionCard}>
        <h2>[Mahishasura]: Inner Conflict & Injustice in Close Relationships</h2>

        <p>
          Navigating relational hurt is far more complex than a simple "clear enemy vs. clear victim" scenario.
          The conflict is fundamentally internal: you still deeply care for the person, but you are
          simultaneously carrying a heavy, unresolved sense of unfairness.
        </p>

        <p>
          In the core symbolism of Goddess <b>Durga</b>, the objective is not to battle the individual.
          Instead, it is about separating the human being from their harmful patterns—learning to address the
          damage without letting it corrode your own mind or completely destroy the relationship.
        </p>

        <h3>1. The Crucial Distinction: "They Are Good" vs. "This Action Is Unjust"</h3>
        <p>Both premises can exist simultaneously without contradicting one another.</p>

        <ul>
          <li>An individual can be fundamentally well-intentioned,</li>
          <li>yet still act in ways that are deeply unfair, careless, or selfish.</li>
        </ul>

        <p>
          Psychologically, bitterness takes root when the mind mistakenly merges these two realities:
        </p>
        <p className="pl-4 italic border-l-2 border-slate-200 text-slate-500">
          “They hurt me → therefore they are malicious → therefore everything we built is ruined.”
        </p>

        <p>
          Durga-like clarity breaks this cycle by asserting: <br />
          <b>“This specific action is harmful, even if the person performing it is not wholly toxic.”</b>
        </p>

        <h3>2. What “Not Fighting Back” Really Means</h3>
        <p>
          Choosing not to fight back externally does not mean you are required to absorb mistreatment in silence.
          True boundaries operate across three distinct operational layers:
        </p>

        <ul>
          <li><strong>External Action:</strong> What you choosing to <span className={style.highlightWord}>say or do</span>.</li>
          <li><strong>Emotional Reaction:</strong> What you internally <span className={style.highlightWord}>feel</span>.</li>
          <li><strong>Inner Stance:</strong> The precise <span className={style.highlightWord}>meaning</span> you assign to the event.</li>
        </ul>

        <p>
          Many people remain stuck in toxic loops because they choose to <span className={style.highlightWord}>suppress all three layers</span> at once.
          The path of Durga points toward <span className={style.underlineWords}>strengthening your inner stance first</span> before managing external dynamics.
        </p>

        <h3>3. How Bitterness Forms</h3>
        <p>Resentment rarely stems from the initial event itself. Instead, it compiles from:</p>

        <ul>
          <li>Repeated self-silencing (“I have no right to feel this way”).</li>
          <li>A total lack of validation (“This genuinely hurt me”).</li>
          <li>Leaving issues open with no internal resolution (“This remains unresolved”).</li>
        </ul>

        <p>Left unaddressed, the subconscious mind is forced to endlessly replay the injustice.</p>

        <h3>4. Sustaining the Relationship Without Bitterness</h3>

        <h4>A. Acknowledge Your Truth Internally</h4>
        <p>Look at the situation honestly and tell yourself clearly: <b>“This layout was completely unfair to me.”</b></p>

        <h4>B. Decouple Love from Total Agreement</h4>
        <p>
          You do not need to convert someone into a villain in order to validate your own feelings.
          <span className={style.underlineWords}>
            <i> “I can love and care for them while deeply disliking this specific behavior.”</i>
          </span>
        </p>

        <div className={style.durgaLens}>
          <h4>C. Establish Internal Boundaries</h4>
          <p> 
            Even if an external confrontation is impossible or unwise, you must decide internally what you will
            NO LONGER EXPECT from them, and where you will stop over-investing your energy.
           </p>
        </div>

        <h4>D. Prevent Invisible Resentment Accumulation</h4>
        <p>
          Bitterness accumulates through silent deposits. You must actively create intentional channels for emotional release:
        </p>

        <ul>
          <li>Reflective journaling</li>
          <li>Speaking with an objective third party</li>
          <li>Conscious cognitive reframing</li>
          <li>Creating emotional distance in your daily expectations</li>
        </ul>

        <div className={style.durgaLens}>
          <h3>5. The Durga Lens</h3>
          <p>
            In this paradigm, “Mahishasura” is never the human being across from you. The true demon is:
          </p>
          <ul>
            <li>The trap of helplessness when facing injustice.</li>
            <li>The exhausting mental loops of forced silence.</li>
            <li>The slow, quiet erosion of your self-respect.</li>
          </ul>
          <p>
            Durga’s true battle is keeping your core inner dignity completely intact while remaining externally composed.
          </p>
        </div>

          {/* ✏️ EMBEDDED RESPONSIVE SKETCH COMPONENT (No text overlap issues) */}
        <div className={sketchStyle.journalCanvas} aria-hidden="true">
          <div className={sketchStyle.quoteContent}>
            <span className={`${sketchStyle.quoteMark} ${sketchStyle.openMark}`}>“</span>
            <p className={sketchStyle.sketchText}>
              In reflection, the shadows of doubt reveal the strongest pillars of our strength, each trial a 
              chisel refining the character within. We do not become resilient in comfort, but forged in the 
              fire of true challenge, transformed by the wisdom found only through enduring, and emergent with 
              a truer purpose that guides our way forward.
            </p>
            <span className={`${sketchStyle.quoteMark} ${sketchStyle.closeMark}`}>”</span>
            <p className={sketchStyle.sketchSignature}>— Adapted Reflections</p>
          </div>
        </div>

        <h3>6. The Hardest Truth</h3>
        <p>
          You may never receive closure from them, and you may never be able to fully express your perspective.
          Consequently, the only space remaining within your control is:
        </p>
        <p>
          <b>How much of your sacred mental peace you surrender to a situation you cannot change.</b>
        </p>
        <p>That precise inflection point is where bitterness is either born or permanently stopped.</p>

        <ul>
          <li>Continue to hold love and care for them.</li>
          <li>Maintain a polite, elegant composure always.</li>
        </ul>

        <blockquote>
          <strong>Radical Realignment</strong>
          Relinquish the expectation of fair treatment. They may believe your rights are structurally limited—whether due to
          generational conditioning, personal bias, or blind spots. There is no utility in wasting your energy analysing why.
          Maa Durga within you will simply refuse to allow the situation (“Mahishasura”) to strip away your peace.
        </blockquote>
      </div>
    </BlogLayout>
  );
}