import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experience } from "../constants/Experience.constants"; // Import the experience array

const Experience: React.FC = () => {
    return (
        <section>
            <div className="container py-10">
                <div className="flex flex-col gap-6">
                    <h1 className="font-bold text-4xl">Experience</h1>
                    <ul className="flex flex-col gap-5 lg:gap-8">
                        {experience.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                company={experience.company}
                                duration={experience.duration}
                                image={experience.image}
                                location={experience.location}
                                title={experience.title}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
