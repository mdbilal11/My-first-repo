const user = {
    username: "Bilal",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username} , Welcome to website.`);
        // console.log(this);

    }

}
// user.WelcomeMessage()
// user.username = "sami"
// user.WelcomeMessage()

// console.log(this);


function ice() {
    console.log(this);
}

ice()