//Code Runner

let addNum = (array) => {
  var answer = 0
  for (var i = 0; i < array.length; i++) {
    answer += Number(array[i])
  }

  return answer
}

console.log(addNum([1, 2, 3, 4]))
