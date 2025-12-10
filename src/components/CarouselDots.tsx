import React from "react";

interface CarouselDotsProps {
    total: number;
    activeIndex: number;
    onDotClick: (i: number) => void;
}

const CarouselDots: React.FC<CarouselDotsProps> = ({
    total,
    activeIndex,
    onDotClick,
}) => {
    return (
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onDotClick(i)}
                    className={`h-3 w-3 rounded-full transition-all ${
                        activeIndex === i ? "bg-black scale-125" : "bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>
    );
};

export default CarouselDots;
