// script.js
function fetchChampionData() {
    var championName = document.getElementById("champion-input").value;
    var championData = {
        name: championName,
        role: 'Fighter',
        build: ['Infinity Edge', 'Phantom Dancer', 'Bloodthirster']
    };

    displayChampionData(championData);
}

function displayChampionData(champion) {
    var infoDiv = document.getElementById("champion-info");
    infoDiv.innerHTML = `<h2>${champion.name}</h2>
                         <p>Role: ${champion.role}</p>
                         <h3>Recommended Build:</h3>
                         <ul>
                             ${champion.build.map(item => `<li>${item}</li>`).join('')}
                         </ul>`;
}
