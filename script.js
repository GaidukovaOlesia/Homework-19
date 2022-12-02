// Реализовать функцию copy(list) по копированию массива.
//
//     Предусмотреть возможность передачи вторым аргументом функции.
//     При копировании массива – функция применяется к каждому элементу копируемого массива.
// newList = copy(list, function(value){ return value*10; })
debugger;
const arr = [23,2,4,"str",true, 10, function(){},2];
function copy(list, func){
    debugger;
    const copyArr = list.slice();
    if(typeof func === "function"){
        for(let i = 0; i < copyArr.length; i++){
            if(typeof copyArr[i] === "number"){
                copyArr[i] = func(copyArr[i]);
            }
        }
    }
    return copyArr;
}
function multiply(value){
    debugger;
    return value *= 100;
}
console.log(copy(arr, multiply));