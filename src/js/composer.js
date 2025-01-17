const composeEmailBtn = document.querySelector('.compose-btn') // link compose-btn and composeEmailBtn variable
const composerWindow = document.querySelector('.composer-window') // save composer window into composerWindow variable
const closeBtn = document.querySelector('.close-btn')
const composerForm = document.querySelector('.composer-form') // all data added to composer

 // при нажатии кнопки создать письмо откроется компоузер
composeEmailBtn.addEventListener('click', () => {
    composerWindow.style.display = 'block';
})

// закрытие окна Х
closeBtn.addEventListener('click', () => {
    composerWindow.style.display = 'none'
})

 // close composer button if clicked outside of composer
composerWindow.addEventListener('click', (event) => {
    if (event.target === composerWindow) {
        composerWindow.style.display = 'none'
    }
})

composerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailTo = document.querySelector("#email-to").value; // .value извлекает данные из инпутов
    const emailSubject = document.querySelector("#email-subject").value;
    const emailBody = document.querySelector(".email-body").value;

    if (emailTo.trim() === "" || emailSubject.trim() === "" || emailBody.trim() === "") {
        alert("Please fill in all fields");
        return;
    } // в будущем можно оставить только проверку на поле TO:

    const newEmailData = {
        to: emailTo,
        subject: emailSubject,
        body: emailBody,
    };

    addEmailToSent(newEmailData)

    composerForm.reset()
    composerWindow.style.display = 'none' // close composer window
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