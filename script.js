const dishesContainer = document.getElementById('dishes-container');
const categoryTitle = document.getElementById('category-title');

// Sample dish data with placeholder image URLs
const dishData = {
    'appetizers': [
        { name: 'Caprese Salad', image: 'https://via.placeholder.com/300', details: 'Fresh mozzarella, tomatoes, basil, and balsamic glaze.' },
        { name: 'Bruschetta', image: 'https://via.placeholder.com/300', details: 'Toasted bread topped with diced tomatoes, garlic, and basil.' },
    ],
    'main-courses': [
        { name: 'Chicken Alfredo', image: 'https://via.placeholder.com/300', details: 'Creamy Alfredo sauce with grilled chicken and fettuccine pasta.' },
        { name: 'Grilled Salmon', image: 'https://via.placeholder.com/300', details: 'Freshly grilled salmon fillet with lemon and herbs.' },
        { name: 'Easy Homemade Pizza Dough', image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/08/basil-pesto-pizza.jpg', details: 'The recipe yields enough pizza dough for two 12-inch pizzas and you can freeze half of the dough for later. Close to 2 pounds of dough total.'}
    ],
    'desserts': [
        { name: 'Chocolate Cake', image: 'https://via.placeholder.com/300', details: 'Rich and moist chocolate cake with chocolate ganache.' },
        { name: 'Tiramisu', image: 'https://via.placeholder.com/300', details: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.' },
    ],
};

function showCategory(category) {
    const dishes = dishData[category];
    if (dishes) {
        categoryTitle.textContent = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
        dishesContainer.innerHTML = '';
        dishes.forEach(dish => {
            const card = document.createElement('div');
            card.className = 'dish-card';
            card.innerHTML = `
                <img src="${dish.image}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>${dish.details}</p>
            `;
            card.onclick = () => showDishDetails(dish);
            dishesContainer.appendChild(card);
        });
    }
}

function showDishDetails(dish) {
    // Replace this function with code to show the detailed view of the selected dish
    alert(`Details for ${dish.name}: ${dish.details}`);
}

// Initial load (you can choose a default category to display)
showCategory('appetizers');


function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('show-menu');
}

function showDishDetails(dish) {
    // Redirect to a new page for detailed view (ingredients and instructions)
    window.location.href = `dish-details.html?name=${encodeURIComponent(dish.name)}`;
}