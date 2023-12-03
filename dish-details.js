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
    'Easy Homemade Pizza Dough': {
        ingredients: ['1 and 1/3 cups (320ml) warm water (between 100-110°F, 38-43°C)', '2 and 1/4 teaspoons (7g) Platinum Yeast from Red Star instant yeast (1 standard packet)*', '1 Tablespoon (13g) granulated sugar', '2 Tablespoons (30ml) olive oil, plus more for pan and brushing on dough', '1 teaspoon salt'],
        instructions: [
            'Whisk the warm water, yeast, and granulated sugar together in the bowl of your stand mixer fitted with a dough hook or paddle attachment. Cover and allow to rest for 5 minutes. *If you don’t have a stand mixer, simply use a large mixing bowl and mix the dough with a wooden spoon or rubber spatula in the next step.',
            'Add the olive oil, salt, and flour. Beat on low speed for 2 minutes. Turn the dough out onto a lightly floured surface. With lightly floured hands, knead the dough for 5 minutes (for a visual, watch me do it in the video above). The dough can be a little too heavy for a mixer to knead it, but you can certainly use the mixer on low speed instead. After kneading, the dough should still feel a little soft. Poke it with your finger – if it slowly bounces back, your dough is ready to rise. If not, keep kneading.',
            'Lightly grease a large bowl with oil or nonstick spray– just use the same bowl you used for the dough. Place the dough in the bowl, turning it to coat all sides in the oil. Cover the bowl with aluminum foil, plastic wrap, or a clean kitchen towel. Allow the dough to rise at room temperature for 60-90 minutes or until double in size. (Tip: For the warm environment on a particularly cold day, heat your oven to 150°F (66°C). Turn the oven off, place the dough inside, and keep the door slightly ajar. This will be a warm environment for your dough to rise. After about 30 minutes, close the oven door to trap the air inside with the rising dough. When it’s doubled in size, remove from the oven.)'
        ]
    },
    '土匪雞翼': {
        ingredients:[ '雞翼 (12-15隻)', '黑芝麻少許', '孜然粉 3茶匙', '芫荽粉  ¼茶匙', '五香粉 ½茶匙', '鹽 ¼茶匙', '糖 1茶匙', '紹酒 2茶匙', '生抽（醬油）2茶匙', '老抽 2茶匙', '麻油 1茶匙', '胡椒粉 少許'],
        instructions:['雞翼洗淨，擦乾。', '將所有醃料混合均勻。 加入雞翼，攪拌均勻。 醃製約1小時。 如果醃製過夜會更好吃。', '將焗爐預熱至 200C/390F。 將雞翼放在抹了少許油的烤盤上，不要相互重疊。 放入預熱好的焗爐，烤10分鐘左右。 把雞翼翻過來，繼續烤 8 到 10 分鐘，或者直到雞翼熟透，撒上黑芝麻。', '提示：每個焗爐都有不同的設計，取決於雞翼的大小，可自行調整烘烤時間。']
    }
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
