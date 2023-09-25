(function() {
    emailjs.init('y-whx047ompurk8zA');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_kfdderh', 'template_0os3xel', this)
           .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        this.reset();                    
    });
}