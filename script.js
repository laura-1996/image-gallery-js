const images = document.querySelectorAll(".img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

images.forEach((image) => {
    image.addEventListener("click", () => {
      modalImg.src = image.src;
      modalTxt.innerHTML = image.alt;
      modal.classList.add("visible");
  
      close.addEventListener("click", () => {
        modal.classList.remove("visible");
      });
    });
  });
// had to sacrifice the load more button when I changed the gallery style, probably because the image card are now inside the gallery-column div
/*  const loadmore = document.querySelector('#loadMore');
    let currentItems = 6;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.image-card')];
        for (let i = currentItems; i < currentItems + 6; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 6;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
*/
