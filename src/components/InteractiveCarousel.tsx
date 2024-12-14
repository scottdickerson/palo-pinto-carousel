import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from './ui/carousel'
import './interactiveCarousel.css'
import type { SupportedLanguages, TopicDatum } from '@/data/contentData'

export interface InteractiveCarouselProps extends Partial<TopicDatum> {
    language: SupportedLanguages
}

export const InteractiveCarousel = ({
    topic,
    captions,
    language,
}: InteractiveCarouselProps) => {
    return (
        <Carousel
            className="w-[680px] relative left-shading shading right-shading"
            opts={{ loop: true }}
        >
            <CarouselContent className="text-center -ml-10 ">
                {Array.from({ length: captions?.length ?? 0 }).map((_, i) => (
                    <CarouselItem className="max-w-[568px]  pl-10" key={i}>
                        <img
                            src={`/Carousel_${topic}${i + 1}.png`}
                            alt={captions?.[i][language]}
                        />
                        <h1 className="text-white font-calderLc pt-5">
                            {captions?.[i][language]}
                        </h1>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="h-40 w-10 bg-previousArrow bg-center bg-no-repeat border-0 -left-20" />
            <CarouselNext className=" h-40 w-10 bg-nextArrow bg-center bg-no-repeat border-0 -right-20" />
        </Carousel>
    )
}
