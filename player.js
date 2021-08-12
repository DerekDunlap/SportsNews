const input = document.getElementById("input")
const playerList = document.getElementById('playerList')
const submit = document.getElementById('submit')
let newsArticleContainerDiv=document.getElementById("news-container")
let scoreBoardDiv=document.getElementById("scoreboard-container")
let teamsContainerDiv=document.getElementById("teams-container")


submit.addEventListener('click', function() {
    clearDisplay()
    fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/lastname?lastname=${input.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a1511fc773msh67cb42be7a4986ap1d8a20jsndf7d3c1430f2",
            "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com"
        }
    })

    .then(response => {
        return response.json()
    })
    .then((response) => {
        const players = response
        const playerItems = players.map((player) => {
        return `<div class="player">
            <img class="img" src="${player.headShotUrl}"/>
            <h1>${player.firstName} ${player.lastName}
            <p> DOB: ${player.dateOfBirth}<p>
            <p> HT/WT: ${player.height} ${player.weight} </p>
            <p> Position:${player.position}</p>
            <p> Team: ${player.team}</p>
            <p>Career Blocks:${player.careerBlocks}</p>
            <p>Career FG%:${player.careerPercentageFieldGoal}</p> 
            <p>Career FT%:${player.careerPercentageFreethrow}</p><p>Career % Three:${player.careerPercentageThree}<p>Career Points:${player.careerPoints}</P><p>Career Rebounds:${player.careerRebounds}</p>
            </div>`
        })
        playerList.innerHTML = playerItems.join("")
    })
    .catch(err => {
        console.error(err);
    });
})

function clearDisplay(){
    //Uncomment when News Article is finished
    newsArticleContainerDiv.style.display="none"
    scoreBoardDiv.style.display="none"
    teamsContainerDiv.style.display="none"
}
