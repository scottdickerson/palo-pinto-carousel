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
    captions,
    images,
    language,
}: InteractiveCarouselProps) => {
    return (
        <Carousel
            className="w-[720px] relative left-shading shading right-shading"
            opts={{ loop: true }}
        >
            <CarouselContent className="text-center">
                {Array.from({ length: captions?.length ?? 0 }).map((_, i) => {
                    const [caption, source] = captions?.[i][language].split(
                        '•'
                    ) ?? ['', ''] // Fallback to empty string if captions is undefined
                    return (
                        <CarouselItem
                            className="pl-9 flex flex-col items-center min-w-[600px] basis-1/2"
                            key={i}
                        >
                            <img
                                className="max-w-[580px] max-h-[400px]"
                                src={images?.[i]}
                                alt={caption}
                            />
                            <cite className="text-white font-calderLc text-[15px] pt-2">
                                {source}
                            </cite>
                            <h1 className="text-white font-calderLc text-[20px] pt-4">
                                {caption}
                            </h1>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
