function mockFetch(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    console.log(`получен пользователь с email: ${email.value} и паролем: ${password.value}`);
}