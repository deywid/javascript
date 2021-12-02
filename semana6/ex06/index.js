import showImages from "./modules/showImages.js"

const img_container = document.querySelector(".image-container");
const drop = document.querySelector('.drop-container');

drop.addEventListener('drop', e => {
  e.preventDefault();
  if (e.dataTransfer.files.length)
    showImages(img_container, e.dataTransfer.files)

  drop.classList.remove('drop-container_mouse-over');
})

drop.addEventListener('dragover', e => {
  e.preventDefault();
  drop.classList.add('drop-container_mouse-over');
})

const handlers = ["dragend", "dragleave"].forEach(evhandler => {
  drop.addEventListener(evhandler, e => {
    e.preventDefault();
    drop.classList.remove('drop-container_mouse-over');
  })
});