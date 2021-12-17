//to get the tag element from the html file

const tagsEl = document.getElementById('tags')

//now for text area

const textarea = document.getElementById('textarea')

textarea.focus()

// to leastion to keyup or key down

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10) // clearing the input 

        randomSelect()
    }
})

function createTags(input) {
	
	
    //used split to make the letters on ether side of the comma an array.
	
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    // filter to remove empty space.
    
    tagsEl.innerHTML = ''
	
// Taking the element and using foreach to loop through it
	
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
// To make random selections

function randomSelect() {
    const times = 30


    // created new variable 

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

// Defined the time, how much it will take to highlight and to unhighlight the tags.

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

// Used Query to select all the options.

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

// function to highlight

function highlightTag(tag) {
    tag.classList.add('highlight')
}
// To un highlight the tags

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
