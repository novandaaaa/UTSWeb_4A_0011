const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        darkBtn.textContent = "Dark";
    } else {
        darkBtn.textContent = "Light";
    }
});