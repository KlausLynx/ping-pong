const warnNote = document.getElementById('warnNote');
const form = document.getElementById('form');
const toggle = document.getElementById('btn');
const round = document.getElementById('email');
console.log(round)
function validateEmail() {
    const email = document.getElementById('email').value;
    if(email.length == 0) {
        round.style.borderColor = 'red'
        warnNote.style.display = 'block';
        warnNote.style.fontSize = '14px';
        warnNote.style.color = 'red';
        toggle.style.height = '35.33px';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        // round.style.border = '2px solid red';
        warnNote.style.display = 'block';
        warnNote.style.fontSize = '14px';
        toggle.style.height = '35.33px';
        return false;
    }
    warnNote.style.display = 'none'
    return true
}

function validateForm() {
    if(!validateEmail()) {
        setTimeout(function(){
            warnNote.style.display = 'none'; 
            round.style.borderColor = 'whitesmoke'
        }, 2000);
        return false;
    }
}
 