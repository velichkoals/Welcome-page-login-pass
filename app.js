// todo: 1.welcome + login, 2. доделать мои плажки, чтоб добавить в github

const button = document.querySelector('.submit-btn')
const inputLogin = document.querySelector('.user-input-login')
const inputPass = document.querySelector('.user-input-pass')
const mainSection = document.querySelector('.main-section')
const heading = document.querySelector('.heading')

let correctLogin = false
let correctPass = false
let tryAgainBar
let successfulBar
let invalidCount = 0

let user = [
    {login : 'admin', password: 'admin'},
    {login : 'denis123', password: 'denis123'},
    {login: 'velichkoals',  password: 'velichkoals'}
]


button.addEventListener('click', () => {
    for (let i = 0; i < user.length; i++) {
        if (inputLogin.value === user[i].login && inputPass.value === user[i].password) {
            correctLogin = true
            correctPass = true
        }
    }

    if (correctLogin === true && correctPass === true) {
        if (invalidCount > 0) {
        mainSection.removeChild(tryAgainBar)
        }

        // alert('You have successfully logged in')
        successfulBar = document.createElement('div');
        successfulBar.innerHTML =
            `<div class="successful-logged"><img id="success-mark" src="https://img.icons8.com/fluency/20/000000/checkmark.png"/>You have successfully logged in</div>`
        mainSection.appendChild(successfulBar)

        heading.classList.add('heading-success')

        inputLogin.classList.remove('user-input-failed-login')
        inputPass.classList.remove('user-input-failed-pass')

        inputLogin.setAttribute('disabled', 'disabled')
        inputPass.setAttribute('disabled', 'disabled')

        button.disabled = true
        button.classList.add('submit-btn-disabled')


    }
    else if (correctLogin === false || correctPass === false) {
        // console.clear()
        invalidCount++
        console.log('Try again')

        inputLogin.classList.add('user-input-failed-login')
        inputPass.classList.add('user-input-failed-pass')
        inputLogin.value = ''
        inputPass.value = ''

        if (invalidCount === 1) {
            tryAgainBar = document.createElement('div');
            tryAgainBar.innerHTML = `<div class="try-again-bar">*The username or password is incorrect</p></div>`
            mainSection.appendChild(tryAgainBar)
            mainSection.insertBefore(tryAgainBar, button)
            }
        }
    })



// TODO: Correct solution

// let user = [
//     { login : 'admin' },
//     { login : 'denis123' },
//     { login: 'velichkoals' }
// ]

// let correctLogin = false
// let enterLogin
// enterLogin = prompt('Enter your login')
//
// for (let i = 0; i < user.length; i++) {
//     if (enterLogin === user[i].login) {
//         correctLogin = true
//     }
// }
// if (correctLogin === true) {
//     console.log(correctLogin)
// } else {
//     console.log(user[0].login)
//     console.log(user[1].login)
//     console.log(user[2].login)
//     console.clear()
// }
// if (enterLogin === null) {
//     alert("You need to type your login!")
// }