var Tidx = 0;

function TabularForm() {


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var Phone = document.getElementById('Phone').value;
    var Images = document.getElementById('Images').files[0];


    if (name&&email&&Phone&&Images) {
        var tableElement = document.getElementById('table');

        var trElement = document.createElement('tr');
        var tbodyElement = document.createElement('tbody');
        var nameEle = document.createElement('td');
        var emailEle = document.createElement('td');
        var PhoneEle = document.createElement('td');
        var ImagesEle = document.createElement('img');
        var buttonEle = document.createElement('button');

        var rowIdx = Tidx++;




        nameEle.innerHTML = name;
        emailEle.innerHTML = email;
        PhoneEle.innerHTML = Phone;
        ImagesEle.src = window.URL.createObjectURL(Images);
        buttonEle.innerHTML = "Delete"
        buttonEle.onclick = function () {
            DeleteRow(rowIdx);
        }

        trElement.setAttribute('id', rowIdx);
        trElement.append(nameEle);
        trElement.append(emailEle);
        trElement.append(PhoneEle);
        trElement.append(ImagesEle);
        trElement.append(buttonEle)


        tbodyElement.append(trElement);

        tableElement.append(tbodyElement);




    }

}

function DeleteRow(rowIdx) {
    alert(rowIdx)
    document.getElementById(rowIdx).remove();
}


let plusOne = Function("n", "return n + 1;");
console.log(plusOne(40))


//         function DeleteForm(){
//              var email = document.getElementById('email').value;
//              var Phone = document.getElementById('Phone').value;
//              var Images = document.getElementById('Images').files[0];



//              if (name) {
//                  var DeleteEle = document.createElement('button');
//                 var tableElement = document.getElementById('table');
//                 var trElement = document.createElement('tr');
//                 var tbodyElement = document.createElement('tbody');
//                 var nameEle = document.createElement('td');
//                 var emailEle = document.createElement('td');
//                 var PhoneEle = document.createElement('td');
//                 var ImagesEle = document.createElement('img');
//              }

//              DeleteEle.innerHTML = "Delete"

//                  trElement.appendChild(DeleteEle);

//         nameEle.innerHTML = name;
//         emailEle.innerHTML = email;
//         PhoneEle.innerHTML = Phone;
//         ImagesEle.src =  window.URL.createObjectURL(Images); 




//         trElement.appendChild(nameEle);
//         trElement.appendChild(emailEle);
//         trElement.appendChild(PhoneEle);
//         trElement.appendChild(ImagesEle);



//         tbodyElement.appendChild(trElement);

//         tableElement.appendChild(tbodyElement);

//                       Delete.removeChild(trElement)
//         }


//     }


// }


// function DeleteForm() {

// var Delete = document.getElementById("Delete");

// // if (Delete) {
// //     var tableElement = document.getElementById('table');
// //     var trElement = document.createElement('tr');
// //     var tbodyElement = document.createElement('tbody');
// //     var DeleteEle = document.getElementById('delete')

// //     DeleteEle.innerHTML = Delete;

// //     trElement.appendChild(DeleteEle);

// //     tbodyElement.appendChild(trElement);

// //         tableElement.appendChild(tbodyElement);
// Delete.remove(trElement)


// console.log(email)
// }