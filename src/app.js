console.log("Started App");

let bodyTable = document.getElementById('bodyTable');
let bodyTableContent = '';
let arrayBooks = [];
let jsonBooks = JSON.stringify(arrayBooks);

function readJSONFile(){

//------------ Read JSON File ----------------------------
fetch('src/books.json').then(response => response.json())
  .then(data => {
    for (let i=0; i<data.length; i++){
      bodyTableContent = bodyTableContent + `
      <tr>
      <td>${data[i].ID}</td>
      <td>${data[i].TITLE}</td>
      <td>${data[i].AUTHOR} </td>
      <td>${data[i].GENERE}</td>
      <td>${data[i].PAGES}</td>
      <td>${data[i].STATUS}</td>
      </tr>`;
      bodyTable.innerHTML = bodyTableContent;
    };
    arrayBooks = data;
    jsonBooks = JSON.stringify(arrayBooks);
    

  })
//----------------------------------------------------------
}
//readJSONFile();

function creaFun(){
  
  title = prompt("\nBook Title: ");
  author = prompt("\nBook Author: ")
  genere = prompt("\nBook Genere: ");
  pages = prompt("\nBook Pages: ");
  state = prompt("\nStatus: ");
  id = arrayBooks.length + 1;
  const newBook = {ID:id, TITLE:title, AUTHOR:author, GENERE:genere, PAGES:pages, STATUS:state};
  arrayBooks.push(newBook);
  jsonBooks = JSON.stringify(arrayBooks);
  
  bodyTableContent = '';
  for (let i=0; i<arrayBooks.length; i++){
    bodyTableContent = bodyTableContent + `
    <tr>
    <td>${arrayBooks[i].ID}</td>
    <td>${arrayBooks[i].TITLE}</td>
    <td>${arrayBooks[i].AUTHOR} </td>
    <td>${arrayBooks[i].GENERE}</td>
    <td>${arrayBooks[i].PAGES}</td>
    <td>${arrayBooks[i].STATUS}</td>
    </tr>`;
    bodyTable.innerHTML = bodyTableContent;
  };
}

function upFun(){
  //console.log("Updating...");
  window.alert("Updating...");
}

function delFun(){
  //console.log("Deleting...");
  window.alert("Deleting...");
}

function loadFun(){
  //console.log("Reading...");
  window.alert("Load File Books\n");
  bodyTableContent = '';
  readJSONFile();
}

function saveFun(){
  //console.log("Reading...");
  window.alert("Saved All Books\n" + jsonBooks);
}
