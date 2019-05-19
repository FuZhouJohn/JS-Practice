window.jQuery = function() {};
window.jQuery.ajax = function(url, method, body, success, fail) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 400) {
                success(request.responseText);
            } else {
                fail(request);
            }
        }
    };
    request.send(body);
};

button.addEventListener("click", e => {
    window.jQuery.ajax(
        "/xxx",
        "POST",
        "a=1&b=2",
        responseText => {
            console.log(responseText);
        },
        request => {
            console.log(request);
        }
    );
});
