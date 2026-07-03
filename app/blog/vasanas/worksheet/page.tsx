import { SelfInquiryWorksheet } from "@/app/components/scriptures/SelfInquiryWorksheet";
import BlogLayout from "../../BlogLayout";
import { BackButton } from "@/app/components/BackButton";
import Link from "next/link";

export default function WorksheetPage() {
    return (
        <BlogLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                <BackButton />
            </div>
            <section>
                <SelfInquiryWorksheet />
            </section>
              <h2><Link
                        href="/blog/vasanas/kleshas"
                        className="link-primary-underline"
                    >Kleshas</Link></h2>

        </BlogLayout>
    );
}