import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    TouchEvent,
    ReactElement,
} from "react";
import Button from "./Button";
import CarouselDots from "./CarouselDots";

interface CarouselProps {
    children: ReactElement[];
    interval?: number;
}

const SLIDE_WIDTH_PERCENT = 80;
const SLIDE_GAP_PX = 20;

const Carousel: React.FC<CarouselProps> = ({ children, interval = 3000 }) => {
    const total = children.length;
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [slideWidthPx, setSlideWidthPx] = useState(0);
    const [centerOffsetPx, setCenterOffsetPx] = useState(0);

    const measure = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const containerW = container.clientWidth;
        const slideW = (SLIDE_WIDTH_PERCENT / 100) * containerW;
        const offset = (containerW - slideW) / 2;
        setSlideWidthPx(slideW + SLIDE_GAP_PX);
        setCenterOffsetPx(offset - SLIDE_GAP_PX / 2);
    }, []);

    useLayoutEffect(() => {
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [measure]);

    const slides = children.concat(children).concat(children);
    const middleSetStart = total;

    const [position, setPosition] = useState(middleSetStart);
    const [isPaused, setIsPaused] = useState(false);

    const autoplayRef = useRef<number | null>(null);
    useEffect(() => {
        if (isPaused) return;
        autoplayRef.current = window.setInterval(
            () => setPosition((prev) => prev + 1),
            interval
        );
        return () => {
            if (autoplayRef.current) window.clearInterval(autoplayRef.current);
        };
    }, [isPaused, interval]);

    const next = () => setPosition((prev) => prev + 1);
    const prev = () => setPosition((prev) => prev - 1);

    const startX = useRef<number | null>(null);
    const onTouchStart = (e: TouchEvent) => {
        startX.current = e.touches[0].clientX;
        setIsPaused(true);
        if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
    const onTouchEnd = (e: TouchEvent) => {
        if (startX.current == null) return;
        const diff = startX.current - e.changedTouches[0].clientX;
        startX.current = null;
        if (diff > 40) next();
        else if (diff < -40) prev();
        setTimeout(() => setIsPaused(false), 3000);
    };

    useEffect(() => {
        if (position >= total * 2) setPosition(position - total);
        else if (position < total) setPosition(position + total);
    }, [position, total]);

    const realIndex = (((position - middleSetStart) % total) + total) % total;

    const transformStyle = {
        transform: `translateX(${-position * slideWidthPx + centerOffsetPx}px)`,
        transition: "transform 400ms ease",
        display: "flex",
        gap: `${SLIDE_GAP_PX}px`,
        alignItems: "center",
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden border-2 border-indigo-500 rounded-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex"
                style={transformStyle}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0"
                        style={{
                            width: slideWidthPx - SLIDE_GAP_PX,
                            boxSizing: "border-box",
                        }}
                    >
                        {slide}
                    </div>
                ))}
            </div>

            <Button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2"
                ariaLabel="Previous slide"
            >
                ◀
            </Button>
            <Button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                ariaLabel="Next slide"
            >
                ▶
            </Button>

            <CarouselDots
                total={total}
                activeIndex={realIndex}
                onDotClick={(i) => setPosition(middleSetStart + i)}
            />
        </div>
    );
};

export default Carousel;
