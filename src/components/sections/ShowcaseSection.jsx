import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
const sectionRef = useRef(null);
const rydeRef = useRef(null);
const libraryRef = useRef(null);
const ycDirectoryRef = useRef(null);

useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
    gsap.fromTo(
        card,
        {
        y: 50,
        opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
          delay: 0.3 * (index + 1),
            scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            },
        }
    );
    });
}, []);

return (
    <div id="work" ref={sectionRef} className="app-showcase">
    <div className="w-full">
        <div className="showcaselayout">
        <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
            <img src="/images/project1.png" alt="iphone" />
            </div>
            <div className="text-content">
                <h2>
                Elegance in Motion. Power in Every Pixel.An immersive landing page built with a utility-first Tailwind architecture 
                and powered by GSAP for a buttery-smooth interactive experience.
                </h2>
                <p className="text-white-50 md:text-xl">
                A high-performance web experience built with Tailwind CSS and GSAP for a fast, 
                motion-rich, and interactive user interface.
            </p>
            </div>
            </div>

        <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
            <div className="image-wrapper bg-[#FFEFDB]">
                <img
                src="/images/project2.png"
                alt="little lemon"
                />
            </div>
            <h2>Little lemon restuarant</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
            <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="zero-g" />
            </div>
            <h2>Zero-g  </h2>
            </div>
            </div>
        </div>
        </div>
    </div>
);
};

export default AppShowcase;
