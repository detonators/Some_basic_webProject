const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
//
getData()

//Filter for data
filter.addEventListener('input', (e) => filterData(e.target.value))
 

// creating a asynchronous function 

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
              
    //API used here to get random user data
    
    const { results } = await res.json()

    // Clear result
    
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        // creating the list items for each users
        
        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        //user Name and location is being fetched

        result.appendChild(li)  //Putting it in the result
    })
}

//Function for filtered data..................

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
