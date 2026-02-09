import BlogLayout from "../../BlogLayout";
import Image from "next/image";
import Link from "next/link";

export default function RuleBasePage() {
    return (
        <BlogLayout>
            {/* Back button */}
            <p>
                <Link
                    href="/brain"
                    className="back-button"
                    style={{
                        display: "inline-block",
                        marginBottom: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#333",
                        color: "#fff",
                        borderRadius: "4px",
                        textDecoration: "none",
                    }}
                >
                    ← Back to Brain Page
                </Link>
            </p>

            <h2>The Amygdala RuleBase Explained</h2>

            {/* Illustrative image */}
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
                <Image
                    src="/images/brain/amygdala_rulebase.png"
                    alt="Amygdala RuleBase Illustration"
                    width={600}
                    height={400}
                    style={{ borderRadius: "8px", maxWidth: "100%", height: "auto" }}
                />
            </div>
            <p>
                <strong>The amygdala doesn’t store rules like a legal code. It stores patterns of emotional learning.</strong>
                “Disrespect” or “unfair” are <em>labels added later</em> by the thinking brain.
            </p>

            <p>Now the precise flow.</p>
            <hr />

            <h3>First: what the amygdala actually does (and does NOT do)</h3>

            <h4>The amygdala does <strong>not</strong> understand:</h4>
            <ul>
                <li>language</li>
                <li>logic</li>
                <li>morality</li>
                <li>social norms in words (“this is rude”)</li>
            </ul>

            <h4>It <strong>does</strong> detect:</h4>
            <ul>
                <li>threat</li>
                <li>loss</li>
                <li>unpredictability</li>
                <li>violation of expectation</li>
                <li>social danger (status, belonging, control)</li>
            </ul>

            <p>Think of it as a <strong>pattern-matching alarm</strong>, not a judge.</p>
            <hr />

            <h3>So how does it flag “disrespect” or “unfair”?</h3>

            <p>It doesn’t use those concepts. Instead, it asks a much more primitive set of questions:</p>
            <blockquote>
                ❓ <em>Does this resemble past situations that led to pain, loss, or danger?</em><br />
                ❓ <em>Does this violate what I expected would happen?</em><br />
                ❓ <em>Does this reduce my status, safety, or control?</em>
            </blockquote>

            <p>If yes → <strong>alarm</strong>.</p>
            <p>“Disrespect” is your <em>conscious translation</em> of that alarm.</p>
            <hr />

            <h3>Where is the “rule base” stored?</h3>
            <h4>Answer: <strong>distributed across multiple systems</strong>, not one place.</h4>
            <p>Let’s break it down.</p>
            <hr />

            <h3>1. Emotional memory (amygdala + hippocampus)</h3>
            <p>This is the core.</p>
            <p>Every time you experienced:</p>
            <ul>
                <li>being dismissed</li>
                <li>ignored</li>
                <li>treated unfairly</li>
                <li>punished for speaking up</li>
                <li>shamed, overruled, or silenced</li>
            </ul>
            <p>…the <strong>emotion + context</strong> was stored together. Not as words. As <em>felt memory</em>.</p>

            <p>Example:</p>
            <blockquote>
                Tight chest + raised voice + authority figure + loss
            </blockquote>

            <p>Later, a message with a similar <em>pattern</em> appears → alarm fires.</p>
            <hr />

            <h3>2. Predictive models (cortex, especially anterior cingulate)</h3>
            <p>Your brain constantly predicts:</p>
            <ul>
                <li>how people <em>should</em> respond</li>
                <li>what fairness looks like</li>
                <li>what effort deserves in return</li>
            </ul>

            <p>When reality deviates sharply → <strong>prediction error</strong>.</p>
            <p>The anterior cingulate cortex flags:</p>
            <blockquote>“Something is off.”</blockquote>
            <p>The amygdala adds:</p>
            <blockquote>“And it feels dangerous.”</blockquote>
            <p>Together, this becomes <em>anger</em>.</p>
            <hr />

            <h3>3. Social pain circuitry (overlaps with physical pain)</h3>
            <p>The brain processes:</p>
            <ul>
                <li>rejection</li>
                <li>disrespect</li>
                <li>unfairness</li>
            </ul>
            <p>…using the <strong>same circuits as physical pain</strong>.</p>
            <p>That’s why:</p>
            <ul>
                <li>unfairness hurts</li>
                <li>disrespect burns</li>
                <li>dismissal lingers</li>
            </ul>
            <p>Evolutionarily, social exclusion = death risk. So the alarm is intense.</p>
            <hr />

            <h3>4. Conditioning over time (this matters a lot)</h3>
            <p>Your amygdala learns from:</p>
            <ul>
                <li>repetition</li>
                <li>intensity</li>
                <li>lack of repair</li>
            </ul>
            <p>If a pattern happened:</p>
            <ul>
                <li>often</li>
                <li>without resolution</li>
                <li>where you had little power</li>
            </ul>
            <p>…the sensitivity increases.</p>
            <p>Not weakness. <strong>Training history.</strong></p>
            <hr />

            <h3>So who decides “this is disrespect”?</h3>
            <h4>Sequence:</h4>
            <ol>
                <li>Amygdala fires → <em>raw alarm</em></li>
                <li>Body activates → <em>anger sensation</em></li>
                <li>Prefrontal cortex comes online</li>
                <li>The PFC <strong>labels</strong> the sensation:
                    <ul>
                        <li>“This is disrespect”</li>
                        <li>“This is unfair”</li>
                        <li>“This crosses a line”</li>
                    </ul>
                </li>
            </ol>
            <p>The <em>label</em> lives in language. The <em>trigger</em> lives in pattern memory.</p>
            <hr />

            <h3>Why two people react differently to the same message</h3>
            <ul>
                <li>Different histories</li>
                <li>Different power experiences</li>
                <li>Different repair outcomes</li>
                <li>Different expectations of fairness</li>
            </ul>
            <p>Same stimulus. Different nervous systems.</p>
            <hr />

            <h3>Can the rule base be changed?</h3>
            <p>Yes — but not by argument. It changes through:</p>
            <ol>
                <li><strong>New experiences</strong></li>
                <li><strong>Corrective outcomes</strong></li>
                <li><strong>Repatterning under safety</strong></li>
            </ol>
            <p>Each time:</p>
            <ul>
                <li>you notice activation</li>
                <li>respond differently</li>
                <li>survive without loss</li>
            </ul>
            <p>…the amygdala updates:</p>
            <blockquote>“This pattern is less dangerous than I thought.”</blockquote>
            <p>That’s how reworking happens.</p>
            <hr />

            <h3>The most important clarification</h3>
            <p>The amygdala is not irrational. It is <strong>non-verbal and historical</strong>.</p>
            <blockquote>“Based on everything we’ve lived through… should I protect us?”</blockquote>
            <p>Your job isn’t to silence it. It’s to <strong>update its data</strong>.</p>
            <hr />

            <h3>Grounding line that’s neurologically accurate</h3>
            <blockquote>
                <em>This reaction makes sense given my history.<br />
                    But right now, I am safe enough to choose.</em>
            </blockquote>
        </BlogLayout>
    );
}
