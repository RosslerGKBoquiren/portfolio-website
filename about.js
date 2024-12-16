function newStyle() {
  let newColor = '';
  let newFont = ''; 
  let x = Math.floor(Math.random()*7); 
  switch (x){
    case 0:
      newColor = "#002147";
      newFont = "'Futura', sans-serif"; 
      break;
    case 1: 
      newColor = "#F2003C";
      newFont = "'Bodoni', serif";
      break;
    case 2:
      newColor = "#009CDE";
      newFont = "'Helvetica Neue', Helvetica, Arial, sans-serif";
      break; 
    case 3:
      newColor= "#C3964D";
      newFont = "'Garamond', serif";
      break
    case 4:
      newColor = "#87A878";
      newFont = "'Avenir Next', sans-serif";
      break;
    case 5:
      newColor = "#5D3754";
      newFont = "'Baskerville', serif";
      break;
    case 6: 
      newColor = "#FE5000";
      newFont = "'Gotham', sans-serif";
      break;
  }
  var elem = document.getElementById('logo');
  elem.style.color = newColor;
  elem.style.fontFamily = newFont; 
}