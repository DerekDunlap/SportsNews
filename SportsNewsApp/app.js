let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
const sportsNewsUL = document.getElementById("sportsNewsUL")
const nflNewsButton = document.getElementById("nflNewsButton")
const nbaNewsButton = document.getElementById("nbaNewsButton")
const mlbNewsButton = document.getElementById("mlbNewsButton")
const nhlNewsButton = document.getElementById("nhlNewsButton")
const wnbaNewsButton = document.getElementById("wnbaNewsButton")
const collegeFootballNewsButton = document.getElementById("collegeFootballNewsButton")


mediaButton.onclick = function() {

    "use strict";

    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");

};

//gets Sports News Articles from ESPN API with LiveServer turned on. Pass url and callback function
function getSportsNews(sportsNewsURL, sportsNewsDownloaded) {
    fetch(sportsNewsURL)
        .then(response => {
            return response.json()
        }).then(sportsNewsArticles => {
            console.log(sportsNewsArticles)
            sportsNewsDownloaded(sportsNewsArticles)

        })
}

//addEventListener for NFL Tab Button
nflNewsButton.addEventListener('click', function() {
    const nflNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/nfl/news`
    getSportsNews(nflNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
nbaNewsButton.addEventListener('click', function() {
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
    const nhlNewsURL = `http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news`
    getSportsNews(nhlNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
wnbaNewsButton.addEventListener('click', function() {
    const wnbaNewsURL = `http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news`
    getSportsNews(wnbaNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})
collegeFootballNewsButton.addEventListener('click', function() {
    const collegeFootballNewsURL = `http://site.api.espn.com/apis/site/v2/sports/football/college-football/news`
    getSportsNews(collegeFootballNewsURL, function(sportsNewArticles) {
        displaySportsArticles(sportsNewArticles)
    })
})

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
    sportsNewsUL.innerHTML = sportItem.join("")
}