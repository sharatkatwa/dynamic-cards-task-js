const cars = [
  {
    carName: "Swift",
    carBrand: "Maruti Suzuki",
    carType: "Hatchback",
    engine: "1.2L K-Series Petrol (1197cc)",
    carColors: ["#FFFFFF", "#C0C0C0", "#FF0000", "#0000FF"],
    carImage: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    price: "5.99 - 9.03 Lakh",
    pros: [
      "Fuel efficient engine",
      "Low maintenance cost",
      "Good resale value",
      "Smooth city driving"
    ],
    cons: [
      "Average build quality",
      "Rear seat space is limited",
      "Not many premium features"
    ],
    mileage: "22 - 23 km/l",
    availability: "Available"
  },
  {
    carName: "Hyundai i20",
    carBrand: "Hyundai",
    carType: "Hatchback",
    engine: "1.2L Petrol (1197cc) / 1.0L Turbo Petrol (998cc)",
    carColors: ["#000000", "#1E90FF", "#A9A9A9", "#8B0000"],
    carImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24",
    price: "7.04 - 11.21 Lakh",
    pros: [
      "Premium interior",
      "Feature loaded",
      "Good safety rating",
      "Smooth petrol engine"
    ],
    cons: [
      "Mileage could be better",
      "Costly top variants",
      "Slightly expensive maintenance"
    ],
    mileage: "16 - 20 km/l",
    availability: "Available"
  },
  {
    carName: "Tata Punch",
    carBrand: "Tata",
    carType: "Micro SUV",
    engine: "1.2L Revotron Petrol (1199cc)",
    carColors: ["#FFA500", "#808080", "#2F4F4F", "#FFFFFF"],
    carImage: "https://images.unsplash.com/photo-1626668893632-6f3a4466d45a",
    price: "6.13 - 10.20 Lakh",
    pros: [
      "5-star Global NCAP safety",
      "High ground clearance",
      "Strong build quality",
      "Compact SUV feel"
    ],
    cons: [
      "Engine feels underpowered",
      "AMT gearbox not very smooth",
      "Average highway performance"
    ],
    mileage: "20 - 21 km/l",
    availability: "Available"
  },
  {
    carName: "Kia Sonet",
    carBrand: "Kia",
    carType: "Compact SUV",
    engine: "1.2L Petrol / 1.0L Turbo Petrol / 1.5L Diesel",
    carColors: ["#000000", "#FF4500", "#C0C0C0", "#FFFFFF"],
    carImage: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
    price: "7.99 - 14.89 Lakh",
    pros: [
      "Stylish design",
      "Multiple engine options",
      "Ventilated seats (top variant)",
      "Premium features"
    ],
    cons: [
      "Rear seat space limited",
      "Expensive higher variants",
      "Suspension slightly stiff"
    ],
    mileage: "18 - 24 km/l",
    availability: "Available"
  },
  {
    carName: "Mahindra Thar",
    carBrand: "Mahindra",
    carType: "Off-road SUV",
    engine: "2.0L mStallion Turbo Petrol / 2.2L mHawk Diesel",
    carColors: ["#000000", "#006400", "#8B4513", "#FFFFFF"],
    carImage: "https://images.unsplash.com/photo-1625047509168-a7026f36de04",
    price: "10.98 - 16.94 Lakh",
    pros: [
      "Excellent off-road capability",
      "Strong road presence",
      "Powerful engine options",
      "Convertible roof option"
    ],
    cons: [
      "Not very fuel efficient",
      "Limited boot space",
      "Ride quality stiff in city"
    ],
    mileage: "15 - 18 km/l",
    availability: "Available"
  }
];

let card_page= document.querySelector('.card-page')
sum = ''
cars.forEach((elem)=>{
    console.log(elem)
    sum += `  <div class="card-container">
                <div class="card-img"><img src="${elem.carImage}" alt=""></div>
                <div class="card-content">
                    <div class="top">
                        <h2>${elem.carName} <span>(${elem.carType})</span></h2>
                        <h3>${elem.carBrand}</h3>
                    </div>
                    <div class="mid">
                        <p>Engine: ${elem.engine}</p>
                        <p>Mileage: ${elem.mileage}</p>
                        <div class="colors">
                            <div style=" background-color=${elem.carColors[0]}" class="color color1"></div>
                            <div style=" background-color=${elem.carColors[1]}" class="color color2"></div>
                            <div style=" background-color=${elem.carColors[2]}" class="color color3"></div> +2
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="pros">
                            <h4>Pros.</h4>
                            <div>
                                <p>${elem.pros[0]}</p>
                                <p>${elem.pros[1]}</p>
                                <p>${elem.pros[2]}</p>
                            </div>
                        </div>
                        <div class="cons">
                            <h4>cons.</h4>
                            <div>
                                <p>${elem.cons[0]}</p>
                                <p>${elem.cons[1]}</p>
                                <p>${elem.cons[2]}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>`
})


card_page.innerHTML = sum