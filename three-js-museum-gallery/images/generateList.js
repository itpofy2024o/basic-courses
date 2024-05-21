const fs = require('fs');

fs.readdir('./images', (_, files) => {
    files = files.filter(file => !file.endsWith(".js") && !file.endsWith(".json"));
    const list = files.map(file => ({
        title: file.split('_').slice(0, -1).join('.'),
        file,
    }));
    let json = JSON.stringify({images:list}, null, 4);
    fs.writeFileSync('./images/images.json', json);
});