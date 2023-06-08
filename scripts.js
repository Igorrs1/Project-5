const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const convertValues = async () => {

    const inputReais = document.getElementById("convert-input").value
    const reaisValueText = document.getElementById("reais-value-text")
    const dolarValueText = document.getElementById("dolar-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    reaisValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        dolarValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar
        )
    }

    if (select.value === "€ Euro") {
        dolarValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro
        )
    }

    if (select.value === "Bitcoin") {

        dolarValueText.innerHTML = inputReais / bitcoin

    }


}

chanceCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currancyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currancyImg.src = "./assets/eua.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currancyImg.src = "./assets/euro.png"
    }

    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currancyImg.src = "./assets/bitcoin.png"

    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", chanceCurrency)


