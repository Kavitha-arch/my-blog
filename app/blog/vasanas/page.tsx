
import { VerseImage } from "@/app/components/katha/VerseImage";
import BlogLayout from "../BlogLayout";
import styles from "./Vasanas.module.css";

import Link from "next/link";

export default function VasanasPage() {
    return (
        <BlogLayout>
            <article>

                <h1>Vasanas and Desires</h1>

                <figure className={styles.imageFigure}>
                    <VerseImage
                        src="/images/journal/vasana.png"
                        alt="When Desire Ends, The World Ends"
                        width={500}
                        height={600}
                    />

                    <figcaption className={styles.figCaption}>
                        <blockquote>“Just as water in the pot reflects the enormous sun within the narrow limits of the pot, even so the vasanas or latent tendencies of the mind of the individual, acting as the reflecting medium, catch the all-pervading, infinite light of Consciousness arising from the Heart and present in the form of a reflection, the phenomenon called the mind. Seeing only this reflection, the ajnani is deluded into the belief that he is a finite being, the jiva. If the mind becomes introverted through enquiry into the source of aham vritti, the vasanas become extinct, and in the absence of the reflecting medium the phenomenon of reflection, namely, the mind, also disappears being absorbed into the light of the one Reality, the Heart.”  </blockquote>
                        This passage, attributed to Ramana Maharshi, describes
                        the mind from the perspective of Advaita Vedanta. It
                        teaches that Pure Consciousness (the Self) is infinite,
                        but the mind reflects only a limited portion of that
                        Reality because it is colored by <strong>vasanas</strong>.
                    </figcaption>
                </figure>

                {/* -------------------------------------- */}

                <section>
                    <h2>What is a Vasana?</h2>

                    <p>
                        A <strong>vasana</strong> is a latent tendency,
                        conditioning, or deeply rooted impression left by past
                        experiences, habits, desires, fears, and repeated
                        patterns of thinking and reacting.
                    </p>

                    <p>
                        It is not merely a memory—it is the
                        <strong> inclination to respond in a particular way.</strong>
                    </p>
                    <div className={styles.conceptBox}>
                        <h2>  <Link
                            href="/blog/vasanas/samskara"
                            className={styles.blogLink}
                        >Samskara</Link> vs. Vasana</h2>
                        <p>
                            <strong>Samskaras</strong> are the individual, raw subconscious impressions left behind by your past experiences.
                            When multiple similar Samskaras bundle together, they form a powerful, active latent tendency called a <strong>Vasana</strong>.
                            While a Samskara is the deep seed of a memory, a Vasana is the psychological instinct that actively drives your desires today.
                        </p>
                    </div>
                </section>

                {/* -------------------------------------- */}

                <section>
                    <h2>Extinction of Vasanas</h2>

                    <p>
                        The mind wanders outward because it is driven by hidden
                        desires and latent tendencies called vasanas. Whenever
                        attention follows these tendencies, they become stronger.
                    </p>

                    <p>
                        By refusing to feed them with attention and instead
                        tracing the sense of <strong>"I"</strong> back to its
                        source through Self-Enquiry, the vasanas gradually lose
                        their strength and finally become extinct.
                    </p>

                    <blockquote className={styles.quote}>
                        The mind exists only because of vasanas. When vasanas
                        disappear, the mind disappears.
                    </blockquote>
                </section>

                {/* -------------------------------------- */}

                <section className={styles.summaryFlow}>

                    <h2 className={styles.summaryTitle}>
                        Summary of the Process
                    </h2>

                    <div className={styles.flowCard}>
                        <p className={styles.flowText}>
                            <span>Pure Consciousness (Heart)</span>
                            <span className={styles.arrow}>→</span>
                            <span>Reflected through Vasanas</span>
                            <span className={styles.arrow}>→</span>
                            <span>Mind (Ego)</span>
                            <span className={styles.arrow}>→</span>
                            <span>"I am a finite individual"</span>
                        </p>
                    </div>

                    <div className={`${styles.flowCard} ${styles.realization}`}>
                        <p className={styles.flowText}>
                            <span>Self-Enquiry ("Who am I?")</span>
                            <span className={styles.arrow}>→</span>
                            <span>Vasanas Become Extinct</span>
                            <span className={styles.arrow}>→</span>
                            <span>Mind Dissolves</span>
                            <span className={styles.arrow}>→</span>
                            <span>Realization ("I am Pure Consciousness")</span>
                        </p>
                    </div>

                </section>

                {/* -------------------------------------- */}

                <section>

                    <h2>A Practical Example</h2>

                    <h3>Event</h3>

                    <p>
                        Imagine a colleague ignores your contribution during a
                        meeting.
                    </p>

                    <h3>Without Self-Enquiry</h3>

                    <blockquote>
                        "They always disrespect me. I need to prove myself."
                    </blockquote>

                    <p>
                        Here, a vasana of needing validation has become active.
                    </p>

                    <p>
                        The same external event can produce very different
                        experiences because different vasanas are operating.
                    </p>

                    <ul>
                        <li>
                            <strong>Recognition:</strong> Criticism feels deeply
                            painful.
                        </li>

                        <li>
                            <strong>Anger:</strong> The immediate response is
                            retaliation.
                        </li>

                        <li>
                            <strong>Insecurity:</strong> Even mild remarks feel
                            hurtful.
                        </li>

                        <li>
                            <strong>Compassion:</strong> One naturally wonders,
                            "This person must be suffering."
                        </li>
                    </ul>

                    <h3>With Self-Enquiry</h3>

                    <blockquote>
                        "I notice hurt has arisen. What is being threatened? Is
                        it my true Self, or an image of myself that wants
                        recognition?"
                    </blockquote>

                    <p>
                        Although the event has not changed, identification with
                        the reaction begins to weaken.
                    </p>

                    <h3>The Deeper Point</h3>

                    <blockquote>
                        Ramana Maharshi is not saying that other people's
                        actions do not matter. Rather, he is pointing out that
                        suffering is sustained by identification with the mind
                        and its vasanas.
                    </blockquote>

                    <p>
                        Every difficult interaction therefore becomes an
                        opportunity for Self-Enquiry. Instead of asking,
                        <em> "Why did they hurt me?"</em>, we begin asking,
                        <em> "What vasana within me has been stirred?"</em>
                    </p>

                    <p>
                        By tracing the reaction back to its source, the vasana
                        gradually loses its hold, and the mind becomes
                        increasingly established in the Self.
                    </p>

                </section>

                {/* -------------------------------------- */}

                <section className={styles.articleSection}>

                    <h2>Good Vasanas vs. Bad Vasanas</h2>

                    <p>
                        In Advaita Vedanta, not all vasanas are viewed in the
                        same way. They are broadly classified into
                        <strong> bad (ashubha)</strong> vasanas, which bind the
                        mind through attachment and suffering, and
                        <strong> good (shubha)</strong> vasanas, which purify
                        the mind and prepare it for Self-realization.
                    </p>
                    <h2>The 3 Impure Vasanas & Desire</h2>
                    <ul>
                        <li><strong>Loka Vasana (Worldly Desires):</strong>The deep-seated craving for social approval, fame, glory, power, honor, and validation from the outside world.</li>

                        <li><strong>Deha Vasana (Physical Desires): </strong>Attachments tied to the physical body, such as wanting physical beauty, extreme comfort, or longevity.</li>

                        <li><strong>Shastra Vasana (Intellectual Desires): </strong>An excessive obsession with accumulating information, scholarly pride, or winning debates just to prove superiority.</li>
                    </ul>
                    <h3>The Cycle of Bondage</h3>
                    <p>Your inner state operates in a continuous loop:   </p>
                    <div className={styles.flowCard}>
                        <p className={styles.flowText}>
                            <span>Vasana (Latent Tendency)</span>
                            <span className={styles.arrow}>→</span>
                            <span>Kama (Desire)</span>
                            <span className={styles.arrow}>→</span>
                            <span>Karma (Action)</span>
                            <span className={styles.arrow}>→</span>
                            <span>"Reinforced Vasana"</span>
                        </p>
                    </div>
                    <p>  These subtle impressions keep you bound to the cycle of Samsara (worldly illusion and rebirth)</p>
 
                    <div className={styles.noteBox}>

                        <h2>Ramana Maharshi's Deeper Teaching</h2>

                        <p>
                            Even good vasanas are still vasanas—they are
                            tendencies of the mind. Compassion is far superior
                            to anger, but the ultimate goal is to transcend all
                            conditioning and abide as the Self.
                        </p>

                        <blockquote>
                            Use one thorn to remove another thorn. Once both
                            have served their purpose, throw both away.
                        </blockquote>

                        <p>
                            Likewise, good vasanas help remove bad vasanas. Once
                            the mind is purified, Self-Enquiry dissolves even
                            the good vasanas, revealing Pure Consciousness.
                        </p>

                    </div>

                    <h3>The Progression of Spiritual Growth</h3>

                    <div className={styles.flowBox}>
                        <p>Bad Vasanas</p>
                        <span className={styles.arrow}>↓</span>
                        <p>Good Vasanas</p>
                        <span className={styles.arrow}>↓</span>
                        <p>No Vasanas (Pure Self)</p>
                    </div>

                </section>

                {/* -------------------------------------- */}

                <section>

                    <h2>Conclusion</h2>

                    <p>
                        Vasanas are the hidden tendencies that shape our
                        thoughts, emotions, and actions. Harmful vasanas bind us
                        to suffering, while beneficial vasanas purify the mind
                        and prepare it for Self-Enquiry.
                    </p>

                    <p>
                        Ultimately, however, the goal is not merely to replace
                        bad tendencies with good ones, but to transcend all
                        conditioning. When every vasana is exhausted, the mind
                        dissolves into its source, revealing the ever-present
                        Self—Pure Consciousness.
                    </p>

                </section>
                <section className={styles.articleSection}>
                    <h2>Neuroscience vs Advaita Vedanta</h2>

                    <div className={styles.compareGrid}>
                        <div className={styles.card}>
                            <h3>Neuroscience Perspective</h3>
                            <p>Repeated experiences strengthen synaptic connections </p>
                            <p>Mindfulness, cognitive reframing, and new experiences can weaken old neural pathways and strengthen new ones</p>
                            <p>
                                The brain changes through experience. Thoughts, emotions, and behavior
                                are understood as patterns of neural activity that evolve over time
                                through neuroplasticity.
                            </p>

                            <p>
                                The observer is generally understood as arising from brain activity.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <h3>Advaita Vedanta Perspective</h3>
                            <p>Repeated thoughts and actions strengthen vasanas</p>
                            <p>Self-enquiry weakens vasanas: "Who am I?" This turns the mind  inward, focusing on the root "I"-thought (aham vritti).</p>
                            <p>
                                The mind changes due to <strong>vasanas</strong> (latent tendencies).<br></br>
                                These conditioning patterns shape thoughts and reactions, but you are
                                not the mind itself.
                            </p>

                            <p>
                                The observer—<strong>Pure Consciousness</strong>—is fundamental and is
                                aware of the brain, mind, and all their changes.
                            </p>
                        </div>
                    </div>
                </section>
                   {/* Client-side navigation link */}
                    <h2><Link
                        href="/blog/vasanas/freedom"
                        className={styles.blogLink}
                    >Way to Freedom→</Link></h2>

            </article>
        </BlogLayout>
    );
} 