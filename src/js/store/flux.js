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
            favorites: [],
            theIds: {},

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