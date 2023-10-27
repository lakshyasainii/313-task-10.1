import { faker } from '@faker-js/faker';

const custList =[
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1}),
        "author": faker.person.firstName()
    },
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1}),
        "author": faker.person.firstName()
    },
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1}),
        "author": faker.person.firstName()
    },
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.fullName(),
        "position" : faker.person.jobTitle(),
        "rating": "⭐" + faker.number.float({min: 1, max: 5, precision: 0.1}),
        "author": faker.person.firstName()
    }
]

export default custList