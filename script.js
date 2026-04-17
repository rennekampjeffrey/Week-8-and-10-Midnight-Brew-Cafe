// ALERT
alert("Welcome to Midnight Brew Café! Open late tonight — perfect for studying or relaxing.");

// MENU ARRAY
const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

// DISPLAY MENU
const menuList = document.getElementById("menu-list");

menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  menuList.appendChild(li);
});

// DAILY SPECIAL
const button = document.getElementById("show-special");
const display = document.getElementById("daily-special");

button.addEventListener("click", () => {
  const randomItem = menuItems[Math.floor(Math.random() * menuItems.length)];
  display.textContent = `Today's Special: ${randomItem}`;
});

// DAY/NIGHT MODE + IMAGE SWITCH
const toggleBtn = document.getElementById("toggle-mode");
const img = document.getElementById("cafe-img");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    img.src = "cafe-night.jpg";
  } else {
    img.src = "cafe-day.jpg";
  }
});

// FAQ
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    document.querySelectorAll(".faq-answer").forEach(a => {
      if (a !== answer) {
        a.classList.remove("show");
      }
    });

    answer.classList.toggle("show");
  });
});
