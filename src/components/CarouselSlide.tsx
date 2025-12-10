import React, { ReactNode } from "react";

interface CarouselSlideProps {
    children: ReactNode;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ children }) => {
    return <div className="w-full">{children}</div>;
};

export default CarouselSlide;
