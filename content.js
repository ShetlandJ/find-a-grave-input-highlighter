// funciton that only executes once the page has fully loaded
const setFocus = () => {
    var firstName = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    
    if (firstName) {
        firstName.focus();
        firstName.setAttribute("autofocus", "autofocus");
    }
    
    if (lastname) {
        lastname.removeAttribute("autofocus");
    }
};

setFocus();