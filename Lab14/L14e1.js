const fs = require ('fs');

let filename =__dirname+'/user_data.json';

let user_reg_data;

if(fs.existsSync(filename)){
    let data = fs.readFileSync(filename, 'utf-8');

    user_reg_data = JSON.parse(data);

    let user_stats = fs.statSync (filename);

    let stats_size = user_stats.size;

    console.log(`The file name ${filename} has ${stats_size} characters.`);
} else {
    console.log(`The file name ${filename} foes not exist.`);
}

//p4 lab 12
let username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');

let express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    let login_form = `
<body>
<form action="/login" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(login_form);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

// Process loging form POST & redir to loffed in page if good, back to login page if not
//Get uses enterd info
let username_entered = request.body['username'];
let password_entered = request.body ['password'];

let response_msg = "";
let errors = false;

//Check username exist in user reg data
if (typeof user_reg_data[username_entered] != 'undefined') {
    //Check passwored matches username
    if (password_entered == user_reg_data[username_entered].password) {
        response_msg = `${username_entered} is logged in.`;
    } else {
        response_msg = `Incorrect password.`;
        errors = true;
    }
    } else {
        response_msg = `${username_entered} does not exist.`;
        errors = true;
    }

    if (!errors) {
        response.send(response_msg);
    } else {
        response.redirect(`./login?error=${response_msg}&username=${username_entered}`);
    }

});

app.listen(8080, () => console.log(`listening on port 8080`));

app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form
    let new_user = request.body.username;

    let erroes = false;
    let response_msg = "";

    if (typeof user_reg_data[new_user] != 'undefined') {
        response_msg = 'Username unavailable. Please enter a different username.';
        errors = true;
    } else if (request.body.password == request.body.repeat_password) {
        user_reg_data[new_user] = {};
        user_reg_data[new_user].name = request.body.name;
        user_reg_data[new_user].password = request.body.password;
        user_reg_data[new_user].email = request.body.email;

        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect(`./login`);

    } else{
        response_msg = 'Repeat password does not match with password.'
        errors = true;
    }

    if (errors) {
        response.send(response_msg);
    }
        
 });