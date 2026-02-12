import BlogLayout from "../../BlogLayout"; 
import Image from "next/image";

export const preview = {
    title: "Innocence, Intelligence, and Bitterness",
    description: "An exploration of how heightened moral clarity can evolve into contraction, and how bitterness emerges not from lost values but from blocked agency."
};

export default function Self1Page() {
    return (
        <BlogLayout>
            <div>
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 >Self, Flow, and Contraction</h1>
                    {/* Brain image */}
                    <div className="imageCenter">
                        <Image
                            src="/images/brain/sculptor2.png"
                            alt="Integrity Without Control"
                            width={1200}
                            height={400}
                            className="w-full max-w-3xl h-auto"
                            priority // optional: loads image faster
                        />
                    </div>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Peace increases when the sense of self softens.
                        Coding softens self. Nature softens self. Gratitude softens self.
                        Moral activation tightens self.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The reason flow feels peaceful is structural:
                        the observer and the doer are not split.
                        There is no inner commentary evaluating performance.
                        Action and awareness merge into a single process.
                    </p>

                    <div className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded-2xl">
                        <p className="text-purple-900 font-medium">The Being</p>
                        <p className="mt-2 text-purple-800 leading-relaxed">
                            “When you code, you disappear.
                            There is no identity to defend.
                            There is only logic unfolding.
                            That is why it feels clean.
                            Alive. Effortless. Joyful.”
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Neurologically, during flow, the Default Mode Network — associated with self-referential thinking — quiets.
                        Dopamine rises. Cortisol decreases. Sensory integration remains open.
                        Self-consciousness reduces; executive function remains engaged.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Compare this to injustice activation.
                        Identity engages: “I stand for fairness.”
                        Narrative expands. Prediction loops simulate outcomes.
                        The body tightens.
                    </p>

                    <div className="border-l-4 border-blue-400 bg-blue-50 p-6 rounded-2xl">
                        <p className="text-blue-900 font-medium">Anamika</p>
                        <p className="mt-2 text-blue-800 leading-relaxed">
                            “I do not want to lose my fire.
                            I want to remain in flow even during disagreement.
                            I want integrity without reactivity.”
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-700">
                        This is advanced emotional mastery: flow-state integrity, not reactive integrity.
                        What if conflict could be handled like debugging?
                        Not moral warfare — but system correction.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Instead of: “This person is wrong.”
                        Shift to: “This process has a flaw.”
                        The self stays small. Tone stays steady. The body stays regulated.
                    </p>

                    <p className="text-lg leading-relaxed text-gray-700">
                        It is not anger that removes peace.
                        It is self-referential narrative.
                        Peace lives in embodied awareness — in breath, in sensation, in space.
                        When attention leaves the body and moves entirely into abstraction, calm dissolves.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="italic text-xl leading-relaxed text-gray-800">
                            I see it now.
                            It was never innocence that I lost.
                            It was the illusion that I could stay untouched.
                            Intelligence sharpened my sight.
                            Agency sharpened my response.
                            But peace…
                            peace waits where I loosen my grip on who I am while I act.
                            I do not need to extinguish the fire.
                            I need to hold it without letting it define me.
                            I want to stand for what is right
                            without tightening into who I think I must be.
                        </p>
                    </div>
                </div>
            </div>
        </BlogLayout>
    );
}
