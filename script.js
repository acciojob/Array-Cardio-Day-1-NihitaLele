// 1. Filter the list of inventors for those who were born in the 1500's
export function myfilter() {
    return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
}

// 2. Give us an array of the inventor first and last names (i.e. full name)
export function map() {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
}

// 3. Sort the inventors by birthdate, oldest to youngest
export function sort() {
    return inventors.slice().sort((a, b) => a.year - b.year);
}

// 4. How many years did all the inventors live?
export function reduce() {
    return inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
}

// 5. Sort the inventors by years lived
export function sortbylived() {
    return inventors.slice().sort((a, b) => {
        const aLived = a.passed - a.year;
        const bLived = b.passed - b.year;
        return bLived - aLived;
    });
}

// 6. Sort the people alphabetically by last name
export function sortByLastName() {
    return people.slice().sort((a, b) => {
        const [aLast] = a.split(', ');
        const [bLast] = b.split(', ');
        return aLast.localeCompare(bLast);
    });
}

// 7. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

export function reducedSum() {
    return data.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    }, {});
}
