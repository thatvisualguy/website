// Accordion toggles
function toggleAccordion() {
  const isExpanded = this.getAttribute("aria-expanded") === "true";

  const items = document.querySelectorAll(".accordion-item button");

  for (const item of items) {
    if (item !== this) {
      item.setAttribute("aria-expanded", "false");
    }
  }

  this.setAttribute("aria-expanded", isExpanded ? "false" : "true");
}

// Display FAQs
const fetchDataAndDisplay = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/thatvisualguy/json_files/main/FAQs.json"
  );
  const data = await response.json();

  const dataContainer = document.getElementById("accordion");
  dataContainer.innerHTML = "";

  data.forEach((item, index) => {
    const faqContainer = document.createElement("div");
    faqContainer.className = "accordion-item";
    faqContainer.innerHTML = "";

    const questionButton = document.createElement("button");
    questionButton.id = `accordion-button-${index + 1}`;
    questionButton.setAttribute("aria-expanded", "false");
    questionButton.addEventListener("click", toggleAccordion);

    const spanQuestion = document.createElement("span");
    spanQuestion.className = "accordion-title";
    spanQuestion.innerHTML = item.Question;
    questionButton.appendChild(spanQuestion);

    const plusIcon = document.createElement("span");
    plusIcon.className = "icon";
    plusIcon.setAttribute("aria-hidden", "true");
    questionButton.appendChild(plusIcon);

    const answerdiv = document.createElement("div");
    answerdiv.innerHTML = "";
    answerdiv.className = "accordion-content";

    const answerP = document.createElement("p");
    answerP.innerHTML = item.Answer;
    answerdiv.appendChild(answerP);

    faqContainer.appendChild(questionButton);
    faqContainer.appendChild(answerdiv);
    dataContainer.appendChild(faqContainer);
  });

  // Attach event listeners after dynamically loading content
  const items = document.querySelectorAll(".accordion-item button");
  items.forEach((item) => item.addEventListener("click", toggleAccordion));
};

document.addEventListener("DOMContentLoaded", fetchDataAndDisplay);
