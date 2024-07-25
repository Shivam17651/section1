const user ={
    name : 'Raju',
    email : 'raju@gmail.com',
password : 'abc123'
};

console.log(user.email);
console.log(user ['name']);

user .email = 'raju007@gmail.com';

console.log(user);

user.address='alambagh'
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand ='Samsung';
const model ='S24';
const price =105000;
const colors =['red','black','white'];

const smartphone ={brand,model,price, colors};
console.log(smartphone);

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors.push ('blue');
console.log(smartphone);



smartphone.colors[2]='moonwhite';
console.log(smartphone);


const smartphones =[
    {
        brand:'Samsung',
        model:'S24',
        price:105000,
        colors:['red','black','white']
    },
    {
        brand:'OnePlus',
        model:'12',
        price:44999,
        colors:['green','grey']
    },
    {
        brand:'Apple',
        model:'  Iphone 15',
        price:125000,
        colors:['black','white']
    },
    {
        brand:'Google',
        model:'Pixel 8',
        price:56000,
        colors:['red','blue','white']
    },
    {
        brand:'Motorola',
        model:'G8',
        price:14999,
        colors:['blue','green']
    },
]
// 1.access the price of apple iphone
//2.access the last price of google pixel

console.log(smartphones[2].price);
console.log(smartphones[3].colors.at(-1));

const myphones =smartphones.filter ((phone)=> {return phone.price <= 50000});
console.log(myphones);

// filter all samsung phones
const query ='s';

const myphones1 =smartphones.filter ((phone)=>{return phone.brand.toLowerCase().includes (query.toLowerCase())});
console.log(myphones1);

//filter all phones with white color
const query1 ="white"
const whitephones=smartphones.filter((phone)=>{return phone.colors.toString().includes (query1.toString() )})
console.log(whitephones)