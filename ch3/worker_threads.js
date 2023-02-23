const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

if(isMainThread){ //메인스레드
    const threads = new Set(); //set은 중복 되지 않는 배열
    threads.add(new Worker(__filename, {
        workerData: {start: 1}, //초기 데이터
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2}, //초기 데이터
    }));
    for(let worker of threads){
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () =>{
            threads.delete(worker);
            if(threads.size == 0){ //worker들이 모두 사라짐 (일을 다함)
                console.log('워커 끝~');    
            }
        });
    }
}else{ //워커스레드
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}