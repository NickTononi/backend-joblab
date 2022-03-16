const faker                   = require('faker');
const _                       = require('lodash');
const moment                  = require('moment');
const currencies              = require('../utils/currencies');


const clothesEndpoint = () => {
    let clothes = [];

    for (let i = 0; i < 15; i++) {    
        let n = `${faker.random.arrayElement(['shirt', 'skirt', 'gloves', 'trousers', 'jeans', 'belt', 'shoes'])}`;
        clothes.push({
            id: faker.datatype.uuid(),
            name: `${faker.commerce.color()} ${n}`,
            shortDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            price: faker.commerce.price(10, 150, 2, '€'),
            // https://loremflickr.com/320/240/clothes
            image: 'https://loremflickr.com/'+faker.datatype.number({ min: 300, max: 400 })+'/'+faker.datatype.number({ min: 300, max: 400 })+'/clothes,'+`${n}`
        });
    }

    return clothes;
};

module.exports = clothesEndpoint();