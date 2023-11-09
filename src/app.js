console.log("Started App");

const books = [
  {ID:"1", TITLE:"Frontera Oscura", AUTHOR:"Sabino Cabeza", GENERE:"Fiction", PAGES:"315", STATUS:"Finished"},
  {ID:"2", TITLE:"El Poder Del Ahora", AUTHOR:"Toel", GENERE:"Help", PAGES:"200", STATUS:"Waiting"},
  {ID:"3", TITLE:"Time Machine", AUTHOR:"Wells", GENERE:"Fiction", PAGES:"500", STATUS:"Reading"}
]

let titulo = document.getElementById('titles');
let output = '';

for (let i=0; i<books.length; i++){
  output = output + `
  <tr>
  <td>${books[i].ID}</td>
  <td>${books[i].TITLE}</td>
  <td>${books[i].AUTHOR} </td>
  <td>${books[i].GENERE}</td>
  <td>${books[i].PAGES}</td>
  <td>${books[i].STATUS}</td>
  </tr>`;

  titulo.innerHTML = output;
}


function creaFun(){
  //console.log("Creating...");
  //window.alert("Creating...");
  title = prompt("\nBook Title: ");
  autor = prompt("\nBook Author: ")
  title = prompt("\nBook Genere: ");
  title = prompt("\nBook Pages: ");
  title = prompt("\nStatus: ");
  alert("New Book Created!!!");

}
function reaFun(){
  //console.log("Reading...");
  window.alert("Reading...");
}
function upFun(){
  //console.log("Updating...");
  window.alert("Updating...");
}
function delFun(){
  //console.log("Deleting...");
  window.alert("Deleting...");
}
