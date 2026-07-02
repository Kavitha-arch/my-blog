import { SelfInquiryWorksheet } from "@/app/components/scriptures/SelfInquiryWorksheet";
import BlogLayout from "../../BlogLayout";
import { BackButton } from "@/app/components/BackButton";

export default function WorksheetPage() {
    return (
        <BlogLayout>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                <BackButton />
            </div>
            <section>
                <SelfInquiryWorksheet />
            </section>
        </BlogLayout>
    );
}