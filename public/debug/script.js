let baseUrl = "https://localhost:3000"


function sendRequest(method, url, headers, body, callback) {
    let options = {
        method: method,
        body: body,
        headers: headers
    }

    fetch(baseUrl + url, options)
    .then(r => r.text())
    .then(callback)
    .catch(console.error)
}

function deleteSmth(from, id) {
    let url = `${baseUrl}/api/${from}/${id}`
    let options = {
        method: 'DELETE',
    }

    fetch(url, options);
}