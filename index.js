const express = require('express')
const app = express()
const port = 4000
const path = require('path');

const publicFolderPath = '/Users/harshagarwal/mono/mtf-monorepo/apps/webui/.output/public';

app.use(express.static(publicFolderPath))

app.get('/dtapppwa/:version/*', function (request, response) {
    response.sendFile(path.resolve(__dirname, path.join(publicFolderPath, request.params[0])));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
