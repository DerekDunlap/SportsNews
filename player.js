// player search info

const playerList = document.getElementById('playerList')
submit.addEventListener('click', function() {
    console.log("fetch")
        //fetch(`https://www.balldontlie.io/api/v1/players?search=${input.value}`)
    fetch(`https://nba-player-individual-stats.p.rapidapi.com/players/lastname?lastname=${input.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a1511fc773msh67cb42be7a4986ap1d8a20jsndf7d3c1430f2",
            "x-rapidapi-host": "nba-player-individual-stats.p.rapidapi.com"
        }
    })

    .then(response => {
            console.log(response)

            return response.json()


            //}).then(data => {
            // console.log(data)
        })
        .then((response) => {
            const players = response
            const playerItems = players.map((player) => {
                //console.log(player.age)
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


               </div>
           `
            })





            // })

            playerList.innerHTML = playerItems.join("")





        })

    .catch(err => {
        console.error(err);
    });

})