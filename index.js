
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Welcome to P90</h1>');
});
app.get('/ping', (req, res) => res.json({ status: 'ok', project: 'P90' }));
app.listen(PORT, () => console.log(`✅ P90 is running on port ${PORT}`));
        