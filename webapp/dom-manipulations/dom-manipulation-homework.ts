// 1. Change the text of the h1 tag
const selectedH1 = document.querySelector("h1") as HTMLHeadingElement;
selectedH1.textContent = "Edited content of H1 element";

// 2. Change the color of the paragraph inside div.content
const contentText = document.querySelector(
  ".content p"
) as HTMLParagraphElement;
contentText.style.color = "purple";

// 3. Change the list items textContent for example to be list of friuts
const listItems = document.getElementsByTagName(
  "li"
) as HTMLCollectionOf<HTMLLIElement>;

listItems[0].textContent = "Apple";
listItems[1].textContent = "Orange";
listItems[2].textContent = "Banana";

// 4. Add a button and apply border style "1px solid red" to it.
const addBtn: HTMLButtonElement = document.createElement("button");
addBtn.textContent = "New button";
addBtn.style.border = "1px solid red";
document.body.append(addBtn);
