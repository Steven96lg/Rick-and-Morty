

const url = "https://rickandmortyapi.com/api"

fetch(url)
    .then(res => res.json())
    .then(data => {
        fetch(data.characters)
            .then(res => res.json())
            .then(data => {
                const characters = data.results;
                Characters(characters)
                SearchCharacter(characters)
            })
    })