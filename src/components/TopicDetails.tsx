import parse from 'html-react-parser'

export interface TopicDetailsProps {
    title?: string
    /**
     * description will contain html characters
     */
    description?: string
    className?: string
}
export const TopicDetails = ({
    title,
    description,
    className,
}: TopicDetailsProps) => {
    return (
        <div
            className={`flex flex-col items-start gap-4 w-[626px] ${className}`}
        >
            <h1 className="text-[40px] text-center font-calderDarkGritShadow">
                {title}
            </h1>
            <div className="max-h-[610px] overflow-y-auto font-calderLc text-[26px] custom-scrollbar pr-4">
                {description ? (
                    <div className="flex flex-col gap-10">
                        {parse(description)}
                    </div>
                ) : null}
            </div>
        </div>
    )
}
