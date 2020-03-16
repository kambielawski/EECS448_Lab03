function onValidate() {
  let p1 = document.getElementById('password1');
  let p2 = document.getElementById('password2');
  let errorMessage = document.getElementById('errorMessage');
  if (p1.value != p2.value) {
    errorMessage.innerHTML = "Passwords do not match";
    return;
  }
  if (p1.value.length < 8) {
    errorMessage.innerHTML = "Password must be at least 8 characters long";
    return;
  }
  alert('Looks good!');
  errorMessage.innerHTML = "";
}

let images = [
  "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg",
  "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534-600x401.jpg",
  "https://cdn.shopify.com/s/files/1/0169/6656/products/Fish36a_1024x1024.jpg?v=1351587636",
  "https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201",
  "https://cafedelites.com/wp-content/uploads/2018/06/Oven-Pork-Ribs-IMAGE-3.jpg",
]
function slideShowScroll(next) {
  let imgIndex = images.indexOf(document.getElementById("currentSlideShowImage").src);
  console.log(imgIndex);
  if (next === 1) {
    imgIndex === 4
      ? document.getElementById("currentSlideShowImage").src = images[0]
      : document.getElementById("currentSlideShowImage").src = images[imgIndex + 1];
  } else if (next === -1) {
    imgIndex === 0
      ? document.getElementById("currentSlideShowImage").src = images[4]
      : document.getElementById("currentSlideShowImage").src = images[imgIndex - 1];
  }
}

function onSetStyle() {
  let redBackground = document.getElementById("redBackground");
  let greenBackground = document.getElementById("greenBackground");
  let blueBackground = document.getElementById("blueBackground");
  let redBorder = document.getElementById("redBorder");
  let greenBorder = document.getElementById("greenBorder");
  let blueBorder = document.getElementById("blueBorder");
  let borderWidth = document.getElementById("widthInput");

  let textDiv = document.getElementById("manipulateText");

  textDiv.style.backgroundColor = `rgb(${redBackground.value}, ${greenBackground.value}, ${blueBackground.value})`;
  textDiv.style.borderWidth = `${borderWidth.value}px`;
  console.log(textDiv.style);
  textDiv.style.borderColor = `rgb(${redBorder.value}, ${greenBorder.value}, ${blueBorder.value})`;
}
