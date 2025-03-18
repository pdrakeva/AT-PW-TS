// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var addBorderBtn = document.getElementById("add-border-btn");
var sectionContent = document.querySelector(".content");
addBorderBtn.addEventListener("click", function () {
    sectionContent.style.border = "2px solid red";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var changeTextBtn = document.getElementById("change-text-btn");
changeTextBtn.addEventListener("click", function () {
    sectionContent.style.color = "blue";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
// Assuming this is about button with id "toggle-bg-btn"
var toggleBgBtn = document.getElementById("toggle-bg-btn");
toggleBgBtn.addEventListener("click", function () {
    sectionContent.style.backgroundColor = "gray";
});
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
sectionContent.addEventListener("mouseover", function () {
    sectionContent.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});
sectionContent.addEventListener("mouseout", function () {
    sectionContent.style.boxShadow = "none";
});
