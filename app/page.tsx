'use client';
import ComponentCard from "@/components/ComponentCard";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";

export default function HomePage() {
    return (
        <main>
            <h1>Popular companions</h1>
            <section className="home-section">
                <ComponentCard
                    id="123"
                    name="Neura the Explorer"
                    topic="Neural Network of the brain"
                    subject="Science"
                    duration={45}
                    color="#ffda6e"
                />
                <ComponentCard
                    id="124"
                    name="Neura the Explorer"
                    topic="Neural Network of the brain"
                    subject="Maths"
                    duration={45}
                    color="#e5dfff"
                />
                <ComponentCard
                    id="125"
                    name="Neura the Explorer"
                    topic="Language"
                    subject="Science"
                    duration={30}
                    color="#faca6e"
                />
            </section>

            <section className="home-section">
                <CTA />
                <CompanionsList />
            </section>
        </main>
    );
}
