const form = document.querySelector('form')
const characterGallery = document.querySelector('#character-gallery')
const input = document.querySelector('input')
let imageDiv = ''

form.addEventListener('submit', (e)=>{
e.preventDefault()
getCharacterData()
})


const getCharacterData = async() => {
try{
    characterGallery.innerHTML = ''

    const characterName = form.elements.query.value

    const characters = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${characterName}`)
    charactersData = characters.data

    charactersData.forEach((character)=>{
        const imageLink = character.img
        createImagesDiv(imageLink)
    })

    imageDiv = document.querySelectorAll('.imageDiv')
    console.log(imageDiv)   
    setHover(imageDiv)
}
catch(e){
    console.log(e)
}
}

const createImagesDiv = (link) =>{
    const newDiv = document.createElement('div')
    const newImage = document.createElement('img')
    newImage.src =  link
    // newDiv.style.backgroundImage = `url(${link})`
    newDiv.classList.add('imageDiv')
    newDiv.append(newImage)
    characterGallery.append(newDiv)
}

const setHover = (arr) =>{
    for(let i =0; i<arr.length;i++){
        arr[i].addEventListener('mouseenter', ()=>{
            arr[i].classList.toggle('displayed')
        })
        arr[i].addEventListener('mouseleave', ()=>{
            arr[i].classList.remove('displayed')
        })
    }
}
	