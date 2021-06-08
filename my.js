
function testGS(){

    const url="https://script.googleusercontent.com/macros/echo?user_content_key=vzi-3ksMMmF--JCjSF1QwUjx1VdT-6gWYvLesxmcZIZpZLvQSQwbFqRNTwU3IWqvhcP8dVVxP8H0WqDFTvkjqpZB3bR9G-qgm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnODamL0bNHYwrkaT8rhh3Ty2H4AjbAqhFCEl5xbw9IFiGhX5QeJMDuUA83yd8y0AaQ&lib=MqPk1HlDQG74nRE4QabRxfkzLPXJxYeWz"

    fetch(url)
        .then(d => d.json())
        .then(d => {
           document.getElementById("app").textContent = d[0].status;
        });
}

document.getElementById("btn").addEventListener("click",testGS);