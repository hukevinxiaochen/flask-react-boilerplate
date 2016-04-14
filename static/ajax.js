// Ajax Request Object

var sendPreviewXhr = function () {
    var previewXhr = new XMLHttpRequest();

    previewXhr.onreadystatechange = function () {
        if (previewXhr.readyState == 4) {
            if ((previewXhr.status >= 200 && previewXhr.status < 300) || previewXhr.status == 304){
                       alert(previewXhr.responseText);
            } else {
                    alert("Request was unsuccessful:" + previewXhr.status);
            }
        }
    };

    // (String(method), String(url), Boolean(async)) 
    previewXhr.open("post", "/prev", true);

    previewXhr.send(Interpreter.mdPayload);
};


