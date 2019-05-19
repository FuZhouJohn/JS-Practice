window.jQuery = function() {};
window.jQuery.ajax = function({ url, method, body }) {
    return new Promise(function(reslove, reject) {
        let request = new XMLHttpRequest();
        request.open(method, url);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 400) {
                    reslove(request.responseText);
                } else {
                    reject(request);
                }
            }
        };
        request.send(body);
    });
};

button.addEventListener("click", e => {
    jQuery
        .ajax({
            url: "/112",
            method: "POST",
            body: "a=1&b=2"
        })
        .then(
            responseText => {
                console.log(responseText);
            },
            request => {
                console.log(request);
            }
        );
});
