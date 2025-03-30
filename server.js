const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/check-url', async (req, res) => {
    const { url } = req.body;

    // Simple logic to check if the URL is legitimate or a scam
    const isLegitimate = await checkUrlLegitimacy(url);

    if (isLegitimate) {
        res.json({ message: 'The site is legitimate.' });
    } else {
        res.json({ message: 'The site is a scam.' });
    }
});

async function checkUrlLegitimacy(url) {
    // Check if the URL is explicitly marked as a scam
    if (url === 'https://7hiidude.click/') {
        return false;
    }

    // Placeholder logic for URL legitimacy check
    // You can replace this with actual logic, such as checking against a database of known scam sites
    try {
        const response = await axios.get(url);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
