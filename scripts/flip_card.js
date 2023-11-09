import getData from "./get_data.js"

(function flipCard () {
    let flipTrigger = document.getElementsByClassName("keyword-submit")[0]

    flipTrigger.addEventListener("click", () => {
        // remove elements
        document.getElementsByClassName("kanji-header")[0].remove()
        document.getElementsByClassName("content")[0].remove()
        
        // remove unneeded css link
        Object.values(document.getElementsByTagName("link")).forEach((linkElem, i) => {
            let cssUrl = linkElem.attributes[1].nodeValue
            if (cssUrl == "../styles/prompt_styles.css") {
                document.getElementsByTagName("link")[i].remove()
            }
        })

        // add elements
        const mainElem = document.getElementsByTagName("main")[0]

        const newElemNames = ["backBtn", "break1", "cardKeyword", "break2", "resultContainer", "cardPos", "cardStrokes", "cardPrims", "cardStory", "cardKanji"]
        const newTags = ["a", "hr", "h1", "hr", "div", "h2", "h3", "h3", "p", "h2"]
        const classNames = ["back-btn", "break", "card-keyword", "break", "result-container", "card-pos", "card-strokes", "card-primitives", "card-story", "card-kanji"]
        const newElems = {}

        newElemNames.forEach((elemName, i) => {
            // using array lists to avoid repetition when assigning
            newElems[elemName] = document.createElement(newTags[i])
            newElems[elemName].setAttribute("class", classNames[i])
        })

        newElems["backBtn"].textContent = "Back"
        newElems["cardPrims"].textContent = "Primitives: ?"

        // append multiple items as children of "resultContainer"
        newElems["resultContainer"].append(newElems["cardPos"], newElems["cardStrokes"], newElems["cardPrims"], newElems["cardStory"], newElems["cardKanji"])
        const {cardPos, cardStrokes, cardPrims, cardStory, cardKanji, ...trimmedElems} = newElems

        // append the whole list of elems to be visible
        for (const elem in trimmedElems) {
            mainElem.appendChild(trimmedElems[elem])
        }

        // add css to style new elems
        const headElem = document.getElementsByTagName("head")[0]
        const cssLink = document.createElement("link")

        cssLink.setAttribute("rel", "stylesheet")
        cssLink.setAttribute("href", "../styles/result_styles.css")

        headElem.appendChild(cssLink)

        getData()
    })
})()
