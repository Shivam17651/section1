n=4

sqrt= Math.sqrt(n)

if(sqrt*sqrt === n){
    console.log('perfect square')
}else{
    console.log('not perfect square ')
}


// printl fibonacci series
let [a,b]=[0,1];
console.log(a);
console.log(b);

for(let i=0; i<8; i++){
    let c = a+b;
    console.log(c);
    // a=b;
    // b=c;

    [a,b]=[b,c];

}

