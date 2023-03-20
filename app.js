const h1 = document.querySelector(".hello h1");

h1.innerText = "Hi! From JS";

h1.addEventListener("click", handleTitleClick);

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
