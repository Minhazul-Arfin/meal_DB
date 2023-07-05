const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}


const displayMeals = meals => {
    // console.log(meals);
    // STEP 1: CONTAINER ELEMENT
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        // console.log(meal)

        // STEP 2: CREATE CHILD FOR EACH ELEMENT
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        // STEP 3: SET CONTENT OF THE CHILD
        mealDiv.innerHTML = `
        <div class="card">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
        `

        // STEP 4: APPEND CHILD
        mealsContainer.appendChild(mealDiv);

    })
}

loadMeals();