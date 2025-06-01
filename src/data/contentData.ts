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
    images: string[]
}

export const select = {
    en: 'Select a gallery To learn more about The people who have come before you',
    es: 'Select a gallery To learn more about The people who have come before you Spanish',
}

export const topicData: TopicDatum[] = [
    {
        topic: 'HomeForMillenia',
        title: { en: 'Home for Millenia', es: 'Un hogar milenario' },
        description: {
            en: `There are many stories here, all tied to the land’s abundance. The diverse plants and animals that span the hillsides, and the coal, oil, and water hidden within them, have long provided a wealth of resources for all who come here. Swipe through the photos on the left to see how this land has supported people for millennia, including you today at Palo Pinto Mountains State Park.`,
            es: 'Este lugar alberga muchas historias que se conectan con la abundancia de la tierra. Desde hace mucho tiempo, los diversos animales y plantas desperdigados por las laderas, así como el carbón, el aceite y el agua que se esconden en su interior, han brindado una gran cantidad de recursos para quienes visitan este lugar. Hojee las fotos a la izquierda para ver cómo esta tierra le ha brindado sustento a diversos pobladores a lo largo de los milenios, incluso a usted, que se encuentra en el Parque Estatal de las montañas Palo Pinto. ',
        },
        captions: [
            {
                en: 'For thousands of years, people have been roaming this land, relying on it for food, shelter, wealth, and recreation. As they lived their lives on the land, they left behind material evidence of how they used it, providing us with a glimpse into their past. • TPWD',
                es: 'Los humanos han rondado esta tierra por miles de años, sirviéndose de ella para hallar alimento, refugio, riqueza y momentos de ocio. Mientras habitaban la tierra, dejaban en el camino muestras materiales de la forma en que la aprovechaban, lo que nos permite ver un poco de su pasado. • TPWD',
            },
            {
                en: 'People lived nomadic existences here at the edge of the Great Plains, leaving objects behind as they roamed. Archeological evidence from areas like the Gault site, pictured above, tells us that people occupied central Texas about 16,000 to 20,000 years ago. • Jillabus',
                es: 'Los nómades que vivían aquí, bordeando las<br/> Grandes Llanuras, abandonaban algunos objetos a medida que cambiaban de lugar. Las evidencias arqueológicas de zonas como el yacimiento de Gault, que puede ver en la imagen de arriba, nos indican que el ser humano ocupa el centro de Texas desde hace 16,000 a 20,000 años.  • Jillabus',
            },
            {
                en: 'The first people to inhabit this land were active participants in its ecology. Nomadic tribes like the Comanche and Plains Apache hunted bison and other big game. They used fire and the landscape’s natural features to drive herds into better areas for hunting. • Smithsonian American Art Museum',
                es: 'Los primeros habitantes de esta tierra participaban activamente en su ecología. Las tribus nómades como los Comanches y los Apaches de las Llanuras cazaban bisontes y otros animales grandes. Usaban el fuego y los elementos naturales del territorio para guiar a los rebaños hasta zonas en las que era más fácil cazar. • Smithsonian American Art Museum',
            },
            {
                en: 'The Comanche were well renowned for their feats of horseback riding, adapting to the horse in ways that other tribes did not. Their expert riding techniques gave them the upper hand when it came to hunting, warfare, and moving around the Great Plains. • Smithsonian American Art Museum',
                es: 'Los Comanches eran reconocidos por sus hazañas a caballo, con las que demostraban su capacidad de adaptarse a estos animales como ninguna otra tribu. Sus avanzadas técnicas de montura les daban una ventaja a la hora de cazar, pelear en guerras y moverse por las Grandes Llanuras. • Smithsonian American Art Museum',
            },
            {
                en: 'Bison played an essential role on the Great Plains, shaping the landscape and the lives of the people that relied on it. Not only did bison support the health of the prairies through grazing, they also provided a vital food source for many tribes. The eradication of the southern plains bison and the removal of Native American tribes cleared large areas of Texas for settlement. The effects of their absence still linger today. • Smithsonian American Art Museum ',
                es: 'Los bisontes desempeñaron un papel esencial en las Grandes Llanuras, ya que le daban forma al paisaje y a la vida de las personas que dependían de ellos. No solo contribuían a la salud de las praderas mediante el pastoreo, sino que también eran una fuente vital de alimento para muchas tribus. La erradicación del bisonte de las llanuras del sur y la expulsión de las tribus amerindias despejaron grandes áreas de Texas, lo que facilitó la colonización. Las consecuencias de su ausencia se perciben incluso en la actualidad. • Smithsonian American Art Museum',
            },
            {
                en: 'Starting in the late 1800s, ranching cattle became the primary use of the land. Before the railroad, cattle had to be moved long distances on cattle drives. This photo shows cowboys on a cattle drive through Palo Pinto County. • Palo Pinto County Historical Association',
                es: 'A partir de finales del siglo XIX, la ganadería se convirtió en el uso principal de la tierra. Antes de la llegada del ferrocarril, el arreo era la única forma de recorrer largas distancias con el ganado. En esta foto se puede ver a los vaqueros arreando el ganado por el condado de Palo Pinto. • Palo Pinto County Historical Association',
            },
            {
                en: 'The Texas and Pacific Railway crosses through the park. Its completion in 1880 forever altered the landscape.  Local coal could now be exported, and a brief economic boom followed. Whistles echoed between the hills and steam billowed upwards as trains transported goods between distant Texas towns. •  Boyce Ditto Public Library ',
                es: 'La construcción del ferrocarril Texas and Pacific, que atraviesa el parque, culminó en 1880 y modificó el paisaje para siempre.  Desde entonces, permitió la exportación del carbón local, lo que provocó un breve auge económico. Los silbatos resonaban entre las colinas y el vapor se elevaba al paso de los trenes<br/> que transportaban mercancías entre pueblos distantes de Texas. • Boyce Ditto Public Library',
            },
            {
                en: 'The town of Gordon, 11 miles east of the park, is seen here circa 1905. A pair of railroad tracks spans the photo. Some towns, like Gordon, remained long after the railway was finished. Others, like Wiles Siding, are now ghost towns only remembered through photographs and stories. • Palo Pinto County Historical Association',
                es: 'El pueblo de Gordon, a 11 millas (18 km) al este del parque, se muestra en esta imagen tomada alrededor de 1905. Un par de vías férreas cruzan la foto. <br/>Algunos pueblos, como Gordon, siguieron en pie mucho tiempo después de la construcción del ferrocarril. Otros, como Wiles Siding, ahora son pueblos fantasmas que quedaron en el recuerdo a través de fotografías e historias. • Palo Pinto County Historical Association',
            },
            {
                en: 'Until the mid-1900s, most of the land that’s now the park was owned by absentee landlords or ranchers. Shalor Copeland was likely the first goat and cattle rancher here. Ranching would remain the primary use of the land you’re enjoying today until Texas Parks and Wildlife bought the land in 2011. Fences like this are remnants of the park’s ranching heritage. • Penelope Ray',
                es: 'Hasta mediados del siglo XX, la mayor parte de la tierra que hoy conforma el parque pertenecía a ganaderos o a terratenientes que vivían lejos. Es probable que Shalor Copeland haya sido el primer criador de cabras y ganado en esta zona. La ganadería continuó siendo el principal uso de la tierra que usted está disfrutando hoy hasta que el Departamento de Parques y Vida Silvestre de Texas la adquirió en 2011. Cercas como esta son vestigios del legado ganadero del parque. • Penelope Ray',
            },
            {
                en: 'For decades before it became part of Palo Pinto Mountains State Park, Tucker Lake was a source of fun as well as drinking water. This photo is from the early 1940s. Today, you can still enjoy what Tucker Lake has to offer—cast a line, take a swim, or go for a paddle! • Courtesy the Weekes Family',
                es: 'Durante décadas, antes de convertirse en parte del Parque Estatal de las montañas Palo Pinto, el lago Tucker fue tanto una fuente de diversión como de agua potable. Esta foto es de principios de la década de 1940. Hoy en día, todavía se puede disfrutar de lo que el lago Tucker tiene para ofrecer: puede pescar, darse un chapuzón o salir a remar. • Courtesy the Weekes Family',
            },
            {
                en: 'Tucker Lake is also a reservoir that provides drinking water for Strawn. The city of Strawn, the Works Progress Administration and the Public Works Administration built the dam and lake in 1937. It has been a source of water, fish, and fun ever since. • TPWD',
                es: 'El lago Tucker también es un embalse que abastece de agua potable a la ciudad de Strawn, que, junto con la Works Progress Administration y la Public Works Administration, construyó la presa y el lago en 1937. Desde ese momento, ha sido una fuente de agua, pesca y recreación. • TPWD',
            },
        ],
        images: [
            '/carousel/Slide 1 - Palo Pinto Mountains.jpg',
            '/carousel/Slide 2 - Gault Site.jpg',
            '/carousel/Slide 3 - Bison Hunt.jpg',
            '/carousel/Slide 4 - Comanche on Horseback.jpg',
            '/carousel/Slide 5 - Comanche Village.jpg',
            '/carousel/Slide 6 - Chuckwagon.jpg',
            '/carousel/Slide 7 - Train.jpg',
            '/carousel/Slide 8 - Gordon.jpg',
            '/carousel/Slide 9 - Fence.jpg',
            '/carousel/Slide 10 - Fishing.jpg',
            '/carousel/Slide 11 - Tucker Lake.jpg',
        ],
    },
]
