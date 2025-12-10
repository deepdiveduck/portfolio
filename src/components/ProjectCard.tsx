import React from "react";

interface ProjectCardProps {
    title: string;
    image: string;
    repoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, repoUrl }) => {
    return (
        <div className="border border-indigo-500 rounded-xl flex flex-col items-center gap-4 shadow-md shadow-indigo-500/30 bg-indigo-100/50 p-6 w-full">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <div>
                    <img src={image} alt={title} />
                </div>

                <h3 className="font-medium text-base text-slate-900">
                    {title}
                </h3>
            </a>
        </div>
    );
};

export default ProjectCard;
