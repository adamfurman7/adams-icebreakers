const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');
const fact = document.querySelector('#fact');
const factBtn = document.querySelector('#factBtn');

// Connect to API to get joke.
const getJoke = async () => {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: {
                Accept: "application/json",
            },
        });
        joke.textContent = response.data.joke;
        // console.log(joke);
    } catch (error) {
        console.log(error);
    }
    // console.log('getJoke worked!');
}

const getFact = async () => {
    try {
        const response = await axios.get('https://api.api-ninjas.com/v1/facts?limit=1', {
            headers: {
                'X-Api-Key': 'kk2ROoBBl6nrrFF4htgxxg==xieKOXfvrEiqNJv2',
            },
        });
        fact.textContent = response.data[0].fact + ".";
        console.log(response.data[0].fact);
    } catch (error) {
        console.log(error);
    }
}

// Listen for button click and call getJoke function on click.
jokeBtn.addEventListener('click', getJoke);
factBtn.addEventListener('click', getFact);