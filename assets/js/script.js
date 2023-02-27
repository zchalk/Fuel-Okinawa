
function japaneseToggle() {
    var menu = document.getElementById("menuImg");
    var drinks = document.getElementById("drinksImg");
    console.log(menu.src);
    console.log(drinks);
    var button = document.getElementById("toggle");
    console.log(button);
        if (button.innerText == "日本語メニュー") {
            menu.src = "assets/images/Menu-JAP.jpeg";
            drinks.src = "assets/images/Drinks-JAP.jpeg";
            button.innerText = "English Menu";
        }else if (button.innerText = "English Menu") {
            menu.src = "assets/images/Menu-ENG.jpeg";
            drinks.src = "assets/images/Drinks-ENG.jpeg";
            button.innerText = "日本語メニュー";
        }
}

// button.addEventListener("click", japaneseToggle);