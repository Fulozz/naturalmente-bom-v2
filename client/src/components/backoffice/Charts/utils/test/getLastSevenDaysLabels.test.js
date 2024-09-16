const getLastSevenDaysLabels = require('../getLastSevenDaysLabels')

test('Return the last seven days',()=>{
    const today = new Date("2024-04-23")
    expect(getLastSevenDaysLabels(today))
    .toEqual(["2024-04-17", "2024-04-18", "2024-04-19", "2024-04-20", "2024-04-21", "2024-04-22", "2024-04-23"])
})
