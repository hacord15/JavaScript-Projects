  
        const api_url = "https://api.quotable.io/quotes/random?tags=life,famous-quotes";
        const quote = document.getElementById("quote");
        const author = document.getElementById("author");



        async function getQuote(url) {
            const response = await fetch(url);
            var data = await response.json();
            quote.innerHTML = data[0].content;
            author.innerHTML = data[0].author;
        }
        // href="https://twitter.com/intent/tweet?text=Hello%20world"
        getQuote(api_url);

        function tweet() {
            window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  --" + author.innerHTML, "Share on X", "width=650, height=350");
        }

    
