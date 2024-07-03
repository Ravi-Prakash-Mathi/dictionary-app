let btn=document.getElementById("submit")
btn.addEventListener("click",async()=>{

    let value=document.getElementById("text").value
    console.log(value);
    let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    let data=await (await fetch(api)).json()
    try{
    let meaningnoun=data[0].meanings[0].definitions[0].definition
    let pos=data[0].meanings[0].partOfSpeech
    let div=document.querySelector("div")
    let div2=document.querySelector("#partsofspeech")
    div.innerHTML=` <b style="font-size:20px;font-weight:200;">Meaning: ${meaningnoun}</b>`
    div2.innerHTML=`parts of speech: <b style="font-size:30px;font-weight:500;">${pos}</b>`
    //!gifs    
    let tenorkey="your api key"
    let tenorapi=  `https://tenor.googleapis.com/v2/search?q=${value}&key=AIzaSyBA9v0R6ozHDl63VfCg1uTv7sDW0wHZY_M&client_key=my_test_app&limit=2`
    let gifdata=await fetch(tenorapi)
    let finalgif=await gifdata.json()
    let firstimg =finalgif.results[0].media_formats.mediumgif.url
    let secondimg=finalgif.results[1].media_formats.gif.url
    let leftimg=document.getElementById("leftimg")
    let rightimg=document.getElementById("rightimg")
    console.log(finalgif);
    leftimg.src=firstimg
    rightimg.src=secondimg
    leftimg.style.visibility="visible"
    leftimg.style.animationName="imgscrllt"
    rightimg.style.animationName="imgscrlrt"
    rightimg.style.visibility="visible"
}
catch(error){
    alert("enter single word/or proper english word")
    // console.log(pos)
       div.innerHTML=`Meaning:None}`
    div2.innerHTML=`parts of speech:<b style="background:">None</b>`
    }
})
let value=document.getElementById("text").value
