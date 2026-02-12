import { testimonials } from "../../constants"
import GlowCard from "../GlowCard"
import TitleHeader from "../TitleHeader"


const Testimonials = () => {
return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What People Say About Me?" 
        sub="Feedback Highlights"
        />


        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
        {testimonials.map(({ name, review}) => (
            <GlowCard card={{review}}>
                <div className="flex items-center gap-3">
                </div>
                <div >
                    <p className="font-bold" >{name}</p>
                </div>
            </GlowCard>
    ))}
        </div>
        </div>
    </section>
)
}

export default Testimonials
