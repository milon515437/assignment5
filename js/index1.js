function getTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementTextValue = parseInt(elementText);
    return elementTextValue;
}

function setTextValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function totalAvailableSeat() {
    const totalSeatLeft = document.getElementById('available-seat');
    const totalSeatLeftText = totalSeatLeft.innerText;
    const totalSeatLeftValue = parseInt(totalSeatLeftText);
    const totalSeatNumber = totalSeatLeftValue - 1;
    totalSeatLeft.innerText = totalSeatNumber;
}

function hideElementById() {
    const hidePlaceName = document.getElementById('hide-seat-name');
    hidePlaceName.classList.add('hidden');
}

function addSelectedName() {
    const addSelectedSeat = document.getElementById('add-selected-seat');
    const selectedSeatName = (event.target.innerText);
    const div = document.createElement('div');
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    p.innerText = selectedSeatName;
    p2.innerText = "Economoy";
    p3.innerText = 550;
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    div.classList.add('flex');
    div.classList.add('justify-between');
    div.classList.add('items-center');
    addSelectedSeat.appendChild(div);
}
// Login- page
function checkLogin() {
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;

   
    if (username && email && password) {
        
        document.getElementById("loginMessage").innerHTML = "Login successful!";

       
        if (rememberMe) {
            
        }
    } else {
        
        document.getElementById("loginMessage").innerHTML = "Please fill in all fields.";
    }


    return false;
}