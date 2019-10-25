// get data about national parks from your json-server API

const getParksData = () => {
    return fetch(`http://localhost:8088/parks`)
    .then(nationalParks => nationalParks.json())
}
getParksData().then(parksData => console.log(parksData[0]))

// display the list of national parks on the DOM

// If the park has been visited, the article tag should have a red dashed border. 

// If the park has not been visited, it should have a green solid border.