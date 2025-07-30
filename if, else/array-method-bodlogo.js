// Нэг л products массив дээр ажиллана


// // 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
// function getDiscountedProducts(products) {
//   // ...
// }

// // 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getOutOfStockProducts(products) {
//   // ...
// }

// // 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getExpensiveProducts(products) {
//   // ...
// }

// // 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getComputers(products) {
//   // ...
// }

// // 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
// function filterByBrand(products, brandName) {
//   // ...
// }

// // 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
// function addIsHeavyFlag(products) {
//   // ...
// }

// // 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
// function increasePriceByTenPercent(products) {
//   // ...
// }

// // 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
// function addFinalPrice(products) {
//   // ...
// }

// // 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
// function getTopRatedProduct(products) {
//   // ...
// }

// // 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
// function getCheapestProduct(products) {
//   // ...
// }

// // 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
// function getTotalStock(products) {
//   // ...
// }

// // 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
// function getTotalPrice(products) {
//   // ...
// }

// // 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function filterBySupplier(products, supplierName) {
//   // ...
// }

// // 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
// function getProductNames(products) {
//   // ...
// }

// // 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
// function sortByPriceAscending(products) {
//   // ...
// }

// // 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
// function getLowStockProducts(products) {
//   // ...
// }

// // 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
// function getUniqueSuppliers(products) {
//   // ...
// }

// // 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
// function getNameAndPriceList(products) {
//   // ...
// }

// // 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
// function getHighlyRatedProducts(products) {
//   // ...
// }

// // 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
// function addIdToProducts(products) {
//   // ...
// }

let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];


//Bodlogo1 

const getDiscountedProducts1 = (products) =>{
    const DiscountedProducts = products.filter((product)=> {
      return product.discountPercent > 0 
    })
    return DiscountedProducts;

}
console.log(getDiscountedProducts1(data))


console.log("=================")

//bodlogo2

const getOutOfStockProducts = (products) => {
  const OutOfStock = products.filter((product)=>{
    return product.stock ==0 

  })
  return OutOfStock

}
console.log(getOutOfStockProducts(data))


console.log("====================")

//boldogo3

const getExpensiveProducts = (products, une) => {
  const ExpensiveProducts = products.filter((product)=>{
    return product.price > une
  })
  return ExpensiveProducts
}
console.log(getExpensiveProducts(data, 1000000))

console.log("=========================")

//bodlogo4 

const getComputers= (products, com) => {
  const Computers1 = products.filter((product)=>{
    return product.category == com
  })
  return Computers1
}
console.log(getComputers(data, "Computers"))


console.log("=========================")


//boldogo5 
const filterByBrand = (products, brandName) =>{
  const FindBrand = products.filter((product)=>{
    return product.brand ==brandName
    
  })
  return FindBrand;
}
console.log(filterByBrand(data, "Apple"))

console.log("=============================")

//bodlogo6
const addIsHeaveFlag = (products) => {
     products.map((product)=>{
    if (product.weight > 1)
    {
      product.isheavy = true ;
    } else {
      product.isheavy = false;
    }

  })
  return products;
}
console.log("6",addIsHeaveFlag(data))

//bodlogo7

const increasePriceByTenPercent = (products) => {
  const TenPercent = products.map((product)=>{
     return {...product,
     price: product.price + (product.price/100 *10)}
    
  })
  return TenPercent;
}
console.log("7",increasePriceByTenPercent(data))

//bodlogo8





const addFinalPrice= (products) =>{
  const newData = products.map((product) => {
    const finalPrice = product.price - (product.price / 100 * product.discountPercent);
    return {...product,
      finalprice1: product.finalPrice = finalPrice}
  })
  return newData
}
console.log(addFinalPrice(data))

//bodlogo9 
 const getTopRatedProduct= (products) => {
    let max = products[0];

   products.filter((product)=>{
    if (product.rating> max.rating) {
      max = product
    }
   })
   return max;
 }
 console.log("9",getTopRatedProduct(data))

 //bodlogo10 

 const getCheapestProduct= (products) =>{
  let minprice = products[0];
    products.filter((product)=>{
      if(product.price < minprice.price) {
        minprice = product
      }
    })
    return minprice

    
 }

 console.log("10", getCheapestProduct(data))

 //bodlogo11 
 const  getTotalStock= (products) =>{
   let totalstock = 0;
   products.forEach((product)=>{
      totalstock = totalstock + product.stock
   })
   return totalstock
   }
   console.log(getTotalStock(data))

   //bodlogo12
 

  
    
 
 