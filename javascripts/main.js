

function showCars (_car_inventory) {
    let car = document.getElementById('carsMan');
    _car_inventory.forEach(function (item) {
        car.innerHTML += `<div class="row keypress-input"> <p class="col-md-4"> ${item.make} ${item.model}</p> <p class="col-md-4" class="description" id="run">${item.description}</p> <p class="col-md-4">${item.price}  ${item.year}</p></div>`;
let containerEl = document.getElementsByClassName("row");
var t;
for (var i = 0; i < containerEl.length; i++){
  containerEl[i].addEventListener("click", function (event){
      if(event.target.id === 'run'){
      target = event.target;
      }
      this.classList.toggle("dot-border");
      document.getElementById("keypress-input").focus();
   }
  )};
})};



let inputArea = document.getElementById('keypress-input');
inputArea.addEventListener("keyup", function(event){
    target.innerHTML = event.target.value;
});
    

CarLot.loadCars(showCars);
















