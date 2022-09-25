const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

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

// Listen for button click and call getJoke function on click.
jokeBtn.addEventListener('click', getJoke);