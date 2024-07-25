// print squareof all elements

function printSquares(arr){
    for (let i =0 ;i<arr.length; i++)
    {
        console.log(arr[i] * arr[i]);
    }
}
let numbers =[1,2,3,4,5];
printSquares(numbers);


// wap to print all even numbers in array

function printEvenNumbers (arr) {
    for (let i=0;i< arr.length; i++){
        if (arr[i] % 2 ===0) {
            console.log(arr[i]);
        }
    }
}

let nums =[1,2,3,4,5,6,7,8,9,10];
printEvenNumbers (nums)



// wap to create new array containing 10% discounted pricesfrom an array of prices


function applyDiscount (prices){
    let discountedPrices=[];
    for (let i=0; i<prices.length; i++){
        let discountedPrice = prices[i] * 0.9;
        discountedPrices.push(discountedPrice);
    }
    return discountedPrices;
}

let prices = [100,200,300,400,500];

let discountedPrices=applyDiscount(prices);
console.log(discountedPrices);

//map

const discountedPrices = prices.map ((p)=> {return p*0.9 });
console.log(discountedPrices);

const perfectSquares = price.map ((p) => {return p*p})
console.log(perfect);

// filter

const 

