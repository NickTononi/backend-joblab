const faker                   = require('faker');
const _                       = require('lodash');
const moment                  = require('moment');
const currencies              = require('../utils/currencies');


const carsEndpoint = () => {
    let cars = [];

    for (let i = 0; i < 15; i++) {    
        let n = `${faker.random.arrayElement(['BMW', 'Audi', 'Mercedes', 'Alfa Romeo', 'Fiat', 'Skoda', 'Renault'])}`;
        cars.push({
            id: faker.datatype.uuid(),
            name: `${faker.commerce.color()} ${n} ${faker.datatype.number({ min: 1980, max: 2022 })}`,
            shortDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            price: faker.commerce.price(1000, 50000, 0, '€'),
            // https://loremflickr.com/320/240/clothes
            image: 'https://loremflickr.com/'+faker.datatype.number({ min: 300, max: 400 })+'/'+faker.datatype.number({ min: 300, max: 400 })+'/car,'+`${n}`
        });
    }

    return cars;
};

module.exports = carsEndpoint();