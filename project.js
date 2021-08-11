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

            // const first_nameValue = data[0].first_name;
            // const last_nameValue = data[0].last_name
            // const positionValue = data[1].position;
            // const abbreviationValue = data.Team.abbreviation;
            // const conferenceValue = data.Team.conference;
            // const cityValue = data.Team.city;
            // const divisionValue = data.Team.division;
            // const full_nameValue = data.Team.full_name;
            // const nameValue = data.Team.name;

            // first_nameValue.innerHTML = first_nameValue;
            // last_nameValue.innerHTML = last_nameValue;
            // positionValue.innerHTML = positionValue
            // abbreviation.innerHTML = abbreviationValue
            // conferenceValue.innerHTML = conferenceValue
            // cityValue.innerHTML = cityValue
            // divisionValue.innerHTML = divisionValue
            // full_name.innerHTML = full_nameValue
            // nameValue.innerHTML = nameValue
        })

    .catch(err => {
        console.error(err);
    });
})