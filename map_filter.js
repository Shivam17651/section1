const nums=[1,4,16,3,36,52,18,17,81]; //wap to create a new array containing only perfectsquaresfrom anotheer array
const perfect =[];

for (let i of nums) {
    if (Number.isInteger (i ** 0.5)) {
        // console.log(i);
        perfect.push(i);
    }
}

console.log(perfect);


const perfectNums =nums.filter ((n) => { return Number .isInteger (n**0.5)});

console.log(perfectNums);

const prices2=['₹423.23', '₹123.452' , '₹678.9' ,'₹999.9982'];
const intPrices =prices2 .map ((p) => {return parseInt(p.slice(1))})
console.log(intPrices);
console.log(parseInt ('₹423.23 ' .slice(1)));
const names= ['ramu' ,'shamu' ,'pinki', 'kaliya'];

// create an array uppercase names
