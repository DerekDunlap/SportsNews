let mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
const sportsUL=document.getElementById("sportsUL")

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};

function getSportsData(sportsDataDownloaded){
    const sportsURL=``
    fetch(sportsURL)
    .then(response=>{
        return response.json()
    }).then(sportsData=>{
        sportsDataDownloaded(sportsData)
    })
}

getSportsData(function(sportsData){
    displaySportsArticles(sportsData)
})

function displaySportsArticles(sportsArticles){
    const sportsArr=sportsArticles.data
    const sportsItem=sportsArr.map(function(sportArticle){
        const sportTemplate=`<li>  
            <h2></h2>
        </li>
        `
        return sportTemplate
    })
    sportsUL.innerHTML=sportsItem.join("")
}

