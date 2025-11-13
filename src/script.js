document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const messageDiv = document.getElementById('message');

    if (button) {
        button.addEventListener('click', () => {
            messageDiv.textContent = 'تم الضغط على الزر بنجاح!';
            console.log('Button clicked!');
        });
    }
});