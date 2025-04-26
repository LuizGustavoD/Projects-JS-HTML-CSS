const basalForm = document.getElementById("basalForm");
const userHeight = document.getElementById("height");
const userWeight = document.getElementById("weight");
const userAge = document.getElementById("age");
const userGender = document.getElementById("gender");
const activityLevel = document.getElementById("activityLevel");

basalForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  if (isNaN(userHeight.value) || isNaN(userWeight.value) || isNaN(userAge.value)) {
    alert("Please enter valid numeric values for height, weight, and age.");
    return;
  }

  if (userHeight.value <= 0 || userWeight.value <= 0 || userAge.value <= 0) {
    alert("Height, weight, and age must be positive numbers.");
    return;
  }

  if (!userGender.value || (userGender.value !== "male" && userGender.value !== "female")) {
    alert("Please select a valid gender.");
    return;
  }

  if (!activityLevel.value || !["sedentary", "light", "moderate", "active", "veryActive"].includes(activityLevel.value)) {
    alert("Please select a valid activity level.");
    return;
  }
  let bmr;
  const height = parseFloat(userHeight.value);
  const weight = parseFloat(userWeight.value);
  const age = parseInt(userAge.value, 10);
  const gender = userGender.value;
  const activity = activityLevel.value;
  if (gender === "male"){
    bmr = (10*weight) + (6.25*height) - (5*age) + 5;
  }else{
    bmr = (10*weight) + (6.25*height) - (5*age) - 161;
  }
  switch (activity) {
    case "sedentary":
      bmr *= 1.2;
      break;
    case "light":
      bmr *= 1.375;
      break;
    case "moderate":
      bmr *= 1.55;
      break;
    case "active":
      bmr *= 1.725;
      break;
    case "veryActive":
      bmr *= 1.9;
      break;
  }
  const result = document.getElementById("finalResult");
  result.innerHTML = `Your daily caloric needs are approximately ${Math.round(bmr)} calories.`;
});


  