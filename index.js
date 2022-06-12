/* PSEUDO-ISH CODE

- RECEIVE ENTRY FROM USER
    - USE THE CLICK OR THE 'ENTER' AS THE CONFIRMATION
- ADD <LI><BUTTON>TEXT CONTENT</BUTTON></LI>
- ADD EVENT LISTENER (ONLICK) TO CHANGE TEXT DECRATION TO STRIKETHROUGH
- ADD EVENT LISTENER (ONCLICK? DOUBLE CLICK? TBD) TO .REMOVE() <LI> FROM <UL>

*/

// GLOBAL VARIABLES


var form = document.querySelector('form')
var toDoList = document.querySelector('#todo-list')


form.onsubmit = function(e) {
    e.preventDefault() //stops HTML from taking over
    var item = document.querySelector('input') //accessing form inputs
    
    if (item.value.trim() === "") {
        return
    }

    var liEl = document.createElement('li') // creates bullet points
    var btnEl = document.createElement('button') //makes bullet points buttons
    toDoList.appendChild(liEl) //add bullets to the to do list
    liEl.appendChild(btnEl)
    
    btnEl.textContent = item.value //inserts form string into the button
    
    item.value = "" //clears form field
    
    var buttonClicks = 0 // track how many times a button is clicked
    btnEl.onclick = function() {
        if (buttonClicks === 0){
        btnEl.style.textDecoration = 'line-through' //one click = strikthrough
        buttonClicks++
        } else if (buttonClicks === 1){ 
            liEl.remove() //two clicks = removal
        }
    }
}


