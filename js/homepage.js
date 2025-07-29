document.addEventListener('DOMContentLoaded', function() {
    startSlideshow();
    displayQuote();
});

function startSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currSlide = 0;

    slides[currSlide].classList.add("active");

    setInterval(() => {
        slides[currSlide].classList.remove("active");
        currSlide = (currSlide + 1) % slides.length;
        slides[currSlide].classList.add("active");
    }, 7500);
}

async function displayQuote() {
    try {
        const resp = await fetch('https://api.quotable.io/random');
        const data = await resp.json();

        document.getElementById('quote-text').textContent = `"${data.content}"`;
        document.getElementById('quote-author').textContent = `- ${data.author}`;
    }
    catch(error) {
        document.getElementById('quote-text').textContent = '"The only way to do great work is to love what you do."';
        document.getElementById('quote-author').textContent = '- Steve Jobs';
    
        console.error(error);
    }
}