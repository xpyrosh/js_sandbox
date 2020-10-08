document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    // Optional For Spinners/Loaders
    xhr.onprogress = function(){ // Readystate 3
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            console.log(this.responseText);

            // Do something with data
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }

    }

    xhr.onerror = function() {
        console.log('Request error..');
    }

    xhr.send();

    /*
    // Ready State Values
    0: request no init
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    */

    // Common HTTP Statuses
    // 200: OK
    // 403: Forbidden
    // 404: Not Found
}