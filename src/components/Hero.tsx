import React from "react";
import heroImg from "../assets/tina-avatar.jpeg";

const Hero: React.FC = () => {
    return (
        <section>
            <div className="container py-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
                    <div className="basis-1/2">
                        <h1 className="text-3xl lg:text-5xl">Hi, I'm Tina!</h1>
                        <h2 className="text-2xl lg:text-4xl mt-3">
                            A software engineer with +3 years of experience.
                        </h2>
                        <p className="text-base lg:text-xl mt-8">
                            I am motivated by problem-solving and continuous
                            learning. I strive to build applications that are
                            dependable and user-friendly, gaining experience and
                            insight from every challenge I can get my hands on.
                        </p>
                        <p className="text-base lg:text-xl mt-8">
                            In my free time I like to go for a run, go
                            bouldering or top roping, read a book, or watch a
                            movie.
                        </p>
                    </div>
                    <div className="basis-1/2">
                        <img
                            className="rounded-full mx-auto w-72"
                            src={heroImg}
                            alt="Hero image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
