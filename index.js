const express = require('express');
const app= express();
const UserRoutes = require('./routes/UserRoutes');
const port = 4200;
app.use('/files',express.static("public"));
app.use('/myapi', UserRoutes);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});