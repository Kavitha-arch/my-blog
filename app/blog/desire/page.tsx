import BlogLayout from "../BlogLayout";
import styles from "..//Dialoge.module.css";
import Link from "next/link";
import { VerseImage } from "@/app/components/katha/VerseImage";

export default function AshtavakraPage() {
    return (
        <BlogLayout>
            <div>
                <h1>Rest as Pure Awareness</h1>
                <figure className={styles.imageFigure}>
                    <VerseImage
                        src="/images/maa/desire.png"
                        alt="When Desire Ends, The World Ends"
                        width={500}
                        height={600}
                    />

                    <figcaption className={styles.figCaption}>
                        Reimagining a timeless spiritual teaching through the symbolism of Maa Durga.
                        <strong>Inspiration & Attribution:</strong> This artwork was inspired by a
                        teaching illustration shared in the Facebook group <em>"Advaita and
                            Non-Duality."</em> It has been reimagined with Maa Durga, the Asura, and the
                        Deva to express similar spiritual principles through the lens of Sanatana
                        Dharma. The original creator is unknown. If you know the original artist,
                        please let me know so I can provide proper credit.
                    </figcaption>
                </figure>

                {/* Core Idea */}
                <section>
                    <h2>When Desire Ends, The World Ends</h2> 
                    <ul>
                        <li>
                            “When desire ends, the world ends”  does not mean physical destruction.
                        </li>
                        <li>
                            It refers to the end of the psychological world — the world created
                            by craving, fear, comparison, and attachment.
                        </li>
                        <li>
                            The teaching points to perception, not the physical planet.
                        </li>
                    </ul>
                </section>

                {/* Psychological World */}
                <section>
                    <h2>The Psychological World</h2>
                    <ul>
                        <li>
                            The world of <strong>“I want”</strong> and{" "}
                            <strong>“I don’t want.”</strong>
                        </li>
                        <li>
                            The world of <strong>“This is mine”</strong> and{" "}
                            <strong>“This is not mine.”</strong>
                        </li>
                        <br></br>
                        <blockquote className={styles.quote}>
                            <li>The world of comparison, ambition, fear, and attachment.</li>
                            <li>
                                This mental structure survives only through desire. Remove desire,
                                and it dissolves.
                            </li>
                        </blockquote>
                    </ul>
                </section>

                {/* Desire as Root */}
                <section>
                    <h2>Desire as the Root</h2>
                    <ul>
                        <li>
                            Desire begins with the belief:{" "}
                            <strong>“I am not enough.”</strong>
                        </li>
                        <br></br>
                        <blockquote className={styles.quote}>
                            <li>
                                From this belief grows seeking — wealth, love, recognition, even
                                enlightenment.
                            </li>
                        </blockquote>
                        <br></br>
                        <li>Desire turns life into a marketplace of fulfillment.</li>
                        <li>
                            <strong>“You are not becoming — you are being.”</strong>
                        </li>
                    </ul>
                </section>

                {/* Desire and Time */}
                <section>
                    <h2>Desire and Time</h2>
                    <ul>
                        <li>
                            Desire is future-oriented:{" "}
                            <strong>“I will be happy when…”</strong>
                        </li>
                        <br></br>
                        <blockquote className={styles.quote}>
                            <li>Without desire, the future collapses into the present.</li>
                        </blockquote>
                        <br></br>
                        <li>Regret and expectation lose their grip.</li>
                        <li>
                            <strong>“Only presence remains.”</strong>
                        </li>
                    </ul>
                </section>

                {/* Desire and Identity */}
                <section>
                    <h2>Desire and Identity</h2>
                    <ul>
                        <li>Desire strengthens identity and roles.</li>
                        <li>
                            <strong>
                                “I am successful.” “I am a failure.” “I am spiritual.”
                            </strong>
                        </li>
                        <li>Without desire, identity softens.</li>
                        <li>
                            <br></br>
                            <blockquote className={styles.quote}>
                                “You remain as awareness, not a story.”
                            </blockquote>
                            <br></br>
                        </li>
                    </ul>

                </section>

                {/* Desire and Suffering */}
                <section>
                    <h2>Desire and Suffering</h2>
                    <ul>
                        <li>
                            Desire says:{" "}
                            <strong>“This moment is not enough.”</strong>
                        </li>
                        <li>
                            Reality says:{" "}
                            <strong>“This moment is.”</strong>
                        </li>
                        <li>Conflict between the two creates suffering.</li>
                        <li>
                            When desire ends, resistance ends — pain may remain, but
                            psychological suffering fades.
                        </li>
                    </ul>
                </section>

                {/* What Remains */}
                <section>
                    <h2>What Remains When Desire Ends</h2>
                    <ul>
                        <li>Breath continues. The body moves.</li>
                        <li>Seasons change. The sky remains blue.</li>
                        <li>Life flows without grasping or resistance.</li>
                        <li>The world remains physically, but ends as bondage.</li>
                        <li>
                            <blockquote className={styles.quote}>
                                “What remains is pure awareness — silent and untouched.”
                            </blockquote>
                        </li>
                    </ul>
                </section>
                <Link
                    href="/blog/brain/story"
                    className="text-blue-600 underline hover:text-blue-800"
                >What does the Brain Say?</Link>
                <br/>
                 <Link
                    href="/blog/vasanas"
                    className="text-blue-600 underline hover:text-blue-800"
                >Vasanas?</Link>
            </div>
        </BlogLayout>
    );
}
