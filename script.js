let form = document.querySelector("form");
let userEmail = document.querySelector("input")

form.addEventListener("submit", (e) => {
    if (userEmail.value === '' || !validateEmail(userEmail.value)) {
        e.preventDefault()
        form.classList.add("error")
    }

    else {
        userEmail.value = ""
        form.classList.remove("error")
        e.preventDefault()
    }
})


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };