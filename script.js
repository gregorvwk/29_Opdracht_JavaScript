// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}]

//     const findSpiderMan = (superheroes) => superheroes.find((element) => {
//         return element.name = "Spiderman"
//     })
//     console.log(findSpiderMan(superheroes)) 
//     // Find Spiderman
//     // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// const doubleArrayValues = (array) => array.forEach(element => {
//     console.log(element *= 2)
// });

// doubleArrayValues([1, 2, 3]) 
// const containsNumberBiggerThan10 = (array) => console.log(array.includes(11));

// const containsNumberBiggerThan10 = (array) => console.log(array.some(element => element > 10));

//   containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]); 
  // result should be true
//  containsNumberBiggerThan10([1,2,1,2,1,2]);
  // result should be false


//   const isItalyInTheGreat7 = (array) => console.log(array.includes(("Italy")));

//   isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']);
  // result should be true
let ar2 =[]
tenfold = function(tenfold){
    tenfold.forEach(element =>{
      let array = element * 10;
      ar2.push(array)
      }
    )
    return ar2
}
  console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))

  // result should be [10, 40, 30, 60, 90, 70, 110]


  // const isBelow100 = (array) => array.every(element => {
  //     return element < 100;
  // });
  // console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
  // result should be: false