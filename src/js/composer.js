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

    //console.log(newEmailData)

    addEmailToSent(newEmailData)

    composerForm.reset()
    composerWindow.style.display = 'none'
});

function addEmailToSent(newEmailData) {
    const sentList = document.querySelector('#sent-list')

    // email item creation:
    const emailItem = document.createElement('div')
    emailItem.className = 'email-item'

    const nowDate = new Date()
    const timeStr = now.toLocaleTimeString()
    const dateStr = now.toLocaleDateString()

    emailItem.innerHTML = `
        <div class="email-sender">To: ${newEmailData.to}</div>
        <div class="email-subject">${newEmailData.subject}</div>
        <div class="email-preview">${newEmailData.body.substring(0, 35)}...</div>
        <div class="email-date">${dateStr}, ${timeStr}</div>
    `
    
    if (sentList.firstChild) {
        sentList.insertBefore(emailItem, sentList.firstChild)
    } else {
        sentList.appendChild(emailItem)
    }
}