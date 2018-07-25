function main() {
    if(window.Worker) {
        let start = document.getElementById('start');
        let stop = document.getElementById('stop');
        let alerter = document.getElementById('alert');
        let message = document.getElementsByClassName('message')[0];
        var myWorker;
        
        start.addEventListener("click", function() {
            if((typeof myWorker) === 'object') {
                console.log('worker已经启动');
                return ;
            }
            myWorker = new Worker('js/work_one.js');
            myWorker.postMessage(1)
            if((typeof myWorker) === 'object') {
                myWorker.addEventListener('message', function(e) {
                    console.log(e.data);
                    message.innerHTML = e.data;
                })
            }
        }, false);

        stop.addEventListener("click", function() {
            if((typeof myWorker) === 'object') {
                myWorker.terminate();
            }
            // myWorker.removeEventListener('message');
            myWorker = '';
        }, false);

        alerter.addEventListener("click", function() {
            alert('我现在进行阻塞了');
        }, false);
    }else {
        console.log('你的浏览器不支持Worker');
    }

} 

main();