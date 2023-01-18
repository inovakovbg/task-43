import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  function ChangeTitle(){
  const newPageTitle = "One new message";
  document.querySelector('title').textContent = newPageTitle;
}

setTimeout(ChangeTitle,3000);




  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
