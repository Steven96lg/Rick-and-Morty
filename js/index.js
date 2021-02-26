
const boxCharacter =  document.getElementById('box-characters');
const srchChactr = document.getElementById('srch-chactr');
const findChar = document.getElementById('find-char');
const nameChar = document.getElementById('input-name');


const url = "https://rickandmortyapi.com/api"

    function Characters(){

        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            fetch(data.characters)
                .then(res => res.json())
                .then(data => {

                    boxCharacter.innerHTML = '';

                    let characterName = nameChar.value.toLowerCase();

                    const characters = data.results;

                    for(let CharacterName of characters){

                        let charaacterName = CharacterName.name.toLowerCase()
                        
                        if(charaacterName.indexOf(characterName) !== -1){
                            let aname = document.createElement('a');
                            let pgender = document.createElement('p');
                            let pspecies = document.createElement('p');
                            aname.innerHTML = CharacterName.name;
                            aname.href = CharacterName.url;
                            aname.target = '_blank'
                            pgender.innerHTML = '<span class="pgray">Gender</span> ' + CharacterName.gender;
                            pspecies.innerHTML = '<span class="pgray">Specie</span> ' + CharacterName.species;
                            let img = document.createElement('img');
                            img.src = CharacterName.image;
                            let box = document.createElement('div');
                            let box2 = document.createElement('div');
                            box.classList = 'boxChart';
                            box.appendChild(img);
                            box.appendChild(box2);
                            box2.appendChild(aname);
                            box2.appendChild(pgender);
                            box2.appendChild(pspecies);
                            boxCharacter.appendChild(box);
                        }
                    }

                    if(boxCharacter.innerHTML === ''){
                        boxCharacter.innerHTML = '<h2>No Hay Coincidencias</h2>'
                    }
                })
        })
        
    }

    Characters()

    nameChar.addEventListener('keyup', Characters)
    srchChactr.addEventListener('click', Characters)