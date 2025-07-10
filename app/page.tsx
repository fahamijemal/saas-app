'use client';
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";
import Cta from "@/components/CTA";

export default function HomePage() {
    return (
        <main>
            <h1>Popular companions</h1>
            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura the Explorer"
                    topic="Neural Network of the brain"
                    subject="Science"
                    duration={45}
                    color="#ffda6e"
                />
                <CompanionCard
                    id="124"
                    name="Neura the Explorer"
                    topic="Neural Network of the brain"
                    subject="Maths"
                    duration={45}
                    color="#e5dfff"
                />
                <CompanionCard
                    id="125"
                    name="Neura the Explorer"
                    topic="Language"
                    subject="Science"
                    duration={30}
                    color="#faca6e"
                />
            </section>

            <section className="home-section">
                <Cta />
                <CompanionsList
                    title="Recently completed sessions"
                    companions={recentSessions}
                    className='w-2/3 max-lg:w-full'
                />
            </section>
        </main>
    );
}
