
let imageList = null
var divId = document.getElementById("main");

const data = () =>{
    let api = fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
              .then(response => response.json())
              .then(json => {
                 imageList = json;
                //  console.log(imageList);
                 imageList.forEach((image,i) => {
                   const innerHtml = htmlContent(image,i);
                   divId.innerHTML = divId.innerHTML + innerHtml;
                   console.log("triggered");
                 });
              } );
      // return imageList;
}

data();
 


var htmlContent = (image,i) =>{
  return `
  <div class="card">
  <img style="width:100%" src="${image.thumbnailUrl}">
  <h4>${image.id}</h4>
  <p class="title">${image.title}</p>
  </div>
  
  `
}


var myFunction =  () =>{
  console.log(imageList)
  var divId = document.getElementById("main");
  divId.innerHTML=`<div></div>`
  var inputValue = document.getElementById("input").value;
  console.log(inputValue);
  var searchedList =  imageList.filter( image =>{
   return image.title.toLowerCase().startsWith(inputValue.toLowerCase());
  })
  console.log("searched list",searchedList);  

  searchedList.forEach((image,i) =>{
    const innerHtml= htmlContent(image,i);
    divId.innerHTML=divId.innerHTML + innerHtml;
  })
}