export default function placeData (item, itemType) {
    if (itemType == "kanji-header") {
        let kanji = item.kanji

        document.getElementsByClassName("kanji-header")[0].innerHTML = kanji
    }

    else if (itemType == "kanji-card") {
        let card = item
        
        let kanji = card.Kanji
        let keyword = card.Keyword
        let position = card.Position
        let story = card.Story
        let strokeCount = card.StrokeCount

        document.getElementsByClassName("card-kanji")[0].innerHTML = kanji
        document.getElementsByClassName("card-keyword")[0].innerHTML = keyword
        document.getElementsByClassName("card-pos")[0].innerHTML = '#' + position
        document.getElementsByClassName("card-story")[0].innerHTML = story
        document.getElementsByClassName("card-strokes")[0].innerHTML = 'Strokes: ' + strokeCount
    }
}