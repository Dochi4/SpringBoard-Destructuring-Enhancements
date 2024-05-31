

const teaOrder= {
    price:12.99,
    quantity:3,
    teaName:"winder sprout",
    brewTemp: 180
};

const {brewTemp: temp = 175} = teaOrder;

const {teaName: tea} = teaOrder; 

function checkOut(tea){
    const{quantity=1,price}=tea;
    return quantity *price
}
checkOut(teaOrder);

const order1= {
    price:10.99,
    teaName:"winder sprout",
    brewTemp: 180
};

function checkOut2({quantity: qty=1,price,}){
    return qty *price
}