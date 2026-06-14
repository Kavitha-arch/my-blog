import { AboutBlock } from "@/app/components/katha/AboutBlock";
import BlogLayout from "../../BlogLayout";
import { SourcesBlock } from "@/app/components/katha/SourcesBlock";

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

                <AboutBlock/>
                <SourcesBlock/>

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