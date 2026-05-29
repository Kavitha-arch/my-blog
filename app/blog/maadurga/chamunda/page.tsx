import "../../katha1.css"; 
import BlogLayout from "../../BlogLayout"; 

export default function ChamundaPage() {
    return (
        <BlogLayout>
            <article className="prose prose-neutral dark:prose-invert">
                <div className="max-w-3xl mx-auto px-6 py-2"> 
                        <section className="hero_section">
                            <h1>Symbolism in the Devi Mahatmya</h1>
                            <p>
                                The story of Durga is not merely a mythological battle narrative.
                                It is a symbolic map of psychological struggle, attachment,
                                ego, and transformation.
                            </p>
                        </section>

                        <section className="card-section">
                            <h2>Chanda and Munda</h2>

                            <p>
                                Chanda and Munda represent distorted expressions of aggression,
                                ego, and destructive force within the human mind.
                            </p>

                            <div className="symbol-list">
                                <h3>They symbolize:</h3>
                                <ul>
                                    <li>Raw violent impulses</li>
                                    <li>Rage, dominance, and cruelty</li>
                                    <li>Uncontrolled action and obsessive fixation</li>
                                    <li>The fragmentation of ego into destructive tendencies</li>
                                </ul>
                            </div>

                            <p className="highlight">
                                Durga’s victory over them symbolizes mastery over impulsive anger
                                and destructive aggression.
                            </p>
                        </section>

                        <section className="card-section">
                            <h2>Raktabeeja</h2>

                            <p>
                                Raktabeeja is one of the deepest psychological symbols in the
                                Devi Mahatmya.
                            </p>

                            <div className="symbol-list">
                                <h3>He represents:</h3>
                                <ul>
                                    <li>Self-reinforcing mental patterns</li>
                                    <li>Anxiety, addiction, and compulsive thinking</li>
                                    <li>Negativity that multiplies through reaction</li>
                                    <li>The endless regeneration of fear and desire</li>
                                </ul>
                            </div>

                            <p>
                                Every drop of his blood creating another demon symbolizes how
                                emotional reactions can multiply suffering.
                            </p>

                            <p className="highlight">
                                Durga stopping the blood from touching the ground represents
                                awareness interrupting cycles of mental proliferation.
                            </p>
                        </section>

                        <section className="card-section">
                            <h2>King Suratha and Merchant Samadhi</h2>

                            <p>
                                These framing characters symbolize ordinary human suffering
                                and attachment.
                            </p>

                            <div className="two-column">
                                <div className="sub-card">
                                    <h3>King Suratha</h3>
                                    <ul>
                                        <li>Attachment to status and identity</li>
                                        <li>Loss of power and inability to let go</li>
                                        <li>Ego tied to past roles and control</li>
                                    </ul>
                                </div>

                                <div className="sub-card">
                                    <h3>Merchant Samadhi</h3>
                                    <ul>
                                        <li>Emotional attachment and entanglement</li>
                                        <li>Concern for possessions and family</li>
                                        <li>Difficulty releasing worldly bonds</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="highlight">
                                Their suffering becomes the beginning of spiritual inquiry.
                            </p>
                        </section>

                        <section className="summary">
                            <h2>The Bigger Symbolic Journey</h2>

                            <div className="journey">
                                <div className="journey-item">
                                    <span>King + Merchant</span>
                                    <p>Human attachment and identity</p>
                                </div>

                                <div className="journey-item">
                                    <span>Chanda–Munda</span>
                                    <p>Aggression and egoic force</p>
                                </div>

                                <div className="journey-item">
                                    <span>Raktabeeja</span>
                                    <p>Self-reinforcing suffering and thought cycles</p>
                                </div>

                                <div className="journey-item">
                                    <span>Durga</span>
                                    <p>
                                        Higher awareness and transformative consciousness
                                    </p>
                                </div>
                            </div>

                            <blockquote>
                                The Devi Mahatmya can be read as a symbolic exploration of how
                                the mind creates suffering — and how awareness dissolves it.
                            </blockquote>
                        </section> 
                </div>
            </article>
        </BlogLayout>
    );
}