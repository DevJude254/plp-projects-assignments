// ==========================
// 🎯 Part 1: Variables & Conditionals
// ==========================
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = parseInt(ageInput.value);
  
  if (isNaN(age)) {
    ageResult.textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    ageResult.textContent = "✅ You are an adult!";
  } else {
    ageResult.textContent = "❌ You are still under 18.";
  }
});

// ==========================
// ❤️ Part 2: Functions
// ==========================

// Function to calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function to format result text
function displayResult(element, message) {
  element.textContent = message;
}

const sumBtn = document.getElementById("sumBtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumResult = document.getElementById("sumResult");

sumBtn.addEventListener("click", () => {
  let a = parseFloat(num1.value);
  let b = parseFloat(num2.value);
  let result = calculateSum(a, b);
  displayResult(sumResult, `Sum: ${result}`);
});

// ==========================
// 🔁 Part 3: Loops
// ==========================
const countdownBtn = document.getElementById("countdownBtn");
const countdownList = document.getElementById("countdownList");

countdownBtn.addEventListener("click", () => {
  countdownList.innerHTML = ""; // Clear previous countdown
  for (let i = 5; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i === 0 ? "🎉 GO!" : i;
    countdownList.appendChild(li);
  }
});

// ==========================
// 🌐 Part 4: DOM Manipulation
// ==========================
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const domMessage = document.getElementById("domMessage");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  domMessage.textContent = document.body.classList.contains("dark-mode")
    ? "🌙 Dark Mode Activated!"
    : "☀️ Light Mode Activated!";
});
