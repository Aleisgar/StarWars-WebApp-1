const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            character: [],
            planet: [],
            starship: [],
            favorites: [],
            theIds: {},
            images: ["https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg?region=0%2C0%2C1280%2C720&width=768"
            ],
            planet_images: ["https://lumiere-a.akamaihd.net/v1/images/tatooine-main_1633e73f.jpeg?region=164%2C0%2C953%2C536&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542&width=768"
            ],
            ship_images: ["https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_superstardestroyer_01_169_d5757b90.jpeg?region=0%2C0%2C1560%2C878&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Imperial-Sentinel-Class-Shuttle_a2dc7d3b.jpeg?region=0%2C0%2C1596%2C898&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845&width=768",
                "https://lumiere-a.akamaihd.net/v1/images/gr-75-medium-transport_cd04862d.jpeg?region=15%2C0%2C770%2C433&width=768"
            ]

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            loadCharacter: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://swapi.dev/api/people/")
                    .then(resp => resp.json())
                    .then(data => setStore({
                        character: data.results

                    }))
                console.log(getStore())
            },
            loadPlanet: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then(resp => resp.json())
                    .then(data => setStore({
                        planet: data.results
                    }))
                console.log(getStore())
            },
            loadStarship: () => {
                fetch("https://swapi.dev/api/starships/")
                    .then(resp => resp.json())
                    .then(data => setStore({
                        starship: data.results
                    }))
                console.log(getStore())
            },
            addFavorites: (newItem) => {
                const store = getStore();
                if (!store.favorites.includes(newItem)) {
                    setStore({
                        ...store.favorites,
                        favorites: store.favorites.concat(newItem)
                    })
                }
                console.log(newItem);
            },
            deleteFavorites: (character) => {
                const store = getStore();
                const personajes = store.favorites

                let newArr = personajes.filter((item) => item !== character)
                setStore({
                    favorites: newArr
                })
                console.log(newArr)

            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                console.log(getStore())

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;