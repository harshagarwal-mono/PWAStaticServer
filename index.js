const express = require('express');
const path = require('path');
const { existsSync } = require('fs');
const app = express();

const port = 4000;
const publicFolderPath = '/Users/harshagarwal/mono/mtf-monorepo/apps/webui/.output/public';

app.use(express.static(publicFolderPath));

app.get('/dtapppwa/:version/*', function (request, response) {
    const fileName = request.params[0] || 'index.html';
    const updatedFileName = path.extname(fileName) ? fileName : `${fileName}.html`;
    const filePath = path.join(publicFolderPath, updatedFileName);

    return response.sendFile(filePath);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
