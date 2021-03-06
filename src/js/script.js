fetch('https://api.sunrise-sunset.org/json?lat=55.824730&lng=-12.073690&formatted=0')
.then(res => res.json())
.then(data => {
    // Date to see what time it is now
    let time = new Date().toLocaleTimeString('da-DK', {hour: "2-digit", minute: "2-digit"});
    // Get time of sunrise/sunset (API always do UTC, so need rewrite)
    let sunriseUTC = data.results.sunrise;
    let sunsetUTC = data.results.sunset;
    // Rewrite result to CET
    let sunriseCET = new Date(sunriseUTC).toLocaleTimeString('da-DK', {hour: "2-digit", minute: "2-digit"});
    let sunsetCET = new Date(sunsetUTC).toLocaleTimeString('da-DK', {hour: "2-digit", minute: "2-digit"});
    console.log(time)
    console.log(sunriseCET)
    console.log(sunsetCET)
    if(time > (sunriseCET - 1) && time < (sunsetCET - 1)){
    }else{
        toggleTheme()
    }
})
function toggleTheme() {
    // Find elements
    // Header
    let headerBackground = document.querySelector('#header--background')
    let clouds = document.querySelector('#clouds');
    let birds = document.querySelector('#birds');

    // Main

    // Footer
    let footerBackground = document.querySelector('#footer--background');

    let wave1 = document.querySelector('#wave1');
    let wave2 = document.querySelector('#wave2');
    let headerStars = document.querySelector('#header__star-container');
    let footerStars = document.querySelector('#footer__star-container');
    // Make the waves dark
    wave1.classList.toggle('wave-night');
    wave2.classList.toggle('wave-night');
    // Make the sky dark
    headerBackground.classList.toggle('sky')
    footerBackground.classList.toggle('sky-light');
    // Hide
    clouds.classList.toggle('hide');
    birds.classList.toggle('hide');
    // Unhide
    headerStars.classList.toggle('hide');
    footerStars.classList.toggle('hide');
}