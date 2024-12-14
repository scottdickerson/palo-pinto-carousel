export type Topics = 'RanchingAndReservoir' | 'HomeForMillenia'

export enum SupportedLanguages {
    en = 'en',
    es = 'es',
}

export interface TranslatedText {
    en: string
    es: string
}

export interface TopicDatum {
    topic: Topics
    captions: TranslatedText[]
}

export const topicData: TopicDatum[] = [
    {
        topic: 'RanchingAndReservoir',
        captions: [
            {
                en: 'Before the railroad came through, cattle had to be moved long distances on cattle drives. This photo appears to show cowboys on a cattle drive in Palo Pinto County.  • Palo Pinto County Historical Association',
                es: 'Ranching and Reservoir 1',
            },
            {
                en: 'Fences like this are remnants of the park’s ranching heritage. • Penelope Ray/TPWD',
                es: 'Ranching and Reservoir 2',
            },
            {
                en: 'Tucker Lake, with the dam to the right of the image. • TPWD',
                es: 'Ranching and Reservoir 3',
            },
            {
                en: 'For decades before it was part of Palo Pinto Mountains State Park, Tucker Lake was a source of fun. This photo is from the early 1940s. • Courtesy the Weekes Family ',
                es: 'Ranching and Reservoir 4',
            },
        ],
    },
    {
        topic: 'HomeForMillenia',
        captions: [
            {
                en: 'The Wichita people constructed large houses from the abundant prairie grass. • Oklahoma Historical Society',
                es: 'HomeForMillenia 1',
            },
            {
                en: 'This painting from 1834-1835 shows the Comanche feats of horse riding that they are renowned for. • Smithsonian American Art Museum',
                es: 'HomeForMillenia 2',
            },
            {
                en: 'Before the extermination of the great southern bison herds, they were a vital source of food and supplies for tribes like the Comanche, pictured here by George Catlin in the 1840s.  • Smithsonian American Art Museum',
                es: 'HomeForMillenia 3',
            },
        ],
    },
]
