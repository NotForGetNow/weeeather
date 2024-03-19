const key = 'c0e8bde454822b66ca86dc975063465b'

async function weather(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)

    document.querySelector('.country').textContent = `${data.name}`
    document.querySelector('.deg').textContent = `${data.main.temp}°C`;
    document.querySelector('.humi').textContent = `${data.main.humidity}`
}

document.querySelector('.poisk').addEventListener('click', () => {
    weather(document.querySelector('input').value)
})
