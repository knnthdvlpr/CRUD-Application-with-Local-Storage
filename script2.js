//Global Variable
var row = null;


//Input Data
function Submit() {
    var inputData = retrieveData();
    var readData = readingDataFromLocalStorage(inputData);
    if(inputData == false){
        msg.innerHTML = "Please Complete the Fields "
    }
    else { 
    if(row == null) {
      insert(readData);
      msg.innerHTML = "Data Inserted";
     } else {
      update();
      msg.innerHTML = "Data Updated";
     } 
    }


//Reset the fields after input 
    document.getElementById("form").reset();
}

   

//CREATE
function retrieveData() {
    var productName = document.getElementById("productName").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;

    var arr = [productName, description, price];
    if(arr.includes("")){
         return false }
    else { 
        return arr; 
    }
}

//READ
//Storing data 
function readingDataFromLocalStorage(inputData) {

    //storing data in Local Storage
    var n = localStorage.setItem("Product Name", inputData[0]);
    var d = localStorage.setItem("Description", inputData[1]);
    var p = localStorage.setItem("Price", inputData[2]);

    //getting values from local to table
    var n1 = localStorage.getItem("Product Name", n);
    var d1 = localStorage.getItem("Description", d);
    var p1 = localStorage.getItem("Price", p);

    var arr = [n1,d1,p1];
    return arr;
}

//INSERT
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = "<button onclick = edit(this)>Edit</button><button onclick = remove(this)>Delete</button>";
}

//EDIT 
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("productName").value = row.cells[0].innerHTML;
    document.getElementById("description").value = row.cells[1].innerHTML;
    document.getElementById("price").value = row.cells[2].innerHTML;
}


//UPDATE
function update() {
    row.cells[0].innerHTML = document.getElementById("productName").value;
    row.cells[1].innerHTML = document.getElementById("description").value;
    row.cells[2].innerHTML = document.getElementById("price").value;
    row = null;
}


//DELETE
function remove(td) {
    var ans = confirm("Are you sure you want delete this record?")
    if(ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        deleteRow(); 
    }
}


