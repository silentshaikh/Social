let socialBar = document.getElementById("links");
let arrow = document.getElementById("toggle");
let list = document.querySelectorAll(".list li");
let para = document.getElementById("prag");

arrow.onclick = function () {
    arrow.classList.toggle("down");
    socialBar.classList.toggle("remove");
}
list.forEach(list => {
    list.addEventListener("click",() => {
        para.innerHTML = list.innerHTML
    })
})
