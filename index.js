/* PSEUDO-ISH CODE

- RECEIVE ENTRY FROM USER
    - USE THE CLICK OR THE 'ENTER' AS THE CONFIRMATION
- ADD <LI><BUTTON>TEXT CONTENT</BUTTON></LI>
- ADD EVENT LISTENER (ONLICK) TO CHANGE TEXT DECRATION TO STRIKETHROUGH
- ADD EVENT LISTENER (ONCLICK? DOUBLE CLICK? TBD) TO .REMOVE() <LI> FROM <UL>

*/

// GLOBAL VARIABLES

var form = document.querySelector('form')

var toDoListEl = document.querySelector('#todo-list')
var toDoListArray = []
toDoListEl.innerHTML = toDoListArray.innerHTML

form.onsubmit = function(e) {
    e.preventDefault()
    var listItem = document.querySelector('input')
    
    console.log(listItem.value)

}
