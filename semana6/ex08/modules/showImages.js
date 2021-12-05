export default showImages;

function showImages(img_container, files) {
  for (let i = 0; i < files.length; i++) {
    if (files[i].type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i])
      reader.onload = () => {
        const image = document.createElement('div');
        image.classList.add("image");
        image.style.backgroundImage = `url('${reader.result}')`;
        img_container.appendChild(image);
      }
    }
  }
}