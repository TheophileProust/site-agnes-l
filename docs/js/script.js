// Défilement doux
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Lightbox pour les images de la galerie
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".galerie img");

  images.forEach((img) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "1000";

      const imgClone = img.cloneNode();
      imgClone.style.maxWidth = "90%";
      imgClone.style.maxHeight = "90%";
      imgClone.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.5)";

      overlay.appendChild(imgClone);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    });
  });
});
