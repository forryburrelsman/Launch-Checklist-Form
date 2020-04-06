// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault()

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!")
      }
      if (!isNaN(pilotNameInput.value)) {
         alert("Please enter a valid name for Pilot.")
      }
      if (!isNaN(copilotNameInput.value)) {
         alert("Please enter a valid name for Co-pilot.")
      }
      if (isNaN(fuelLevelInput.value)) {
         alert("Please enter a number for Fuel Level.")
      }
      if (isNaN(cargoMassInput.value)) {
         alert("Please enter a number for Cargo Mass.")
      }
      //document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
      document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotNameInput.value} is ready for launch.`;
      if (fuelLevelInput.value < 10000) { 
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch.";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
         document.getElementById("launchStatus").style.color = "red"
      } 
      if (cargoMassInput.value > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Mass too high for launch.";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
      } 
      if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000 ) {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            document.getElementById("launchStatus").style.color = "green";
      } 
      
      }
   );
});

window.addEventListener("load", function() {
   
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget")
       
         missionTarget.innerHTML = `
         
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diamter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">
         
         `

      });
   })
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!

<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
