document.addEventListener("DOMContentLoaded", async () => {
    const result = await fetch("https://api.open-meteo.com/v1/forecast?latitude=46.516&longitude=6.6328&hourly=relative_humidity_2m,cloud_cover,wind_speed_10m&daily=sunrise&timezone=Europe%2FBerlin&past_days=3");
    console.log(await result.json());
})