onmessage = function() {
    let i = 0;
    setInterval(function() {
        postMessage(i++);
    }, 1)
    
    
}
