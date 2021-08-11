let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
const sportsNewsUL = document.getElementById("sportsNewsUL")
const nflNewsButton = document.getElementById("nflNewsButton")
const input = document.getElementById("input")
const playerList = document.getElementById("player-list")
const submit = document.getElementById('submit')

submit.addEventListener('click', function() {
    console.log("fetch")
    fetch(`https://www.balldontlie.io/api/v1/players?search=${input.value}`)
        .then(response => {
            return response.json()

        }).then((response) => {
            console.log("response", response.data);
            const players = response.data
            playerItems = players.map((player) => {
                return `<div>
                    <h1>${player.first_name} ${player.last_name}</h1>
                    <p> ${player.height_feet}'-${player.height_inches}" ${player.weight_pounds}lbs </p>
                    <p> ${player.position}</p>
                    <p> ${player.team.full_name}</p>
                </div>`
            })

            playerList.innerHTML = playerItems.join("")

        })

    .catch(err => {
        console.error(err);
    });
})