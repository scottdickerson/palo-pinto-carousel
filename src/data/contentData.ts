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
    title: TranslatedText
    description: TranslatedText
    captions: TranslatedText[]
}

export const select = {
    en: 'Select a gallery To learn more about The people who have come before you',
    es: 'Select a gallery To learn more about The people who have come before you Spanish',
}

export const topicData: TopicDatum[] = [
    {
        topic: 'RanchingAndReservoir',
        title: {
            en: 'Ranching and Reservoir',
            es: 'Ranching and Reservoir Spanish',
        },
        description: {
            en: `<p>The forced removal of First Americans people created large areas of Texas that could be resettled. Before the mid-1870s, large bison herds still roamed Texas, providing food to the tribes. To open the land, the United States followed a brutal practice of land clearance – they forcibly moved Indigenous people to other land and slaughtered the vast southern bison herd so that there would be no food for the tribes. </p>
<p>By the 1880s, Palo Pinto and Stephens counties had fenced rangeland, thousands of sheep, and tens of thousands of cattle. Until the middle of the twentieth century, most of the land that’s now the park was owned by absentee landlords or by ranchers who were headquartered outside the park. Shalor Copeland seems to have been the first rancher who lived in or very near the park. He introduced goats and ran a goat and cattle ranch. Ranching and oil extraction would be the main use of the land you’re enjoying today until Texas Parks and Wildlife bought the land in the early 2010s. </p>
<p>Palo Pinto Mountains State Park provides recreation to thousands, but it also provides drinking water to Strawn. Tucker Lake, a centerpiece of the park, is also a reservoir. Needing a reliable source of fresh water, the City of Strawn, the Works Progress Administration, and the Public Works Administration built the dam and lake in 1937. It’s been a source of water, fish, and fun ever since.</p>`,
            es: 'Ranching and Reservoir Description Spanish',
        },
        captions: [
            {
                en: 'Before the railroad came through, cattle had to be moved long distances on cattle drives. This photo appears to show cowboys on a cattle drive in Palo Pinto County.  • Palo Pinto County Historical Association',
                es: 'Ranching and Reservoir 1 Spanish',
            },
            {
                en: 'Fences like this are remnants of the park’s ranching heritage. • Penelope Ray/TPWD',
                es: 'Ranching and Reservoir 2 Spanish',
            },
            {
                en: 'Tucker Lake, with the dam to the right of the image. • TPWD',
                es: 'Ranching and Reservoir 3 Spanish',
            },
            {
                en: 'For decades before it was part of Palo Pinto Mountains State Park, Tucker Lake was a source of fun. This photo is from the early 1940s. • Courtesy the Weekes Family ',
                es: 'Ranching and Reservoir 4 Spanish',
            },
        ],
    },
    {
        topic: 'HomeForMillenia',
        title: { en: 'Home for Millenia', es: 'Home for Millenia Spanish' },
        description: {
            en: `For thousands of years, people have been roaming this land, relying on it for food, shelter, wealth, and recreation. As they used the land and lived their lives, they left behind evidence in the ground — the material remnants of their lives and activities. The science of carefully studying what’s left behind is called archeology.
We don’t know much about the very first people of north-central Texas, but we’ve got some clues. Archeological evidence from about 16,000-20,000 years ago tells us that people were inhabiting central Texas south of here. Scientists believe that these people migrated from Asia, though the exact method by which they did that is still debated. These early residents hunted very big game like mammoths and mastodons using spears with stone tips. For thousands of years people lived nomadic existences here at the edge of the Great Plains, occasionally leaving a stone tool or cooking fire residue behind.
The last few hundred years have been very dynamic here. Intricate interplays between many North American nations along with the disruptive coming of European colonists resulted in a reshuffling of power on the southern plains. By the time settlers arrived, this land was mainly occupied by semi-nomadic groups from the Comanche, Wichita, Plains Apache, and Tonkawa tribes. Relations between the tribes and the United States were complex and shifting. Eventually all the tribes that resided here forcibly relocated to reservations in Oklahoma. Today, they are still vibrant and living nations, many with their own museums and cultural events that you can visit.
Indigenous Americans managed the land and were active participants in its ecology. We know that when early Euro-American settlers arrived here in the Western Cross Timbers, Indigenous occupants of the land had been burning grass for years as a way to manage the land. Today, Texas Parks and Wildlife still uses prescribed fire as a management method.
        `,
            es: 'HomeForMillenia Description Spanish',
        },
        captions: [
            {
                en: 'The Wichita people constructed large houses from the abundant prairie grass. • Oklahoma Historical Society',
                es: 'HomeForMillenia 1 Spanish',
            },
            {
                en: 'This painting from 1834-1835 shows the Comanche feats of horse riding that they are renowned for. • Smithsonian American Art Museum',
                es: 'HomeForMillenia 2 Spanish',
            },
            {
                en: 'Before the extermination of the great southern bison herds, they were a vital source of food and supplies for tribes like the Comanche, pictured here by George Catlin in the 1840s.  • Smithsonian American Art Museum',
                es: 'HomeForMillenia 3 Spanish',
            },
        ],
    },
]
