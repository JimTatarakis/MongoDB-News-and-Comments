$(document).ready(() => {
// Registration: Making DOM easier to work with
const register = {
    btn: $('#btn-register'),
    username: $('#register-username'),
    email: $('#register-email'),
    password: $('#register-password')
}

// Login: Making DOM easier to work with
const login = {
    btn: $('#btn-login'),
    email: $('#login-email'),
    password: $('#login-password')
}

// DOM: DOM to API calls
const api = {
    registerUser: (newUser) => {
        $.ajax({
            url: "api/users/newuser",
            type: "post",
            data: newUser
        }).then(api.loginUser(newUser))
    },

    // Login
    loginUser: (user) => {
        $.ajax({
            url: "api/users",
            type: "get",
            data: user
        })
    }
}

// DOM: Watch for Submits
// Login Submit

// Registration Submit


})