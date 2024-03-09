const { Client, Account, ID } = Appwrite;
const container = document.getElementById('container');
const registerToggle = document.getElementById('register_toggle');
const loginToggle = document.getElementById('login_toggle');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerName = document.getElementById('register_name')
const registerEmail = document.getElementById('register_email')
const registerPassword = document.getElementById('register_password')


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65eb671652d08420c8f7');

const account = new Account(client);



registerToggle.addEventListener('click', () => {
    container.classList.add("active");
});

loginToggle.addEventListener('click', () => {
    container.classList.remove("active");
});


registerBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    try {
        const name = registerName.value
        const email = registerEmail.value
        const password = registerPassword.value

        await account.create(ID.unique(), email, password, name);
        await account.createVerification('http://127.0.0.1:5501/BiteSquad')

    }
    catch (err) {
        console.error(err)
    }
})


