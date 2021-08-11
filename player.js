// player search info
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
                return `<div>
          <h1>${player.firstName} ${player.lastName} 
          <h1> Date of Birth: ${player.dateOfBirth}<h1> 
               <p> HT/WT: ${player.height} ${player.weight} </p>
               <p> Position:${player.position}</p>
              <p> Team: ${player.team}</p>
               <p>CareerBlocks:${player.careerBlocks}</p>
               <p> careerPercentageFieldGoal:${player.careerPercentageFieldGoal}</p> 
               <p>careerPercentageFreethrow:${player.careerPercentageFreethrow}</p><p>careerPercentageThree:${player.careerPercentageThree}<p>careerPoints:${player.careerPoints}</P><p>careerRebounds:${player.careerRebounds}</p>
               <img src="${player.headShotUrl}"/>


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