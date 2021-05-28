let baseUrl = "https://34.107.89.74:3443"


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
