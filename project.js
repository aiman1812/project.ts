///Assingment of Object///
//oject to object
var personinfo = {
    person: {
        Name: "Aiman",
        Age: 30,
        Surname: "Tanveer",
        location: {
            country: "Pakistan",
            city: "Karachi"
        },
    }
}, personinfo1 = {
    person: {
        Name: "Khalid",
        Age: 35,
        Surname: "Iqabal",
        location: {
            country: "Pakistan",
            city: "lahore"
        },
    }
};
console.log(personinfo, personinfo1);
console.log(personinfo.person.Surname);
console.log(personinfo1.person.location.city);
// object to aary
var products = {
    Items: "Mobile",
    brand: [['Iphone'], ['samsung'], ['hawaei'], ['nokia'], ['LG'], ['Motorolla']],
    specification: "the mobile phone is smartphone made by that combines a computer'digitalcamera'and cellular phone into one device with atouchscreen interface ",
    isavailable: true,
};
console.log(products);
console.log(products.Items[0], 'the IPhone is the best smartphone techonolgy!');
// Nested object
var Resturant = {
    Resturantname: "Lalqila",
    Menu: ['prawns tempura', 'fried fish', 'golgappy', 'BBQitems', 'chinnes', '20+salads', '20+deserts'],
    dinnertimming: "8o'clock",
    perhead: 2500,
    location: {
        street: 'shahrah-e-faisal',
        city: 'Karachi',
        country: 'Pakistan',
    }
};
console.log(Resturant);
console.log('i recently visited', Resturant.Resturantname);
console.log('its located', Resturant.location.street);
