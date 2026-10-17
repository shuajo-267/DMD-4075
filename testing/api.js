const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const divSection = document.getElementById("div-section");

const url = new URL('https://www.themealdb.com/api/json/v1/1/search.php?');

searchBtn.addEventListener("click", async () => {
    let textInput = searchBar.value;
    url.searchParams.append("s", `${textInput}`);
    // console.log(url.toString());
    // console.log(textInput.toString());

    try {
        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error
        }
        const data = await response.json();

        data.meals.forEach((item) => {
            const newDiv = document.createElement("div");
            const foodTitle = document.createElement("h2");
            const foodCountry = document.createElement("h3");
            const foodThumb = document.createElement("img");

            foodTitle.innerHTML = item.strMeal;
            foodCountry.innerHTML = item.strCountry;
            foodThumb.src = item.strMealThumb;
            foodThumb.alt = `Photo of ${foodTitle}`;

            newDiv.append(foodTitle, foodCountry, foodThumb);
            divSection.appendChild(newDiv);

            console.log(foodTitle.innerHTML);
        })
        
        // console.log(JSON.stringify(data.meals[0].strMeal));
        // console.log(JSON.stringify(data.meals[0].strCountry));
        // console.log(JSON.stringify(data.meals[0].strInstructions));

    } catch(error) {
        console.error("Error:", error);
    }
});

// async function fetchCampsite(query) {
//     const url = "https://ridb.recreation.gov/api/v1/campsites";

//     try {
//         const response = await fetch(url);
    
//         if (!response.ok) {
//             throw new Error
//         }
//         data = await response.json();
//     } catch(error) {
//         console.error("Error: Failed to fetch data", error);
//     }
// };

// fetchCampsite();