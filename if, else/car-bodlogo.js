let data = [
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

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
//function getAvailableCars(cars) {
// ...}

const getAvailableCars = (cars) => {
  const AvialableCars = cars.filter((car) => {
    return car.isAvailable == true;
  });
  return AvialableCars;
};
console.log("1", getAvailableCars(data));

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
const getRecentCars = (cars) => {
  const RecentCars = cars.filter((car) => {
    return car.year >= 2018;
  });
  return RecentCars;
};
console.log("2", getRecentCars(data));

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
const getExpensiveCars = (cars) => {
  const ExpensiveCars = cars.filter((car) => {
    return car.price >= 3500000;
  });
  return ExpensiveCars;
};
console.log("3", getExpensiveCars(data));

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
const getSedans = (cars, sed) => {
  const Sedan1 = cars.filter((car) => {
    return car.type == sed;
  });
  return Sedan1;
};
console.log("4", getSedans(data, "Sedan"));

// 5. Брэндээр шүүж буцаадаг функц бич.
const filterByBrand = (cars, brandName) => {
  const filterBrand = cars.filter((car) => {
    return car.brand == brandName;
  });
  return filterBrand;
};
console.log("5", filterByBrand(data, "Toyota"));

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
const getHighMileageCars = (cars) => {
  const Kilo = cars.filter((car) => {
    return car.mileage >= 100000;
  });
  return Kilo;
};
console.log("6", getHighMileageCars(data));

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
const addEfficiencyFlag = (cars) => {
  cars.map((car) => {
    if (car.fuelEfficiency <= 5) {
      car.efficient = true;
    } else {
      car.efficient = false;
    }
  });
  return cars;
};
console.log("7", addEfficiencyFlag(data));

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
const increaseCarPrices = (cars) => {
  const increasePrice = cars.map((car) => {
    return { ...car, price: car.price + (car.price / 100) * 15 };
  });
  return increasePrice;
};
console.log("8", increaseCarPrices(data));

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
const getLowMileageCars = (cars) => {
  const LowMileCars = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return LowMileCars;
};
console.log("9", getLowMileageCars(data));

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
const getMostEfficientCar = (cars) => {
  let bagatulsh = cars[0];
  let MostEfficientCar = cars.filter((car) => {
    if (car.fuelEfficiency < bagatulsh.fuelEfficiency) {
      bagatulsh = car;
    }
  });
  return bagatulsh;
};
console.log("10", getMostEfficientCar(data));

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
const getMostExpensiveCar = (cars) => {
  let ExpensiveCars = cars[0];
  cars.filter((car) => {
    if (car.price > ExpensiveCars.price) {
      ExpensiveCars = car;
    }
  });
  return ExpensiveCars;
};
console.log("11", getMostExpensiveCar(data));

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
const getTotalMileage = (cars) => {
  let totalmileage = 0;
  cars.forEach((car) => {
    totalmileage = totalmileage + car.mileage;
  });
  return totalmileage;
};
console.log("12", getTotalMileage(data));

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
const filterBySupplier = (cars, supplierName) => {
  const FilterSupplier = cars.filter((car) => {
    return car.supplier == supplierName;
  });
  return FilterSupplier;
};
console.log("13", filterBySupplier(data, "AutoJapan"));

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
const getCarModels = (cars) => {
  const CarModels = cars.map((car) => {
    return car.model;
  });
  return CarModels;
};
console.log("14", getCarModels(data));

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
const sortByPriceAscending = (cars) => {
  const PriceAscending = cars.sort((car2, car1) => {
    return car2.price - car1.price;
  });
  return PriceAscending;
};
console.log("15", sortByPriceAscending(data));

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
const getLargeEngineCars = (cars) => {
  const LargeEngineCars = cars.filter((car) => {
    return car.engineSize > 2;
  });
  return LargeEngineCars;
};
console.log("16", getLargeEngineCars(data));

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  // ...
}

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
const getModelAndYearList = (cars) => {
  const ModelAndYear = cars.map((car) => {
    return { model: car.model, year: car.year };
  });
  return ModelAndYear;
};
console.log("18", getModelAndYearList(data));

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
const tagSuperEfficientCars = (cars) => {
  const SuperEfficientCars = cars.filter((car) => {
    if (car.fuelEfficiency < 4) {
      car.tag = "super efficient";
    }
  });
  return cars;
};
console.log("19", tagSuperEfficientCars(data));

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
const addIdToCars = (cars) => {
  const IdCars = cars.map((car, i) => {
    return {
      ...car,
      id: i + 1,
    };
  });
  return IdCars;
};
console.log("20", addIdToCars(data));
