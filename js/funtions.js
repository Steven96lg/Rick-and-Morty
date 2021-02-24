
const boxCharacter =  document.getElementById('box-characters');
const srchChactr = document.getElementById('srch-chactr');
const findChar = document.getElementById('find-char');
const nameChar = document.getElementById('input-name');


function Characters(chars){

    chars.map(character => {
        let aname = document.createElement('a');
        let pgender = document.createElement('p');
        let pspecies = document.createElement('p');
        aname.innerHTML = character.name;
        aname.href = character.url;
        aname.target = '_blank'
        pgender.innerHTML = '<span class="pgray">Gender</span> ' + character.gender;
        pspecies.innerHTML = '<span class="pgray">Specie</span> ' + character.species;
        let img = document.createElement('img');
        img.src = character.image;
        let box = document.createElement('div');
        let box2 = document.createElement('div');
        box.classList = 'boxChart';
        box.appendChild(img);
        box.appendChild(box2);
        box2.appendChild(aname);
        box2.appendChild(pgender);
        box2.appendChild(pspecies);
        boxCharacter.appendChild(box);
    })

    console.log(chars)
}

function SearchCharacter(charts){ 
    srchChactr.addEventListener('click', (e) => {
        const nameChar = document.getElementById('input-name').value
    
        if(charts.find(char => char.name === nameChar)){
            charts.filter(char => {
                
            })
        }else{
            findChar.innerHTML = '<h2>Personaje No Encontrado</h2>'
        }

        e.preventDefault();
    })
    
}



