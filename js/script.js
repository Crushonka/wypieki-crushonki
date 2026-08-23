const searchForm = document.querySelector("#recipe-search-form");
const searchInput = document.querySelector("#recipe-search");

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const query = searchInput.value.trim();

        if (query) {
            window.location.href =
                "przepisy.html?szukaj=" + encodeURIComponent(query);
        }

    });

}const params = new URLSearchParams(window.location.search);
const searchQuery = params.get("szukaj");

if (searchQuery) {

    const query = searchQuery.toLowerCase().trim();
    const recipeCards = document.querySelectorAll(".recipe-card");

    let foundAny = false;

    recipeCards.forEach(function (card) {

        const searchText = card.dataset.search.toLowerCase();

        if (searchText.includes(query)) {
            card.style.display = "";
            foundAny = true;
        } else {
            card.style.display = "none";
        }

    });

    if (!foundAny) {

        const recipeList = document.querySelector(".recipe-grid");

        if (recipeList) {
            recipeList.innerHTML = `
                <p class="no-results">
                    Nie znaleziono przepisu pasującego do wyszukiwania.
                </p>
            `;
        }

    }

}const category = params.get("kategoria");

if (category) {

    const recipeCards = document.querySelectorAll(".recipe-card");
    let foundAny = false;

    recipeCards.forEach(function (card) {

        if (card.dataset.category === category) {
            card.style.display = "";
            foundAny = true;
        } else {
            card.style.display = "none";
        }

    });

    if (!foundAny) {

        const recipeList = document.querySelector(".recipe-grid");

        if (recipeList) {
            recipeList.innerHTML = `
                <p class="no-results">
                    W tej kategorii nie ma jeszcze przepisów.
                </p>
            `;
        }
    }
}const headerSearchButton = document.querySelector("#header-search-button");

if (headerSearchButton && searchInput) {

    headerSearchButton.addEventListener("click", function () {

        searchInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(function () {
            searchInput.focus();
        }, 500);

    });

}const recipesSearchForm = document.querySelector("#recipes-search-form");
const recipesSearchInput = document.querySelector("#recipes-search-input");

if (recipesSearchForm && recipesSearchInput) {

    recipesSearchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const query = recipesSearchInput.value.trim();

        if (query) {
            window.location.href =
                "przepisy.html?szukaj=" + encodeURIComponent(query);
        }

    });

}