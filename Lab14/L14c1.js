const fs = require ('fs');

let filename =__dirname+'/user_data.json';


if(fs.existsSync(filename)){
    let data = fs.readFileSync(filename, 'utf-8');

    let user_reg_data = JSON.parse(data);

    let user_stats = fs.statSync (filename);

    let stats_size = user_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters.`);
} else {
    console.log(`The file name ${filename} foes not exist.`);
}

let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not



});

app.listen(8080, () => console.log(`listening on port 8080`));