
const menu = {
    Starters: [
        { name: "Garlic Bread", price: 60.00 },
        { name: "Bruschetta", price: 70.00 }
    ],
    MainCourses: [
        { name: "Margherita Pizza", price: 110.00 },
        { name: "Spaghetti Carbonara", price: 90.00 }
    ],
    Desserts: [
        { name: "Tiramisu", price: 50.00 },
        { name: "Cheesecake", price: 50.00 }
    ]
};

// Function to display the menu items
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (let category in menu) {
        const categoryItems = menu[category];

        // Created element for the category
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('menu-category');
        categoryElement.innerHTML = `<h3>${category}</h3>`;
        menuContainer.appendChild(categoryElement);

        // Created list for items in the category
        const itemList = document.createElement('ul');
        categoryItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('menu-item');
            listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            listItem.addEventListener('click', () => addToOrder(item.name, item.price));
            itemList.appendChild(listItem);
        });

        categoryElement.appendChild(itemList);
    }
}


function addToOrder(itemName, itemPrice) {
    const orderList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Created list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = `${itemName} - R${itemPrice.toFixed(2)}`;
    orderList.appendChild(orderItem);

    let currentTotal = parseFloat(orderTotalElement.textContent) || 0;
    currentTotal += itemPrice;
    orderTotalElement.textContent = currentTotal.toFixed(2);
}

function initMenuSystem(menu) {
    displayMenuItems(menu);
}

initMenuSystem(menu);
