const composeEmailBtn = document.querySelector('.compose-btn') // link compose-btn and composeEmailBtn variable
const composerWindow = document.querySelector('.composer-window') // save composer window into composerWindow variable

composeEmailBtn.addEventListener('click', () => {
    composerWindow.style.display = 'block';
}) // при нажатии кнопки создать письмо откроется компоузер

const closeBtn = document.querySelector('.close-btn')
closeBtn.addEventListener('click', () => {
    composerWindow.style.display = 'none'
})

composerWindow.addEventListener('click', (event) => {
    if (event.target === composerWindow) {
        composerWindow.style.display = 'none'
    }
}) // close composer button if clicked outside of composer

const composerForm = document.querySelector('.composer-form')

composerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailTo = document.querySelector("#email-to").value;
    const emailSubject = document.querySelector("#email-subject").value;
    const emailBody = document.querySelector(".email-body").value;

    if (emailTo.trim() === "" || emailSubject.trim() === "" || emailBody.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    const newEmailData = {
        to: emailTo,
        subject: emailSubject,
        body: emailBody,
    };

    console.log(newEmailData)
});