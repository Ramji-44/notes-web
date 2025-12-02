//

// popup appears
let over = document.querySelector('.overlay')
let pop = document.querySelector('.popup')

// add event listerner to the + button.

let plus = document.getElementById('plus-btn')
plus.addEventListener("click",appear)

function appear(){
    over.style.display="block"
    pop.style.display="block"
}
// cancel button
let back = document.getElementById('cancel')
back.addEventListener("click",close)
// closing 
function close(event){
    event.preventDefault();
        over.style.display="none"
        pop.style.display="none"
}

// select container, title,keywod,description

var mainsector = document.querySelector('.container')
var add = document.getElementById("add-btn")
var title = document.getElementById('heading')
var subtitle = document.getElementById('subheading')
var texarea = document.getElementById('text-area')

add.addEventListener("click",join)

function join(event){
    event.preventDefault()

    let containerx = document.createElement('section')
    // creating a section, and naming the class.
    containerx.setAttribute("class","note-container") 
    // using template literals
    containerx.innerHTML = `<h2>${title.value}</h2>
    <h4>${subtitle.value}</h4>
    <p>${texarea.value}</p>
    <div class="buttons">
    <button class="del"><img src="trash.svg" alt="">Delete</button>
    <button id="edit"><img src="edit.svg" alt="">Edit</button>
    </div>`
    // appends the section(containerx) on the main(mainsector) as a container
    mainsector.append(containerx)


    //close popup after ADD
    over.style.display = "none"
    pop.style.display = "none"

    // clearing fields
    title.value = ""
    subtitle.value = ""
    texarea.value= ""
}

document.addEventListener("click", function(event) {
    if (event.target.closest(".del")) {
        const note = event.target.closest(".note-container");
        if (note){
            note.remove();
    }
}});

