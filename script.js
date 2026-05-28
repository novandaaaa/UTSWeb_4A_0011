const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        darkBtn.textContent = "Dark";
    } else {
        darkBtn.textContent = "Light";
    }
});

const filterButtons = document.querySelectorAll(".filter-btn");
const mangaItems = document.querySelectorAll(".manga-item");
filterButtons.forEach(function(button){

    button.addEventListener("click", function(){
        const genre = button.dataset.genre;
        mangaItems.forEach(function(item){

            if(genre === "all"){

                item.style.display = "block";
            }
            else if(item.dataset.genre === genre){

                item.style.display = "block";
            }
            else{

                item.style.display = "none";
            }
        });
    });
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(e){

    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Silahkan Isi Semua Kolom!");
    }
    else{

        alert("Pesan Terkirim!");
        contactForm.reset();
    }
});