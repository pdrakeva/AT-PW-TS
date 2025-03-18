// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
const addBorderBtn = document.getElementById(
  "add-border-btn"
) as HTMLButtonElement;
const sectionContent = document.querySelector(".content") as HTMLElement;

addBorderBtn.addEventListener("click", () => {
  sectionContent.style.border = "2px solid red";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
const changeTextBtn = document.getElementById(
  "change-text-btn"
) as HTMLButtonElement;
changeTextBtn.addEventListener("click", () => {
  sectionContent.style.color = "blue";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
// Assuming this is about button with id "toggle-bg-btn"
const toggleBgBtn = document.getElementById(
  "toggle-bg-btn"
) as HTMLButtonElement;
toggleBgBtn.addEventListener("click", () => {
  sectionContent.style.backgroundColor = "gray";
});

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
sectionContent.addEventListener("mouseover", () => {
  sectionContent.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});

sectionContent.addEventListener("mouseout", () => {
  sectionContent.style.boxShadow = "none";
});
