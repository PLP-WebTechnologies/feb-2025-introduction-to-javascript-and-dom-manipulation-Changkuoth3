// Change text content and CSS style
document.getElementById("changeTextBtn").addEventListener("click", function () {
  const description = document.getElementById("description");
  description.textContent = "The text has been changed dynamically!";
  description.style.color = "blue";
  description.style.fontWeight = "bold";
});

// Add or remove an element dynamically
document.getElementById("toggleElementBtn").addEventListener("click", function () {
  const container = document.getElementById("extraInfoContainer");
  const existing = document.getElementById("extra");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newDiv = document.createElement("div");
    newDiv.id = "extra";
    newDiv.textContent = "Here is some extra information!";
    newDiv.style.marginTop = "10px";
    newDiv.style.backgroundColor = "#e0ffe0";
    newDiv.style.padding = "10px";
    container.appendChild(newDiv);
  }
});
