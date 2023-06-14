var img = document.getElementById("gallery-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var images = ["guitar.jpg", "problems.jpg", "me.jpg"];
var currentimage = 0;

function changeimage(e){
    if(e.target.id == "next"){
        currentimage = (currentimage + 1) % images.length;
    }

    if(e.target.id == "prev" && currentimage !== 0){
        currentimage = (currentimage - 1);
    }

    img.setAttribute("src", "images/" + images[currentimage]);
}

prev.addEventListener("click", changeimage);
next.addEventListener("click", changeimage);
