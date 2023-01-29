const input = document.getElementById("input");
const bottom = document.getElementById("bottom");
const image = document.getElementsByTagName("img");
const searchBar = document.getElementById("searchBar")
async function search() {
    const city = input.value;
    if (city == "") {
        console.log("hii");
        searchBar.innerHTML = `<h5>Enter City Name</h5>`
    }
    else {
        searchBar.innerHTML = "";
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
        const data = await res.json()
        console.log(data);
        const temp = data.main.temp.toFixed()
        console.log(temp);
        const con = `${data.weather[0].main}`;
        console.log(con);
        console.log("bye");
        bottom.innerHTML = `
    <div class="card">
            <div class="city">
                <h2>Weather of ${city}</h2>
            </div>
            <div class="temp">
                <div class="left">
                    <div class="up">
                        <img src="" alt="#">
                        <h1>${temp}<span>&#176;</span>C</h1>
                    </div>
                    <div class="down">
                        <h3>${data.weather[0].description}</h3>
                    </div>
                </div>
                <div class="right">
                    <p>Min : ${data.main.temp_min}<span>&#176;</span>C</p>
                    <p>Max : ${data.main.temp_max}<span>&#176;</span>C</p>
                    <p>Humidity : ${data.main.humidity}%</p>
                    <p>Wind : ${data.wind.speed} km/h</p>
                    <p>Pressure : ${data.main.pressure} Pa</p>
                    <p>Longitude : ${data.coord.lon}</p>
                    <p>Latitude : ${data.coord.lat}</p>
                </div>
            </div>
        </div>`
        if (con == "Clouds") {
            image[0].src = "./images/cloud.png"
        }
        else if (con == "Mist") {
            image[0].src = "./images/mist.png"
        }
        else if (con == "Rain") {
            image[0].src = "./images/rain.png"
        }
        else if (con == "Haze") {
            image[0].src = "./images/haze.png"
        }
        else if (con == "Snow") {
            image[0].src = "./images/snow.png"
        }
        else {
            image[0].src = "./images/clear.png"
        }
    }
    input.value = "";
}
async function homepage() {
    const city = "New Delhi";

    console.log("homepage");
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    const data = await res.json()
    console.log(data);
    const temp = data.main.temp.toFixed()
    console.log(temp);
    const con = `${data.weather[0].main}`;
    console.log(con);

    bottom.innerHTML = `
    <div class="card">
            <div class="city">
                <h2>Weather of ${city}</h2>
            </div>
            <div class="temp">
                <div class="left">
                    <div class="up">
                        <img src="" alt="#">
                        <h1>${temp}<span>&#176;</span>C</h1>
                    </div>
                    <div class="down">
                        <h3>${data.weather[0].description}</h3>
                    </div>
                </div>
                <div class="right">
                    <p>Min : ${data.main.temp_min}<span>&#176;</span>C</p>
                    <p>Max : ${data.main.temp_max}<span>&#176;</span>C</p>
                    <p>Humidity : ${data.main.humidity}%</p>
                    <p>Wind : ${data.wind.speed} km/h</p>
                    <p>Pressure : ${data.main.pressure} Pa</p>
                    <p>Longitude : ${data.coord.lon}</p>
                    <p>Latitude : ${data.coord.lat}</p>
                </div>
            </div>
        </div>`
    if (con == "Clouds") {
        image[0].src = "./images/cloud.png"
    }
    else if (con == "Mist") {
        image[0].src = "./images/mist.png"
    }
    else if (con == "Rain") {
        image[0].src = "./images/rain.png"
    }
    else if (con == "Haze") {
        image[0].src = "./images/haze.png"
    }
    else if (con == "Snow") {
        image[0].src = "./images/snow.png"
    }
    else {
        image[0].src = "./images/clear.png"
    }
}
homepage()
