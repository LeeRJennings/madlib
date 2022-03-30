console.log("You look marvelous!");

//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){
		const madlib = {
			adjective: document.querySelector("input[name='adjective']").value,
			sillyword: document.querySelector("input[name='sillyword']").value,
			pluralNoun: document.querySelector("input[name='pluralNoun']").value,
			noun: document.querySelector("input[name='noun']").value
		}
		//set/save to sessionStorage
		setDataToStorage(madlib)
		//invoke renderStory
		renderStory()
	}
})

const getDataFromStorage = (dataKey) => {
	return JSON.parse(sessionStorage.getItem(dataKey))
	//use JSON.parse()
	
}

const setDataToStorage = (dataObj) => {
	sessionStorage.setItem("key", JSON.stringify(dataObj))
	//use JSON.stringify()
}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
}

const renderInputs = () => {
	clearStorage("key")
	// show inputs fields
	mainElement.innerHTML = `
		<label for="adjective">adjective:</label>
		<input type="text" name="adjective" id="adjective-input">
		<br>

		<label for="sillyword">sillyword:</label>
		<input type="text" name="sillyword" id="sillyword-input">
		<br>

		<label for="pluralNoun">plural noun:</label>
		<input type="text" name="pluralNoun" id="pluralNoun-input">
		<br>

		<label for="noun">noun:</label>
		<input type="text" name="noun" id="noun-input">
		<br>
	`
	//show 'Tell Story' button
	mainElement.innerHTML += `<button type="button" id="tellStory">Tell Story</button>`
}

const renderStory = () => {
	//get from sessionStorage
	let x = getDataFromStorage("key")
	//show the story
	mainElement.innerHTML = `
		<p>It had been a hard, <b>${x.adjective}</b> day on the <b>${x.sillyword}</b> trail.</p> 
		<p>The cowboys drove a herd of <b>${x.pluralNoun}</b> across the dry plains,</p> 
		<p>kicking up <b>${x.noun}</b> along the way as they looked for somewhere to bed down.</p>
	`
	mainElement.innerHTML += `<button type="button" id="startOver">Start Over</button>`
	//show startOver button
	
	//startOver will invoke renderInputs()
}

mainElement.addEventListener("click", event => {
	if (event.target.id === "startOver") {
		renderInputs()
	}
})

renderInputs();
