import placeData from "./place_card_data.js"

const xhr = new XMLHttpRequest()

xhr.open("GET", "http://127.0.0.1:3000/kanji-card")
// xhr.responseType = "json"

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let parsedResponse = JSON.parse(xhr.response)
    placeData(parsedResponse[0])
  }

  else {
    console.log(`Error: ${xhr.status}`)
  }
}

xhr.send()
