console.log("Started App");

let bodyTable = document.getElementById('bodyTable');
let bodyTableContent = '';

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
readJSONFile();

function creaFun(){
  
  //console.log("Creating...");
  //window.alert("Creating...");
  title = prompt("\nBook Title: ");
  author = prompt("\nBook Author: ")
  genere = prompt("\nBook Genere: ");
  pages = prompt("\nBook Pages: ");
  state = prompt("\nStatus: ");
  id = arrayBooks.length + 1;
  const newBook = {ID:id, TITLE:title, AUTHOR:author, GENERE:genere, PAGES:pages, STATUS:state};
  arrayBooks.push(newBook);
  alert("New Book Created!!!\n" + JSON.stringify(arrayBooks));
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
function reaFun(){
  //console.log("Reading...");
  window.alert("Reading All Books\n" + jsonBooks);
}
function upFun(){
  //console.log("Updating...");
  window.alert("Updating...");
}
function delFun(){
  //console.log("Deleting...");
  window.alert("Deleting...");
}
