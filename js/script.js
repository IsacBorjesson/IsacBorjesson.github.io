const rankingsBody = document.querySelector("#rankings-table > tbody");
const test = document.querySelector("#myItemList > ul");

const array = []
function loadCourses() {
    const request = new XMLHttpRequest();

    request.open("get", "../data/rankings.json");
    request.onload = () => {
        const json = JSON.parse(request.responseText);
        addToCheckout(json);
        populateCourses(json);
        addToCourses(json)
    }
    request.send();
    
};

function addToCourses(json){
    var id
    var name
    var course
    var email
    
    document.querySelectorAll(".content").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "new_Id" && e.target.value.length > 0 && e.target.value >= 0) {
                id = e.target.value
            }
            if (e.target.id === "new_Name" && e.target.value.length > 0) {
                name = e.target.value
            }
            if (e.target.id === "new_Course" && e.target.value.length > 0) {
                course = e.target.value
            }
            if (e.target.id === "new_Email" && e.target.value.length > 0) {
                email = e.target.value
            }
            if(id != null && name != null && course != null && email != null){
                document.addEventListener("submit", e => {
                    e.preventDefault();
                    var newCourse = [id,name, course, email]
                    json.push(newCourse)
                    populateCourses(json)
                });
                
            }
        })
    })
}
     


function populateCourses(json) {

    // Clear out existing table data
    while (rankingsBody.firstChild) {
    rankingsBody.removeChild(rankingsBody.firstChild);
    }

    // Populate table
    json.forEach((row) => {
        const tr = document.createElement("tr");

        row.forEach((cell) => {
            const td = document.createElement("td");
            td.innerHTML = cell;
            tr.appendChild(td);
        });

        rankingsBody.appendChild(tr);

    });
   
}


function populateCheckout() {
    var test = document.getElementById("myItemList");
    var index = 0
    // Clear out existing table data
    while (test.firstChild)
        test.removeChild(test.firstChild);

    ul = document.createElement('ul');


    document.getElementById('myItemList').appendChild(ul);

    
    array.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += item + " " + `<button onclick="myFunction(${index})"">Delete</button>` ;
        index++
    });
    
}
function myFunction(index){
    array.splice(index,1)
    populateCheckout()
}


    

function addToCheckout(json){
    var searchId 
    
    document.querySelectorAll(".content").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "Id" && e.target.value > -1 && e.target.value < json.length && e.target.value.length > 0) {
            searchId = e.target.value;
            console.log(searchId)
            array.push(json[searchId][2])
            populateCheckout();
        }
    })
})

}
document.addEventListener("DOMContentLoaded", () => { loadCourses(); });


