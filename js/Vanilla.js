'use strict';
let nameTxt;
let imageItem;
let releaseTxt;
let allDataArr=[];


function MovieConstrctor(_name, _image, _release) {
  this.name = _name;
  this.image = _image;
  this.release = _release;
  //MovieConstrctor.itemsArr.push(this);
}

//MovieConstrctor.itemsArr=[];
MovieConstrctor.prototype.renderItems=function(){
  const movieTable=document.getElementById('movieTable');
  const trElement= document.createElement('tr');
  movieTable.appendChild(trElement);
  let tdElement= document.createElement('td');
  tdElement.textContent='logo';
  trElement.appendChild(tdElement);

  let td1Element= document.createElement('td');
  td1Element.textContent=this.name;
  trElement.appendChild(td1Element);

  let td2Element= document.createElement('td');
  td2Element.textContent=this.image;
  trElement.appendChild(td2Element);

  let td3Element= document.createElement('td');
  td3Element.textContent=this.release;
  trElement.appendChild(td3Element);


};
function storeDataLS(){
  // console.log(nameTxt,imageItem,releaseTxt);
  allDataArr.push([nameTxt,imageItem,releaseTxt]);
  localStorage.setItem('movieList',JSON.stringify(allDataArr));


}
function getDataLS(){

  if(localStorage.getItem('movieList'))
  {
    allDataArr= JSON.parse(localStorage.getItem('movieList'));
    let movieObj= new MovieConstrctor(allDataArr[allDataArr.length-1][0],allDataArr[allDataArr.length-1][1],allDataArr[allDataArr.length-1][2]);
    movieObj.renderItems();
  }
  else{
    let movieObj= new MovieConstrctor(nameTxt,imageItem,releaseTxt);
    movieObj.renderItems();
  }


}

function renderAllData(){
  if(localStorage.getItem('movieList'))
  {
    const movieTable=document.getElementById('movieTable');
    allDataArr= JSON.parse(localStorage.getItem('movieList'));

    // console.log(allDataArr.length);
    for(let i=0; i<allDataArr.length; i++){
     
      let trElement= document.createElement('tr');
     
      movieTable.appendChild(trElement);

      let tdElement= document.createElement('td');
      tdElement.textContent='logo';
      trElement.appendChild(tdElement);

      let td1Element= document.createElement('td');
      td1Element.textContent=allDataArr[i][0];
      trElement.appendChild(td1Element);

      let td2Element= document.createElement('td');
      td2Element.textContent=allDataArr[i][1];
      trElement.appendChild(td2Element);

      let td3Element= document.createElement('td');
      td3Element.textContent=allDataArr[i][2];
      trElement.appendChild(td3Element);


    }

  }


}
function clearFunction(){
  if(allDataArr.length)
  {
    allDataArr.pop();
  }
  localStorage.removeItem('movieList');
}

renderAllData();
const movieform = document.getElementById('movieForm');
movieform.addEventListener('submit', renderHandler);
function renderHandler(_event) {
  _event.preventDefault();
  nameTxt= _event.target.txtName.value;
  imageItem= _event.target.listImages.value;
  releaseTxt= _event.target.txtRelease.value;

  storeDataLS();
  getDataLS();
  movieform.reset();

}
