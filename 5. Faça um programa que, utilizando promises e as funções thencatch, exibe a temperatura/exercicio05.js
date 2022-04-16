var prompt = require('prompt-sync')();
require('dotenv').config()
const axios = require('axios')


const {
    PROTOCOL,
    BASE_URL,
    API_KEY,
    CELSIUS,
    FAHRENHEIT
} = process.env

function tempo(lat, lon, temperatura) {
    deuCerto = false
    if (temperatura == "1") {
        const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${CELSIUS}`
        axios.get(url)
            .then(res => {
                return res.data
            })
            .then(res => {
                console.log(`local: ${res.name}`)
                return res.main
            })
            .then(res => {
                console.log(`temperatura atual: ${res.temp}`)
                return res['list']
            })
        deuCerto = true
    } else if (temperatura == "2") {
        const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${FAHRENHEIT}`
        axios.get(url)
            .then(res => {
                return res.data
            })
            .then(res => {
                console.log(`local: ${res.name}`)
                return res.main
            })
            .then(res => {
                console.log(`temperatura atual: ${res.temp}`)
                return res['list']
            })
        deuCerto = true
    } else if (temperatura == "3") {
        const url = `${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        axios.get(url)
            .then(res => {
                return res.data
            }).catch(err => {
                console.log(err)
            })
            .then(res => {
                console.log(`local: ${res.name}`)
                return res.main
            })
            .then(res => {
                console.log(`temperatura atual: ${res.temp}`)
                return res['list']
            })
        deuCerto = true
    }
    return deuCerto == true ? Promise.resolve(("Função executada com sucesse")) :
        Promise.reject(("Erro na execução. Algum digito digitado incorreto"))
}
let lat = prompt('Digite a Latitude: ')
let lon = prompt('Digite a Longitude: ')

console.log(`\n1 - Celsius \n2 - Fahrenheit \n3 - Kelvin`)
temperatura = prompt()

tempo(lat, lon, temperatura).then(resultado => {
    console.log(resultado)
}).catch(resultado => {
    console.log(resultado)
})