var button = document.querySelector(".icons4");
button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    var mainElement = document.querySelector(".main");
    var profileImgElement = document.querySelector(".profile-img img");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "wb_sunny";

        mainElement.style.backgroundColor = "rgb(50, 50, 50)";
        mainElement.style.transition = "background-color 0.8s";
        profileImgElement.src = "image/profile2.jpg";
        profileImgElement.style.transition = "opacity 0.8s";
        profileImgElement.style.opacity = "0";
        setTimeout(function () {
            profileImgElement.style.opacity = "1";
        }, 100);
    } else {
        button.textContent = "nightlight";

        mainElement.style.backgroundColor = "rgb(255, 255, 255)";
        mainElement.style.transition = "background-color 0.8s";
        profileImgElement.style.transition = "opacity 0.8s";
        profileImgElement.style.opacity = "0";
        setTimeout(function () {
            profileImgElement.src = "image/profile.jpg";
            profileImgElement.style.opacity = "1";
        }, 100);
    }
});
