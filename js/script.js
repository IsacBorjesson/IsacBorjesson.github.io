const rankingsBody = document.querySelector("#rankings-table > tbody");
      
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

function editRankings(json){
    document.querySelectorAll(".edit__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "edit_Name" && e.target.value.length > 0) {
                json[1][1] = e.target.value;
            }

        });
    });
}

document.addEventListener("DOMContentLoaded", () => { loadRankings(); });