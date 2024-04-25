const express = require('express');

const app = express();
// Disable the X-Powered-By header
app.disable('x-powered-by');
// Set Pug as the view engine
// Set Pug as the view engine and specify the views directory
app.set('view engine', 'pug');

// Define a route
app.get('/', (req, res) => {
    res.render('index', { title: 'My Website' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
 