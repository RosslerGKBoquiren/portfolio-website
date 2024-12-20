// Select relevant elements
const resumeImage = document.getElementById("resumeImage");
const resumeModal = document.getElementById("resumeModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Hover Effect - Allow Scrolling on Hover
resumeImage.addEventListener("mouseenter", () => {
  resumeImage.style.transform = "scale(1.2)";
  resumeImage.style.transition = "transform 0.3s ease";
});

resumeImage.addEventListener("mouseleave", () => {
  resumeImage.style.transform = "scale(1)";
});

// Click Event - Open Modal
resumeImage.addEventListener("click", () => {
  resumeModal.style.display = "block";
  modalImage.src = resumeImage.src;
});

// Close Modal
closeModal.addEventListener("click", () => {
  resumeModal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
  if (event.target === resumeModal) {
    resumeModal.style.display = "none";
  }
});
