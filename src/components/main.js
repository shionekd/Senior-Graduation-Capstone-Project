{
  

  /*let imagesItems = [...document.querySelectorAll(".img-wrap")];
//console.log(imagesItems);
let titles = [...document.querySelectorAll(".scrollTitle")];
let titleMessage = document.querySelector(".title");

let setItemActive = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        //console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};
let options = {
    rootMargin: "0px",
    threshold: 0.5,
};

let observer = new IntersectionObserver(setItemActive, options);
observer.observe(titleMessage);

imagesItems.map((item, index) => {
    //console.log(item, index);
    item.children[0].style.backgroundImage = 'url(./images/logo.png)';
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%")
    observer.observe(title);
});
*/
}