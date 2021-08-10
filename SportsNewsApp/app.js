let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
const sportsNewsUL=document.getElementById("sportsNewsUL")
const nflNewsButton=document.getElementById("nflNewsButton")

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

//gets Sports News Articles from NewsAPI with LiveServer turned on. Pass url and callback function
function getSportsNews(sportsNewsURL,sprtsNewsDownloaded){
    fetch(sportsNewsURL)
    .then(response=>{
        return response.json()
    }).then(sportsNewsArticles=>{
        console.log(sportsNewsArticles)
        sprtsNewsDownloaded(sportsNewsArticles)
        
    })
}

//addEventListener for NFL Tab Button
nflNewsButton.addEventListener('click',function(){
    const nflURL=`https://newsapi.org/v2/top-headlines?q=nfl&apiKey=e2f529560d044928b22b33b3c8282dfe`
    getSportsNews(nflNewsURL,function(sportsNewArticles){
        displaySportsArticles(sportsNewArticles)
    })
})

//display function can be called by all sports tab (Examples: NFL,NBA,Soccer)
function displaySportsArticles(sportsNewArticles){
    const sportsArticles=sportsNewArticles.articles
    const sportItem=sportsArticles.map(function(sportArticle){
        const sportsNewsTemplate=`<li>  
            <h2>${sportArticle.title}</h2>
            <img src="${sportArticle.urlToImage}"/>
            <span>Caption ${sportArticle.description}</span>
            <p>${sportArticle.content}</p>
        </li>
        `
        return sportsNewsTemplate
    })
    sportsNewsUL.innerHTML=sportItem.join("")
}
