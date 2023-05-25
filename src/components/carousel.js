// const carousel = document.querySelector(".carousel");
// const firstImg = document.querySelectorAll(".carousel img")[0];
// const arrowIcons = document.querySelectorAll(".wrapper .fa-solid");


// let isDragStart = false, prevPageX, prevScrollLeft;
// let firstImgWidth = firstImg.offsetWidth + 14;

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : -firstImgWidth
//     })
// })

// export const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// export const dragging = (e) => {
//     if (!isDragStart) return;
//     e.preventDefault();
//     carousel.classList.add("dragging");
//     let positionDiff = e.pageX - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
// }

// export const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);