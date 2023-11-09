console.log("Started App");

let bodyTable = document.getElementById('bodyTable');
let bodyTableContent = '';

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
    jsonBooks = JSON.stringify(data);
  })
//----------------------------------------------------------



function creaFun(){
  //console.log("Creating...");
  //window.alert("Creating...");
  title = prompt("\nBook Title: ");
  autor = prompt("\nBook Author: ")
  genere = prompt("\nBook Genere: ");
  pages = prompt("\nBook Pages: ");
  state = prompt("\nStatus: ");
  alert("New Book Created!!!");

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
