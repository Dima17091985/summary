var button = document.querySelector(".icons4");
button.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            var mainElement = document.querySelector("main");
            var asideElement = document.querySelector("aside");
            var profileImgElement = document.querySelector(".profile-img img");

            if (document.body.classList.contains("dark-mode")) {
                button.textContent = "wb_sunny";
                mainElement.style.backgroundColor = "rgb(134, 134, 134)";
                asideElement.style.backgroundColor = "rgb(134, 134, 134)";
                profileImgElement.src = "image/profile2.jpg";

            } else {
                button.textContent = "nightlight";

                mainElement.style.backgroundColor = "rgb(255, 255, 255)";
                asideElement.style.backgroundColor = "rgb(255, 255, 255)";
                profileImgElement.src = "image/profile.jpg";
            }
        });
        