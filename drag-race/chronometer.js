const chronometer= (() => {

    let _centi = 0
    let _minutes = 0
    let _seconds = 0
    let _totalTime = 0

    let clock;

    const clearAll = () => {
         _centi = 0
         _minutes = 0
         _seconds = 0
         _totalTime = 0
         setHtml('')
    }

    const start = () => {
        clock = setInterval(() => timer(), 10)
        console.log('pass')
    }
    const stop = () => {
        clearInterval(clock)
        return _totalTime
    }

    const timer = () => {
        _totalTime +=10
        _centi +=1

        if (_centi == 100){
            _centi = 0
            _seconds ++
        }

        if(_seconds == 60){
            _seconds = 0
            _minutes ++
        }

        setHtml(formatTime(_minutes,_seconds,_centi))

    }

    function formatTime(minutes,seconds,centi){
        let formatTime = (minutes < 10? "0"+ minutes : minutes)+":"+
        (seconds < 10? "0"+ seconds : seconds)+":"+centi
        return formatTime
    }

    function setHtml(value){
        document.querySelector('div').innerText = value
    }

    return {
        start,
        stop,
        clearAll
    }
})()