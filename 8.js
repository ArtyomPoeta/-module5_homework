let ourCars = new Map();

ourCars.set('VW', 'grey');
ourCars.set('Toyota', 'blue');
ourCars.set('Infinity', 'brown');

ourCars.forEach((values, keys) => {
    console.log(`${keys} - x = ${values} - y`);
});
