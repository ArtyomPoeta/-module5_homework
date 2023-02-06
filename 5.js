let arr = [1, 3, 5, 24];
//Количество элементов массива
console.log(arr.length);

arr.forEach(function(item, i) {
  console.log( item + " - " + '[' + i + ']');
});

// Выводим третий элемент массива
console.log(arr[2]);