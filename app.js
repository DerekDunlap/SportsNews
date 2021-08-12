const homePage = document.getElementById("homePage")
const sportsNewsUL = document.getElementById("sportsNewsUL")
const eplNewsButton = document.getElementById("eplNewsButton")
const nflNewsButton = document.getElementById("nflNewsButton")
const nbaNewsButton = document.getElementById("nbaNewsButton")
const mlbNewsButton = document.getElementById("mlbNewsButton")
const nhlNewsButton = document.getElementById("nhlNewsButton")
const wnbaNewsButton = document.getElementById("wnbaNewsButton")
const collegeFootballNewsButton = document.getElementById("collegeFootballNewsButton")
const sportsInfoUL = document.getElementById("scoreInfoUL")
let scoreBoardDiv = document.getElementById("scoreboard-container")
scoreBoardDiv.style.display = "none"


//Testing UI for scoresDisplay
const gamesNFL = document.getElementById("gamesNFL")
const gamesNBA = document.getElementById("gamesNBA")
const gamesMLB = document.getElementById("gamesMLB")
const gamesEPL = document.getElementById("gamesEPL")
const gamesMLS = document.getElementById("gamesMLS")
const gamesNHL = document.getElementById("gamesNHL")
const gamesWNBA = document.getElementById("gamesWNBA")
const gamesBBallMens = document.getElementById("gamesBBallMens")
const gamesBBallWomens = document.getElementById("gamesBBallWomens")
const gamesNCAABaseball = document.getElementById("gamesNCAABaseball")
const gamesNCAAF = document.getElementById("gamesNCAAF")



const teamsNFL = document.getElementById("teamsNFL")
const teamsNBA = document.getElementById("teamsNBA")
const teamsMLB = document.getElementById("teamsMLB")
const teamsEPL = document.getElementById("teamsEPL")
const teamsNHL = document.getElementById("teamsNHL")
const teamsWNBA = document.getElementById("teamsWNBA")
const teamsNCAAF = document.getElementById("teamsNCAAF")



//gets Sports News Articles from ESPN API with LiveServer turned on. Pass url and callback function
function getSportsNews(sportsNewsURL, sportsNewsDownloaded) {
    fetch(sportsNewsURL)
        .then(response => {
            return response.json()
        }).then(sportsNewsArticles => {
            sportsNewsDownloaded(sportsNewsArticles)
        })
}

// teamsNFL.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsNFLURL = `https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/teams?region=us&lang=en&contentorigin=espn&limit=99`
//     getSportsNews(teamsNFLURL, function(teamsNFLData) {
//         displayAllTeams(teamsNFL.getAttribute("value"), teamsNFLData)
//     })
// })

// teamsNBA.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsNBAURL = `https://site.web.api.espn.com/apis/site/v2/sports/basketball/nba/teams?region=us&lang=en&contentorigin=espn&limit=99`
//     getSportsNews(teamsNBAURL, function(teamsNBAData) {
//         displayAllTeams(teamsNBA.getAttribute("value"), teamsNBAData)
//     })
// })

// teamsMLB.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsMLBURL = `https://site.web.api.espn.com/apis/site/v2/sports/baseball/mlb/teams?region=us&lang=en&contentorigin=espn&limit=99`
//     getSportsNews(teamsMLBURL, function(teamsMLBData) {
//         displayAllTeams(teamsMLB.getAttribute("value"), teamsMLBData)
//     })
// })

// teamsEPL.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsEPLURL = `http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams?region=us&lang=en&contentorigin=espn&limit=99`
//     getSportsNews(teamsEPLURL, function(teamsEPLData) {
//         displayAllTeams(teamsEPL.getAttribute("value"), teamsEPLData)
//     })
// })

// teamsNHL.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsNHLURL = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams?region=us&lang=en&contentorigin=espn&limit=99`
//     getSportsNews(teamsNHLURL, function(teamsNHLData) {
//         displayAllTeams(teamsNHL.getAttribute("value"), teamsNHLData)
//     })
// })

// teamsWNBA.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsWNBAURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams?region=us&lang=en&contentorigin=espn&limit=99`
//     getSportsNews(teamsWNBAURL, function(teamsWNBAData) {
//         displayAllTeams(teamsWNBA.getAttribute("value"), teamsWNBAData)
//     })
// })

// teamsNCAAF.addEventListener('click', function() {
//     // clearDisplay()
//     teamsContainerDiv.style.display = "flex"
//     const teamsNCAAFURL = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?limit=1000&groups=80`
//     getSportsNews(teamsNCAAFURL, function(teamsNCAAFData) {
//         displayAllTeams(teamsNCAAF.getAttribute("value"), teamsNCAAFData)
//     })
// })

