//important notes for js.
//*logical AND and logical OR.
function getName ()
{
    return 'Ashok Bohara'
}

let a=true;
let b=false;
console.log(a&&getName())

//*Template Litrals
let Firstname="ashok";
let surname="bohara";
let prefix="Er";
// console.log(prefix+ " "+Firstname + " " +surname);
console.log(`${prefix} ${Firstname} ${surname}`);

//*Ternary Operators

let returnAge =true;
function getAgeInfo(age)
{
    return `This person is ${age} year old`;
}
function getCity()
{
    return 'i am from Nepal';
}

//this is case of ifelse condition checking..

if (returnAge)
    
{
    console.log(getAgeInfo(21))
}
else
{
    console.log(getCity())
}
But in ternary operator we check like..

checking = condition ? statementFortrue : statementForFalse

returnAge ? console.log(getAgeInfo(21)) : console.log(getCity())

//* shorthand property Names

const id =1;
const title='product 1';
const rating =5;

const product=
{
    id,
    title,
    rating
}
console.log(product);


//* Object and array destructuring

const productone=
{
    productName :'productone',
    productDescription : 'product Description'
}

let productName=productone.productName;
let productDescription=productone.productDescription;

const {}=productone
console.log(productName,productDescription);
