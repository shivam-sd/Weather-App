
let input = document.getElementById("input");
let form = document.querySelector("form");
let container = document.querySelector(".container");

async function getweather(cityname){
const url = `http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=${cityname}&aqi=yes`;
const responce = await fetch(url);
// console.log(responce);
const data = await responce.json();
return showweather(data);
}

function showweather(data){
container.innerHTML = `<div class="input">
<form action="">
<input type="text" placeholder="Search Your City" id="input">
</form>
</div>

<div class="store-date">
<h1 class="date">Date :- ${data.location.localtime}</h1>
</div>


<div class="country">
<div class="cont1"><h2 class="cont">Country :- ${data.location.country}</h2></div>

<div class="name-reg">
<h3 class="name-reg1">Name :- ${data.location.name}</h3>
<h3 class="name-reg1">Region :-  ${data.location.region}</h3>
</div>

</div>

<div class="icon">
<img src="https:cdn.weatherapi.com/weather/64x64/day/113.png" id="icon" alt="">
</div>

<div class="temp-fah">
<h2 class="temp"> C&deg ${data.current.temp_c}</h2>
<h2 class="fahren">&#8457  ${data.current.temp_f}</h2>
</div>`;
}


form.addEventListener("submit" , (ev) =>{
    getweather(input.value)
    ev.preventDefault();
})