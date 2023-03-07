class Transmiter {

    sendData(player) {
        let update = new Request('index.php?route=update', {
            method: 'POST',
            body: JSON.stringify({ positionX: player.positionX, positionY: player.positionY })
        })

        fetch(update)
            .then(res => res.text())
            .then(res => {
                console.log(X);
                console.log(Y);
            })
    }

    recieveData() {
        let myRequest = new Request('index.php?route=refresh', {
            method: 'POST',
            body: JSON.stringify({})
        })
        fetch(myRequest)
            .then(res => res.text())
            .then(res => {
                RTelements.innerHTML = res;
                console.log('refresh');
                console.log(res);
            })
    }
}

export default Transmiter
