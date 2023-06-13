let pic = document.getElementById("profile-picture");

document.addEventListener("scroll", function () {
  if (window.scrollY > 5) {
    pic.style.borderRadius = "0%";
  } else {
    pic.style.borderRadius = "100%";
  }
});
