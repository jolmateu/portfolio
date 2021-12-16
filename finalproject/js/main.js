function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide")
}


function getIngredient(){
    let ingredientVal = document.querySelector('#ingredient').value;

    fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + ingredientVal, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key": "7037979c33mshf13fb89a4dc8f08p1666f2jsn805882767f6e"
        }
    })
    .then(response => response.json())

    .then(function (jsonObject) {
        const hints = jsonObject['hints'];
        for (let i = 0; i < hints.length; i++ ){
            if (hints[i].food.image > "a"){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let calories = document.createElement('h3');
                let protein = document.createElement('h3');
                let fat = document.createElement('h3');
                let image = document.createElement('img');
                let addBtn = document.createElement('input')
                let delBtn = document.createElement('input')
                h2.textContent = hints[i].food.label;
                calories.textContent = 'Calories: ' + hints[i].food.nutrients.ENERC_KCAL;
                protein.textContent = 'Protein: ' + hints[i].food.nutrients.PROCNT;
                fat.textContent = 'Fat: ' + hints[i].food.nutrients.FAT;
                image.setAttribute('src', hints[i].food.image);
                image.setAttribute('alt', hints[i].food.image);
                addBtn.setAttribute('type', 'button');
                addBtn.setAttribute('id', 'addBtn');
                addBtn.setAttribute('value', 'Add');
                delBtn.setAttribute('type', 'button');
                delBtn.setAttribute('id', 'delBtn');
                delBtn.setAttribute('value', 'Del');
                calories.setAttribute('id', 'cal');
                protein.setAttribute('id', 'pro');
                fat.setAttribute('id', 'fat');

                card.appendChild(h2);
                card.appendChild(image);
                card.appendChild(calories);
                card.appendChild(protein);
                card.appendChild(fat);
                card.appendChild(addBtn);
                card.appendChild(delBtn);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    })

    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

    ingredientVal = 'salmon';
}

document.querySelector('#search').addEventListener('click', getIngredient);