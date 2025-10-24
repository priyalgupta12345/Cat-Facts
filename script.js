let url = "https://catfact.ninja/fact";
let h1=document.querySelector("h1");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
  h1.innerText="Fetching some pawsome fact";
  h1.style.color="white";
  fetch(url)
  .then(res => {
    
      console.log(res); // just text string
      res.json().then((data)=>{
        h1.innerText=data.fact;
        h1.style.color="black";
      })

      
    
  })
  .catch(err => {
    console.log("ERROR:", err);
  });

})


