const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}


const displayMeals = meals => {
    console.log(meals[0]);
    // STEP 1: CONTAINER ELEMENT
    const mealsContainer = document.getElementById('meals-container');

    // CLREARING PREVIOUS VALUE
    mealsContainer.innerText = '';

    meals.forEach(meal => {
        // console.log(meal.idMeal)

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
                                <button 
                                onclick="loadMealDetails(${meal.idMeal})"
                                type="button" class="btn btn-primary" data-bs-toggle="modal" 
                                data-bs-target="#mealDetails">
                                Show Details
                                </button>
                        </div>
                        
                    </div>
        `

        // STEP 4: APPEND CHILD
        mealsContainer.appendChild(mealDiv);

    })
}


// SEARCH METHOD
const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}


// SHOW DETAILS
const loadMealDetails = mealId => {
    console.log("details button clicked")
    console.log(mealId)

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}


const displayMealDetails = meal => {
    // setting modal title
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.innerText = meal.strMeal;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}"> 
        <h3> Instructions<br></h3>
        <h6>${meal.strInstructions}</h6>
        <h5> Press the <a href="${meal.strYoutube}" target="_blank">Link</a> for Turorial Video</h5>
        <h5> For more instructions, press the <a href="${meal.strSource}" target="_blank">Link</a></h5>
    `
    // <img class="img-fluid" src="${meal.strMealThumb}">
    console.log(meal);
}


// LOADMEALS CALLED BY 'FISH' AS DEFAULT VALUE
loadMeals('beef');