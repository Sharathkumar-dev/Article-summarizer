
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4218e772d8mshd3036d10d2f0012p1a8adbjsnbdbc9d7a30a6',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

const btn = document.querySelector(".btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.querySelector(".url").value
    const display = document.querySelector(".summary")

    display.innerText = "Please wait article is summarizing ...... "

    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;

    if (!/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/.test(input)) {
        display.innerText = "Please enter a valid URL ..."
    } else {
        fetch(url, options)
        .then(data => data.json())
        .then(data => {
            display.innerText = data.summary
        })
        .catch((error) => {
            console.log(error.message)
            display.innerText = error?.message
        })
    }
})
