function newStyle() {
  const styles = [
    { color: "#002147", font: "'Futura', sans-serif" },
    { color: "#F2003C", font: "'Bodoni', serif" },
    { color: "#009CDE", font: "'Helvetica Neue', Helvetica, Arial, sans-serif" },
    { color: "#C3964D", font: "'Garamond', serif" },
    { color: "#87A878", font: "'Avenir Next', sans-serif" },
    { color: "#5D3754", font: "'Baskerville', serif" },
    { color: "#FE5000", font: "'Gotham', sans-serif" }
  ];

  // Generate a random index for the styles array
  const randomIndex = Math.floor(Math.random() * styles.length);
  const selectedStyle = styles[randomIndex];

  // Apply the new style to the logo element
  const logoElement = document.getElementById("logo");
  if (logoElement) {
    logoElement.style.color = selectedStyle.color;
    logoElement.style.fontFamily = selectedStyle.font;
  }
}
