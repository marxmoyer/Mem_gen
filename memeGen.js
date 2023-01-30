const form = document.querySelector('form')
const img = document.querySelector('#img')
const tText = document.querySelector('#tText')
const bText = document.querySelector('#bText')
const submit = document.querySelector('#submit')
const library = document.querySelector('#library')





form.addEventListener('submit',function(e){
    e.preventDefault()
    // console.log(img.value,tText.value,bText.value)
    const newImg = document.createElement('img')
    const newTopText = document.createElement('text')
    const newBottomText = document.createElement('text')

     newImg.src = (img.value)
     newImg.classList.add('img')
     
     newTopText.append(tText.value)
     newTopText.classList.add('top')

     newBottomText.append(bText.value)
     newBottomText.classList.add('bottom')

     const btnRemove = document.createElement("button")
     btnRemove.innerText = 'X'
     btnRemove.classList.add('remove')
    

    console.log(newTopText,newBottomText)
    
    // make a new div to wrap img and text inputs 
    const divContaner = document.createElement("div")
    //add position of reletive to div
    divContaner.classList.add('contaner');
    //app img and text to div
    divContaner.appendChild(newImg)
    divContaner.appendChild(newTopText)
    divContaner.appendChild(newBottomText)
    divContaner.appendChild(btnRemove)
    
    
    //  bText.classList.add('bottom')

    
    library.appendChild(divContaner)

    form.reset();

    btnRemove.addEventListener('click', function(e){
        e.target.parentElement.remove();

        })

})
    
    

    
  

    


//make a new meme 
// overlay top text 
// overlay bottom text 
// append child to library.