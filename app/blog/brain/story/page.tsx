
import BrainDiagram from "@/app/components/BrainDiagram";
import BlogLayout from "../../BlogLayout";
import styles from "../../Dialoge.module.css";
import Collapsible from "@/app/components/Collapsible";
import ShowHijackButton from "@/app/components/ShowHjackButton";

export default function StoryPage() {
    return (
        <BlogLayout>
            <div>
                {/* Title */}
                <section>
                    <h1>When Desire Ends, The World Ends</h1>
                    <p>
                        <strong>Core Idea:</strong> “When desire ends, the world ends” does not mean physical destruction. It refers to the end of the psychological world — the world created by craving, fear, comparison, and attachment.
                    </p>
                </section>

                {/* The Psychological World */}
                <section>
                    <h2>The Psychological World</h2>
                    <p>The world of “I want” and “I don’t want.”</p>
                    <p>The world of “This is mine” and “This is not mine.”</p>
                    <p>The world of comparison, ambition, fear, and attachment. This mental structure survives only through desire. Remove desire, and it dissolves.</p>

                    <Collapsible title="Neuroscience Insight">
                        <p>
                            <strong>Prefrontal Cortex (PFC):</strong> Generates the narrative “I want this, I don’t want that.”<br />
                            <strong>Amygdala:</strong> Adds urgency and emotional intensity to attachments and fears.<br />
                            <strong>Awareness:</strong> Steps back and simply observes the arising and dissolving of these mental constructs without judgment.
                        </p>
                    </Collapsible>
                </section>

                {/* Desire as the Root */}
                <section>
                    <h2>Desire as the Root</h2>
                    <p>Desire begins with the belief: “I am not enough.” From this belief grows seeking — wealth, love, recognition, even enlightenment.</p>
                    <p>Desire turns life into a marketplace of fulfillment. “You are not becoming — you are being.”</p>

                    <Collapsible title="Neuroscience Insight">
                        <p>
                            <strong>PFC:</strong> Crafts the self-narrative “I am not enough, I must seek.”<br />
                            <strong>Amygdala:</strong> Fuels anxiety, craving, and urgency for fulfillment.<br />
                            <strong>Awareness:</strong> Observes the feeling of inadequacy and the impulses to seek, without identifying as “I must fix this.”
                        </p>
                    </Collapsible>
                </section>

                {/* Desire and Time */}
                <section>
                    <h2>Desire and Time</h2>
                    <p>Desire is future-oriented: “I will be happy when…” Without desire, the future collapses into the present. Regret and expectation lose their grip. “Only presence remains.”</p>

                    <Collapsible title="Neuroscience Insight">
                        <p>
                            <strong>PFC:</strong> Projects into the future, creating plans and expectations.<br />
                            <strong>Amygdala:</strong> Colors these projections with fear or hope.<br />
                            <strong>Awareness:</strong> Notices the movement of time and expectation, but remains anchored in the present moment.
                        </p>
                    </Collapsible>
                </section>

                {/* Desire and Identity */}
                <section>
                    <h2>Desire and Identity</h2>
                    <p>Desire strengthens identity and roles: “I am successful.” “I am a failure.” “I am spiritual.” Without desire, identity softens.</p>
                    <p>“You remain as awareness, not a story.”</p>

                    <Collapsible title="Neuroscience Insight">
                        <p>
                            <strong>PFC:</strong> Constructs identity narratives: “I am X or Y.”<br />
                            <strong>Amygdala:</strong> Intensifies emotional attachment to these identities.<br />
                            <strong>Awareness:</strong> Steps back, noticing the story without identifying as any particular role — simply observing the “I am” statements.
                        </p>
                    </Collapsible>
                </section>

                {/* Desire and Suffering */}
                <section>
                    <h2>Desire and Suffering</h2>
                    <p>Desire says: “This moment is not enough.” Reality says: “This moment is.” Conflict between the two creates suffering. When desire ends, resistance ends — pain may remain, but psychological suffering fades.</p>

                    <Collapsible title="Neuroscience Insight">
                        <p>
                            <strong>PFC:</strong> Creates conflict between expectation and reality.<br />
                            <strong>Amygdala:</strong> Amplifies emotional distress from the conflict.<br />
                            <strong>Awareness:</strong> Observes the tension without reacting — noticing both desire and reality without attachment.
                        </p>
                    </Collapsible>
                </section>

                {/* What Remains */}
                <section>
                    <h2>What Remains When Desire Ends</h2>
                    <p>Breath continues. The body moves. Seasons change. The sky remains blue. Life flows without grasping or resistance. The world remains physically, but ends as bondage. “What remains is pure awareness — silent and untouched.”</p>

                    <Collapsible title="Neuroscience Insight">
                        <p>
                            <strong>PFC:</strong> The storytelling function quiets.<br />
                            <strong>Amygdala:</strong> Emotional urgency diminishes.<br />
                            <strong>Awareness:</strong> Fully present, noticing the world as it is — ungrasped, unresisting, untouched by narrative.
                        </p>
                    </Collapsible>
                </section>

                {/* Awareness Brain Explanation */}
                <section>
                    <h2>Awareness: Brain Networks Involved</h2>
                    <p>
                        Awareness is not a single brain region. It is a network that allows you to observe thoughts, sensations, and emotions without being absorbed in them. Key regions include:
                    </p>
                    <ul>
                        <li>
                            <strong>Medial & Dorsolateral Prefrontal Cortex:</strong> Supports meta-awareness — the ability to reflect on your own thoughts and step back from narratives.
                        </li>
                        <li>
                            <strong>Posterior Cingulate Cortex (PCC) & Precuneus:</strong> Normally active during self-referential thought; reduced activity correlates with less attachment to narratives.
                        </li>
                        <li>
                            <strong>Insula:</strong> Processes internal bodily sensations and contributes to present-centered awareness.
                        </li>
                        <li>
                            <strong>Thalamus:</strong> Integrates sensory input to support conscious experience of the present.
                        </li>
                    </ul>
                    <p>
                        In short, <strong>Awareness</strong> is the network that notices what the PFC is narrating and what the Amygdala is amplifying, without being entangled in the story. This is why in mindfulness or spiritual practice, one can "step back and observe" rather than identify with desire or narrative identity.
                    </p>
                </section>

                {/* Brain Diagram */}
                <BrainDiagram />

<div>
    
</div>
                <ShowHijackButton/>
            </div>
        </BlogLayout>
    );
}
