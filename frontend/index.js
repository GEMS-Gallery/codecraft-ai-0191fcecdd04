import { backend } from 'declarations/backend';

const generateBtn = document.getElementById('generateBtn');
const generatedName = document.getElementById('generatedName');
const submitForm = document.getElementById('submitForm');
const userNameInput = document.getElementById('userNameInput');
const userNamesList = document.getElementById('userNamesList');

generateBtn.addEventListener('click', async () => {
    try {
        const name = await backend.generateName();
        generatedName.textContent = name;
    } catch (error) {
        console.error('Error generating name:', error);
    }
});

submitForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = userNameInput.value.trim();
    if (name) {
        try {
            await backend.addUserName(name);
            userNameInput.value = '';
            await updateUserNames();
        } catch (error) {
            console.error('Error submitting name:', error);
        }
    }
});

async function updateUserNames() {
    try {
        const names = await backend.getUserNames();
        userNamesList.innerHTML = names.map(name => `<li>${name}</li>`).join('');
    } catch (error) {
        console.error('Error fetching user names:', error);
    }
}

// Initial load of user names
updateUserNames();
