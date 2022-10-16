

const useWhatssApp = () => {
    const evento = document.getElementById('send')
    const sendContactForm = () => {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let number = 595971488547;
        var win = window.open(`https://wa.me/${number}?text=Hi%20my%20name%20is%20${name}
%20${email}, Subject:%20${message}`, '_blank');
    }
    evento.addEventListener('click', sendContactForm)
}

export default useWhatssApp;