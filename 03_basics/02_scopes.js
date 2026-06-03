var c = 300
let a = 100


if (true) {
    let a = 10
    const b = 20
    console.log ("INNER:", a );
}

// console.log(a);
// console.log(b);
// console.log(c);

function one () {
    const username = "bilal"

    function two () {
        const website = "bilalagency.com"
        console.log(username)
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "bilal"
    if (username === "bilal") {
        const website = " youtube"
        console.log (username + website);
    }
    // console.log(website);
}

// console.log(username);