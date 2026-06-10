import BlogLayout from "../../BlogLayout";

export default function AboutPage() {
    return (
        <BlogLayout>

            <h1  >About This Website</h1>

            <div>
                <p>
                    This website explores mythology, symbolism, psychology,
                    philosophy, and spiritual traditions through a combination of
                    research and personal reflection.
                </p>

                <p>
                    Many of the stories and concepts discussed here are interpreted
                    not only as historical or mythological narratives, but also as
                    symbolic representations of human experience, inner growth,
                    and transformation.
                </p>

                <p>
                    The content draws from a variety of sources, including
                    scriptures, books, scholarly works, lectures, articles,
                    discussions, and other educational resources. It represents
                    a synthesis of research and interpretation rather than a direct
                    reproduction of any single source.
                </p>

                <p>
                    While efforts have been made to acknowledge important references
                    where appropriate, not every influence or source is explicitly
                    listed. Any omissions are unintentional.
                </p>

                <p>
                    The perspectives, interpretations, and conclusions presented
                    throughout this website are my own and should be understood as
                    personal reflections intended for my learning, inquiry,
                    and contemplation.
                </p>

                <div className="mt-10 rounded-lg bg-pink-400 p-6">
                    <h2>
                        DISCLAIMER
                    </h2>
                    <p className="text-white">
                        This website is created primarily for <strong>my own understanding</strong>, learning, and reflection. 
                        It is not intended for monetary gain.
                         If others find value in reading it, that is welcome, 
                         but its main purpose is <strong>PERSONAL</strong>.
                    </p>
                </div>
            </div>
        </BlogLayout>
    );
}