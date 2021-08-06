const sportsUL=document.getElementById("sportsUL")

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