
var CarLot = (function (globalScopeCarLot) {
    let _car_inventory = [];
    
    function d () {
        var myJson = this.responseText;
        _car_inventory = JSON.parse(this.responseText);
        showCars(_car_inventory.cars);

      }

  return {
    loadCars: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", d);
        loader.open('GET', 'inventory.json');
        loader.send();
    }
  }
})(CarLot || {});