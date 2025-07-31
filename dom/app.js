let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// let carNamePtags = "";

const carListDiv = document.getElementById("car-list");
let carNamePtags = "";

cars.map((car) => {
  let yesOrNo = "";
  if (car.isAvailable) {
    yesOrNo = "Yes";
  } else {
    yesOrNo = "No";
  }
  carNamePtags = carNamePtags + '<div class="card">';
  carNamePtags = carNamePtags + '<div class="card-title">';
  carNamePtags = carNamePtags + '<p class="carName">' + car.model + "</p>";
  carNamePtags = carNamePtags + '<p class="carYear">' + car.year + "</p>";
  carNamePtags = carNamePtags + "</div>";
  carNamePtags =
    carNamePtags + '<p class="carPrice">' + car.price + " ₮" + "</p>";
  //<img src="https://media.dealervenom.com/jellies/Toyota/Prius%20Prime/C444587_089_Back.png?auto=compress%2Cformat" alt="">
  carNamePtags =
    carNamePtags +
    '<img class="carImage" src="' +
    "https://www.vdm.ford.com/content/dam/na/ford/en_us/images/ranger/2025/jellybeans/Ford_Ranger_2025_300A_PE7_88B_89H_76E_16E_CAB_64H_RWD_99H_XLT_DEFAULT_EXT_4_002.png" +
    '">';
  carNamePtags = carNamePtags + '<div class="card-description">';
  carNamePtags =
    carNamePtags + '<p class="carMileage">' + car.mileage + "km" + "." + "</p>";
  //   carNamePtags = carNamePtags + '<p class="carYear">' + car.year + "." + "</p>";
  carNamePtags =
    carNamePtags + '<p class="carSupplier">' + car.supplier + "." + "</p>";
  carNamePtags =
    carNamePtags + '<p class="carColor">' + car.color + "." + "</p>";
  carNamePtags = carNamePtags + '<p class="carType">' + car.type + "." + "</p>";
  carNamePtags =
    carNamePtags +
    '<p class="carEngineSize">' +
    "Engine: " +
    car.engineSize +
    "." +
    "</p>";
  carNamePtags =
    carNamePtags +
    '<p class="carAvailability">' +
    "Availability: " +
    yesOrNo +
    "." +
    "</p>";
  carNamePtags =
    carNamePtags +
    '<p class="carFuelEfficiency">' +
    car.fuelEfficiency +
    " L" +
    "." +
    "</p>";
  carNamePtags = carNamePtags + "</div>";
  carNamePtags = carNamePtags + "</div>";
});

console.log(carNamePtags);
carListDiv.innerHTML = carNamePtags;
