// Create a new JavaScript file for dish details (dish-details.js):

// Sample dish details data
const dishDetailsData = {
    'Caprese Salad': {
        ingredients: ['Fresh mozzarella', 'Tomatoes', 'Basil', 'Balsamic glaze'],
        instructions: [
            'Combine ingredients in a bowl.',
            'Drizzle with balsamic glaze.',
            'Toss gently and serve.'
        ]
    },
    'Bruschetta': {
        ingredients: ['Baguette slices', 'Tomatoes', 'Garlic', 'Basil', 'Olive oil'],
        instructions: [
            'Toast baguette slices until golden brown.',
            'Top with diced tomatoes, garlic, and basil.',
            'Drizzle with olive oil and serve.'
        ]
    },
    'Chicken Alfredo': {
        ingredients: ['Fettuccine pasta', 'Chicken breast', 'Heavy cream', 'Parmesan cheese', 'Garlic'],
        instructions: [
            'Cook fettuccine pasta according to package instructions.',
            'Sauté chicken and garlic until cooked through.',
            'Add heavy cream and Parmesan cheese. Toss with cooked pasta.'
        ]
    },
    'Grilled Salmon': {
        ingredients: ['Salmon fillet', 'Lemon', 'Olive oil', 'Dill', 'Salt', 'Pepper'],
        instructions: [
            'Marinate salmon with olive oil, lemon, dill, salt, and pepper.',
            'Grill salmon until cooked to your liking.',
            'Serve hot with your favorite side dishes.'
        ]
    },
    'Chocolate Cake': {
        ingredients: ['All-purpose flour', 'Cocoa powder', 'Sugar', 'Eggs', 'Butter', 'Milk'],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour a cake pan.',
            'In a bowl, mix flour, cocoa powder, and sugar.',
            'Add eggs, melted butter, and milk. Mix until smooth.',
            'Pour batter into the prepared pan and bake for 30-35 minutes.',
            'Let it cool, then frost with your favorite icing.'
        ]
    },
    'Tiramisu': {
        ingredients: ['Ladyfingers', 'Espresso', 'Mascarpone cheese', 'Eggs', 'Sugar', 'Cocoa powder'],
        instructions: [
            'Dip ladyfingers in espresso and layer them in a serving dish.',
            'In a bowl, mix mascarpone cheese, eggs, and sugar until smooth.',
            'Spread the mascarpone mixture over the ladyfingers.',
            'Dust with cocoa powder and refrigerate for a few hours before serving.'
        ]
    },
};

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const dishName = urlParams.get('name');
    const dishTitle = document.getElementById('dish-title');
    const dishDetailsContainer = document.getElementById('dish-details');

    if (dishName && dishDetailsData[dishName]) {
        dishTitle.textContent = dishName;
        const details = dishDetailsData[dishName];
        
        // Create checkboxes for ingredients
        const ingredientsCheckboxes = document.createElement('div');
        details.ingredients.forEach(ingredient => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            const label = document.createElement('label');
            label.textContent = ingredient;

            const checkboxContainer = document.createElement('div');
            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);

            ingredientsCheckboxes.appendChild(checkboxContainer);
        });

        // Create ordered list for instructions
        const instructionsList = document.createElement('ol');
        details.instructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            instructionsList.appendChild(li);
        });

        dishDetailsContainer.appendChild(ingredientsCheckboxes);
        dishDetailsContainer.appendChild(document.createElement('br'));
        dishDetailsContainer.appendChild(instructionsList);
    } else {
        dishTitle.textContent = 'Dish Not Found';
    }
});
