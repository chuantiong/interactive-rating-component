ratingsData = [1, 2, 3, 4, 5]

const ratingsContainer = document.getElementById("ratings-container");
const form = document.getElementById("rating-form");
const ratingComponent = document.getElementById("rating-component");
const tyComponent = document.getElementById("ty-component");
let ratingText = "";

form.addEventListener("submit", e => {
    e.preventDefault();
    setTimeout(() => {
        ratingComponent.classList.add("hide");
    }, 150);
    setTimeout(() => {
        tyComponent.classList.remove("hide");
    }, 500);
});

ratingsContainer.addEventListener("click", e => {
    const rating = e.target.dataset.rating;
    if (rating) {
        handleRatingBtn(e.target);
        ratingText = rating;
        ratingHtml()
    }
});

const handleRatingBtn = (clickedButton) => {
    const ratingButtons = ratingsContainer.querySelectorAll(".component__rating");
    ratingButtons.forEach(button => {
        if (button === clickedButton) {
            clickedButton.classList.add("component__rating--selected");
        } else {
            button.classList.remove("component__rating--selected");
        }
    });
};

const ratingHtml = () => {
    let html =  `
        ${ratingText}
    `;
    document.getElementById("selected-ratings").innerHTML = html;
};

const getRatingBtnHtml = () => {
    let html = "";
    ratingsData.forEach(item => {
        html += `
        <li class="component__rating" data-rating="${item}">${item}</li>
        `;
    })
    return html;
};

const render = () => {
    ratingsContainer.innerHTML = getRatingBtnHtml();
};

render();