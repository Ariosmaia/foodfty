const recipes = document.querySelectorAll('.recipe');
const showIngredients = document.querySelector('.show-ingredients');
const showPreparation = document.querySelector('.show-preparation');
const showInformation = document.querySelector('.show-information');

const ingredientsList = document.querySelector('.ingredients-list');
const preparationList = document.querySelector('.preparation-list');
const information = document.querySelector('.information p');

for (let recipe of recipes) {
	recipe.addEventListener("click", function () {
		const recipeId = recipe.getAttribute("id");
		window.location.href = `/recipe-detail/${recipeId}`
	});
}

showIngredients.addEventListener("click", function () {
	const show = showIngredients.innerHTML;
	if(show === "MOSTRAR") {
		ingredientsList.classList.remove('hidden-ingredients');
		showIngredients.innerHTML = 'ESCONDER';
	} else {
		ingredientsList.classList.add('hidden-ingredients');
		showIngredients.innerHTML = 'MOSTRAR';
	}
});

showPreparation.addEventListener("click", function () {
	const show = showPreparation.innerHTML;
	if(show === "MOSTRAR") {
		preparationList.classList.remove('hidden-preparation');
		showPreparation.innerHTML = 'ESCONDER';
	} else {
		preparationList.classList.add('hidden-preparation');
		showPreparation.innerHTML = 'MOSTRAR';
	}
});

showInformation.addEventListener("click", function () {
	const show = showInformation.innerHTML;
	if(show === "MOSTRAR") {
		information.classList.remove('hidden-info');
		showInformation.innerHTML = 'ESCONDER';
	} else {
		information.classList.add('hidden-info');
		showInformation.innerHTML = 'MOSTRAR';
	}
});
