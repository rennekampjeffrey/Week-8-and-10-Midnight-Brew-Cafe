// Array of menu items
const menuItems = ["Latte", "Espresso", "Green Tea", "Muffin", "Iced Coffee"];

// Select the unordered list
const menuList = document.getElementById("menu-list");

// Loop through array and create list items
menuItems.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    menuList.appendChild(li);
});
