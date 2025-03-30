async function checkUrl() {
    const urlInput = document.getElementById('urlInput').value;
    const resultElement = document.getElementById('result');

    try {
        const response = await fetch('/check-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: urlInput })
        });

        const data = await response.json();
        resultElement.textContent = data.message;
    } catch (error) {
        resultElement.textContent = 'Error checking URL';
    }
}
