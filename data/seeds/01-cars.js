// STRETCH
const cars = [
    {
        vin: '3315844833158448',
        make: 'F.A.',
        model: 'Dawn Dragster',
        mileage: 2100,
        title: 'Light',
        transmission: 'Boosted'
    },
    {
        vin: '0676470606764706',
        make: 'F.A.',
        model: 'Dark Dragster',
        mileage: 2100,
        title: 'Dark',
        transmission: 'Hyproded'
    },
    {
        vin: '9344945093449450',
        make: 'F.A.',
        model: 'Hang On Mach',
        mileage: 0,
        title: 'Wind',
        transmission: 'Darklawed'
    },
]

exports.seed = function (knex) {
    return knex('cars')
        .truncate()
        .then(() => {
            return knex('cars').insert(cars)
        })
}