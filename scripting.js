//lab 1
// let firstName = window.prompt("enter your first name :");
// console.log(firstName);

// let lastName = window.prompt("enter your last name :");
// console.log(lastName);

// let fullName = firstName + lastName ;
// console.log(fullName);
// // if(window.confirm(`your full name is : ${fullName}  ??`)){
// // let birthYear = window.prompt("what is your birth year :");
// // alert( ` welcome mr/mrs ${fullName}  your age is ${2021-birthYear}`);
// // }
// window.confirm(`your full name is : ${fullName}  ??`);
// let birthYear = window.prompt("what is your birth year :");
// alert( ` welcome mr/mrs ${fullName}  your age is ${2021-birthYear}`);

//lab 2
// var ul = document.createElement("ul")
// document.body.append(ul);
// var li = document.createElement(li);
// ul.appendChild(li);
// let name = prompt ('enter your names list :');

// do{
    
//     var ul = document.createElement("ul")
//     document.body.append(ul);
//     var li = document.createElement(li);
//     ul.appendChild(li);
//     let name = prompt ('enter your names list :');
//     name++;


   // another solution :
// do{
//     var ul = document.createElement("ul")
//   document.body.appendChild(ul);
//   var data = prompt ('enter your names list :');
//     console.log(data);
//     if(data !== null ){
//         var item = document.createElement("li");
//         item.innerText = data;
//         ul.appendChild(item);
        
       
//     }
//     else{
        
//         break;
//     }
// }while(true)
 
//another solution :
// var ul = document.createElement("ul")
//    document.body.appendChild(ul);
// for(data !== null;;data++){
//     var data = prompt ('enter your names list :');
//      console.log(data);

//      if(data !== null ){
//         var item = document.createElement("li");
//         item.innerText = data;
//         ul.appendChild(item);
        
       
// }
//     else{
        
// break;
//      }
// }

// lab 3
// step 1 : send request to server
const productList = document.querySelector('#pdtList');
const productUrl = "https://afternoon-falls-30227.herokuapp.com/api/v1/products";

const multiProduct = new XMLHttpRequest();

multiProduct.open ('GET', productUrl);

multiProduct.send ();

// recieving data from server and save it in memory
multiProduct.onload = function (){
  console.log( multiProduct.status);
  if(multiProduct.status === 200){
    const result = JSON.parse(multiProduct.response);
    console.log(result);
    const goods = result.data;
    console.log (goods);
    renderGoods(goods);

  }
 
};
function renderGoods(goods){
  for(let i = 0; i < goods.length ;i ++){
    const product = goods[i];

    const divEle = document.createElement('div');
    divEle.classList.add('co');

    const imgEle= document.createElement('img');
    imgEle.classList.add('mg');
    imgEle.src = product.ProductPicUrl;
   
    const pEle = document.createElement('p');
    pEle.classList.add('pdtDetails');
    pEle.innerText = product.Name;

    divEle.appendChild(imgEle);
    divEle.appendChild(pEle);
    productList.appendChild(divEle);



  }
}


    