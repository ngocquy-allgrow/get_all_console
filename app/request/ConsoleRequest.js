class ConsoleRequest {
    validate(url) {
        var errors = {};
        if (!url) {
            errors.url = ['Url is required'];
        } else {
            if (url.length < 6) {
                errors.url = ['Url cannot be less than 6'];
            }
            
            if (url.length > 3000) {
                errors.url = ['Url cannot be bigger than 3000'];
            }
            
            var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

            if (!pattern.test(url)) {
                errors.url = ['Url invalid'];
            }
        }

        return errors;
    }
}

module.exports = ConsoleRequest;