//addEventListener for NFL Tab Button
nflNewsButton.addEventListener('click', function() {
    // clearDisplay()
    const nflNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/news`
    getSportsNews(nflNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)

    })
})

nbaNewsButton.addEventListener('click', function() {
    // clearDisplay()
    const nbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`
    getSportsNews(nbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})

mlbNewsButton.addEventListener('click', function() {
    const mlbNewsURL = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news`
    getSportsNews(mlbNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
nhlNewsButton.addEventListener('click', function() {
    // clearDisplay()
    const nhlNewsURL = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news`
    getSportsNews(nhlNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
wnbaNewsButton.addEventListener('click', function() {
    // clearDisplay()
    const wnbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news`
    getSportsNews(wnbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
collegeFootballNewsButton.addEventListener('click', function() {
    // clearDisplay()
    const collegeFootballNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/news`
    getSportsNews(collegeFootballNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
eplNewsButton.addEventListener('click', function() {
    // clearDisplay()
    const eplNewsURL = `https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news`
    getSportsNews(eplNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})




homePage.addEventListener('click', function() {
    scoreBoardDiv.style.display = "none"
})

gamesNFL.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const nflScoresURL = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`
    getSportsNews(nflScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesNBA.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const nbaScoresURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`
    getSportsNews(nbaScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesMLB.addEventListener('click', function() {
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display = "flex"
    const mlbScoresURL = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard`
    getSportsNews(mlbScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesEPL.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const eplScoresURL = `http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard`
    getSportsNews(eplScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesMLS.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const mlsScoresURL = `http://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard`
    getSportsNews(mlsScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesNHL.addEventListener('click', function() {
    //ScoresURL **Testing Purposes
    scoreBoardDiv.style.display = "flex"
    const nhlScoresURL = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard`
    getSportsNews(nhlScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesWNBA.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const wnbaScoresURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard`
    getSportsNews(wnbaScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesNCAAF.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const ncaaFScoresURL = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard`
    getSportsNews(ncaaFScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesBBallMens.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const mensBBallScoresURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard`
    getSportsNews(mensBBallScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesBBallWomens.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const womensBBallScoresURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard`
    getSportsNews(womensBBallScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

gamesNCAABaseball.addEventListener('click', function() {
    // clearDisplay()
    scoreBoardDiv.style.display = "flex"
    const ncaaBaseballScoresURL = `https://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard`
    getSportsNews(ncaaBaseballScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
})

//display function can be called by all sports tab (Examples: NFL,NBA,Soccer)
function displaySportsArticles(sportsNewArticles) {
    const sportsArticles = sportsNewArticles.articles
    const sportItem = sportsArticles.map(function(sportArticle) {
        const sportsNewsTemplate = `<li>  
            <img src="${sportArticle.images[0].url}" />
            <label>${sportArticle.description}
            <label>Published At: ${sportArticle.published}
        </li>`
        return sportsNewsTemplate
    })
    sportsNewsUL.innerHTML = sportItem.join("")
}





function displaySportsScore(sportsScoresData) {

    const sportsEvents = sportsScoresData.events
    const eventItem = sportsEvents.map(function(sportsEvent) {
        const sportsVenue = sportsEvent.competitions.map(function(sportsComp) {
            let sportsTeams = sportsComp.competitors.map(function(sportsOppoent) {
                for (let i = 0; i < 6; i++) {
                    return `<li>${sportsOppoent.team.name} ${sportsOppoent.records[i].summary} ${sportsOppoent.score}</li>\n`
                }
            })
            sportsTeams = sportsTeams.join("")
            let gameDate = new Date(sportsComp.date)
            let weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(gameDate)
            let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(gameDate)
            let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(gameDate)
            gameDate = `${weekday} ${month}/${day}`
            return `<div>
                ${gameDate} - ${sportsComp.status.type.description} @ ${sportsComp.venue.fullName}
                <ul>${sportsTeams}</ul>
            </div>`
        })
        const sportsEventTemplate = `<li>
        <label>${sportsVenue}</label>
        </li>`
        return sportsEventTemplate
    })
    sportsInfoUL.innerHTML = eventItem.join("")
}

function displayAllTeams(sportName, allTeamsData) {
    console.log(sportName)
    const teamsArr = allTeamsData.sports[0].leagues[0].teams
    const teamItems = teamsArr.map((team) => {
        //console.log(team.team)
        return `<li><div><img src="${team.team.logos[0].href}"/></div> <div><h3>${team.team.displayName}</h3></div></li>`
    })
    leagueName.innerHTML = sportName
    sportsTeamsUL.innerHTML = teamItems.join("")
}