let array = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (array) => {
 return array.slice(0, 2)
};

const returnLastTwoDrivers = (array) => {
    return array.slice (2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (factor) => {
    return function (fare) {
        return fare * factor
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (array, driverSelection) => {
return driverSelection(array);
}



