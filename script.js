let menu = document.getElementById("menu");
let humberger = document.getElementById("humberger");

humberger.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        humberger.innerHTML = `<i class="bx bx-menu bx-md"></i>`;
    } else {
        menu.classList.add("active");
        humberger.innerHTML = `<i class='bx bx-x bx-md'></i>`;
    }
});

const listItems = document.querySelectorAll(".menu__items a");
listItems.forEach((item) => {
    item.addEventListener("click", () => {
        setTimeout(() => {
            menu.classList.remove("active");

            listItems.forEach((item) => item.classList.remove("active"));

            item.classList.add("active");
            humberger.innerHTML = `<i class="bx bx-menu bx-md"></i>`;
        }, 400);
    });
});
