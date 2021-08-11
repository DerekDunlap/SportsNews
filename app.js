let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
const sportsNewsUL = document.getElementById("sportsNewsUL")
const nflNewsButton = document.getElementById("nflNewsButton")
const nbaNewsButton = document.getElementById("nbaNewsButton")
const mlbNewsButton = document.getElementById("mlbNewsButton")
const nhlNewsButton = document.getElementById("nhlNewsButton")
const wnbaNewsButton = document.getElementById("wnbaNewsButton")
const collegeFootballNewsButton = document.getElementById("collegeFootballNewsButton")
const sportsInfoUL = document.getElementById("sportsInfoUL")
const input = document.querySelector("input")
const playerList = document.getElementById("player-list")
const submit = document.getElementById('submit')


// mediaButton.onclick = function() {
//     "use strict";
//     mainListDiv.classList.toggle("show_list");
//     mediaButton.classList.toggle("active");
// };

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn, .dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//gets Sports News Articles from ESPN API with LiveServer turned on. Pass url and callback function
function getSportsNews(sportsNewsURL, sportsNewsDownloaded) {
    fetch(sportsNewsURL)
        .then(response => {
            return response.json()
        }).then(sportsNewsArticles => {
            sportsNewsDownloaded(sportsNewsArticles)
        })
}

//addEventListener for NFL Tab Button
//nflNewsButton.addEventListener('click', function() {
const nflNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/news`
getSportsNews(nflNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
    //})

//nbaNewsButton.addEventListener('click', function() {
const nbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`
getSportsNews(nbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
    //})

//mlbNewsButton.addEventListener('click', function() {
const mlbNewsURL = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news`
getSportsNews(mlbNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
    //})

//nhlNewsButton.addEventListener('click', function() {
const nhlNewsURL = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news`
getSportsNews(nhlNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
    //})
    //wnbaNewsButton.addEventListener('click', function() {
const wnbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news`
getSportsNews(wnbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
    //})
    //collegeFootballNewsButton.addEventListener('click', function() {
const collegeFootballNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/news`
getSportsNews(collegeFootballNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
    //})

//gamesLink.addEventListener('click',function(){
//ScoresURL **Testing Purposes
const nflScoresURL = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`
const mlbScoresURL = `http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard`
getSportsNews(nflScoresURL, function(scoreBoardData) {
        displaySportsScore(scoreBoardData)
    })
    //})

//display function can be called by all sports tab (Examples: NFL,NBA,Soccer)
function displaySportsArticles(sportsNewArticles) {
    const sportsArticles = sportsNewArticles.articles
    const sportItem = sportsArticles.map(function(sportArticle) {
            const sportsNewsTemplate = `<li>  
            <label>${sportArticle.images}</label>
            <label>${sportArticle.images.name}</label>
            <label>${sportArticle.description}/label>
            <label>${sportArticle.published}</label>
            <label>${sportArticle.type}</label>
            <label>${sportArticle.links}</label>
            <label>${sportArticle.lastModified}</label>
            <label>${sportArticle.categories}</label>
        </li>
        `
            return sportsNewsTemplate
        })
        //sportsNewsUL.innerHTML = sportItem.join("")
}

//new
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
            return `${gameDate} - ${sportsComp.status.type.description} - ${sportsComp.venue.fullName}
            <div>
                <ul>${sportsTeams}</ul>
            </div>`
        })
        const sportsEventTemplate = `<li>
        <label>${sportsVenue}</label>
        </li>`
        console.log(sportsEventTemplate)
    })
}