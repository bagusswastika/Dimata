alert("Hello from external script");

const printText = document.body.querySelector("#printText");
console.log("[PRINT TEXT]", printText);

const printed = document.getElementById("printed");
console.log(printed);

const printed1 = document.body.querySelector("#printed1");
console.log(printed1.textContent);

button.addEventListener("click", () => {
  alert("Awas ada bahaya");
});

printed.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("Key Press");
  }
});
