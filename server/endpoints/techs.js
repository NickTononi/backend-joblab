const faker                   = require('faker');
const _                       = require('lodash');
const moment                  = require('moment');
const currencies              = require('../utils/currencies');


const techsEndpoint = () => {
    let techs = [];

    for (let i = 0; i < 15; i++) {    
        techs.push({
            id: faker.datatype.uuid(),
            name: `${faker.company.companyName(0)} ${faker.random.arrayElement(['computer', 'laptop', 'notebook', 'keyboard', 'mouse', 'screen', 'desktop'])} ${faker.commerce.color()}`,
            shortDescription: faker.lorem.paragraph(),
            longDescription: faker.lorem.paragraphs(),
            price: faker.commerce.price(150, 300, 2, '€'),
            // https://placeimg.com/640/480/tech
            image: 'https://placeimg.com/'+faker.datatype.number({ min: 300, max: 400 })+'/'+faker.datatype.number({ min: 300, max: 400 })+'/tech'
        });
    }

    return techs;
};

module.exports = techsEndpoint();