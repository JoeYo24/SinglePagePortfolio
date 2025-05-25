function SubmitForm() {
    // get form data
    let formName = document.getElementById("name").value;
    console.log(formName);
    // validate form form name
    let formRecommendation = document.getElementById("recommendation").value;
    console.log(formRecommendation);
    if (formName === "" || formRecommendation === "") {
        alert("Please fill out all fields.");
        return;
    }
    // create a new card with the form data
    let newRecommendation = {
        name: formName,
        recommendation: formRecommendation
    };

    // create a new card element
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <div class = "card-body">
        <p class="card-text">"${newRecommendation.recommendation}" - ${newRecommendation.name}</p>
        </div>`;
    //append the card to the recommendations section
    let recommendationsSection = document.getElementById("recommendationCards");
    recommendationsSection.appendChild(card);
    // clear the form
    document.getElementById("name").value = "";
    document.getElementById("recommendation").value = "";   
    // send an alert to the user
    alert("Thank you for your recommendation!");
}
