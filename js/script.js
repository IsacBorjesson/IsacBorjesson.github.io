const rankingsBody = document.querySelector("#rankings-table > tbody");
const test = document.querySelector("#myItemList > ul");

const array = []
function loadRankings() {
    const request = new XMLHttpRequest();

    request.open("get", "../data/rankings.json");
    request.onload = () => {
        const json = JSON.parse(request.responseText);
        editRankings(json);
        populateRanklings(json);
    }
    request.send();
};

function populateRanklings(json) {

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

function populateCheckout(array) {
    var test = document.getElementById("myItemList");

    while (test.firstChild)
        test.removeChild(test.firstChild);

    let items = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange'
    ],
    ul = document.createElement('ul');


    document.getElementById('myItemList').appendChild(ul);


    array.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML += item;
    });
}

function editRankings(json){
    console.log(json)
    var searchId 
    
    document.querySelectorAll(".content").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "Id" && e.target.value > -1 && e.target.value < json.length && e.target.value.length > 0) {
            searchId = e.target.value;
            console.log(searchId)
            array.push(json[searchId][2])
            populateCheckout(array);
        }
    })
})

}
document.addEventListener("DOMContentLoaded", () => { loadRankings(); });