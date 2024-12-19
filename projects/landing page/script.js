

document.getElementById("searchForm").addEventListener("submit", function(event) {
	event.preventDefault();
	const searchInput = document.getElementById("searchInput").value;
	alert("Searching for: " + searchInput);
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
	if(window.scrollY > 300) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
});

scrollToTopBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behaviour: "smooth"});
});