export const createCanvas = (width = 300, height = 300, id) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    id && (canvas.id = id)
    document.body.appendChild(canvas)
    return canvas
}

const modeSelector = document.getElementById('mode');
modeSelector.addEventListener(
    'change',
    function () {
        const val = this.value;
        if (val === '1') {
            requestAnimationFrame(draw)
        } else {
            requestAnimationFrame(draw2)
        }
    },
    false
)

const musicSelector = document.getElementById('music');

musicSelector.addEventListener(
    'change',
    function () {
        const val = modeSelector.value;
        document.querySelector('audio').setAttribute('src', this.value)
        if (val === '1') {
            requestAnimationFrame(draw)
        } else {
            requestAnimationFrame(draw2)
        }
    },
    false
)

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

const audioSourceByUser = (audioCtx, analyser) => {
    if (navigator.getUserMedia) {
        console.log('getUserMedia supported.')
        navigator.getUserMedia(
            // constraints - only audio needed for this app
            {
                audio: true
            },
            // Success callback
            function (stream) {
                const source = audioCtx.createMediaStreamSource(stream)
                source.connect(analyser)
                // analyser.connect(audioCtx.destination);
                if (modeSelector.value === '1') {
                    requestAnimationFrame(draw)
                } else {
                    requestAnimationFrame(draw2)
                }
            },
            // Error callback
            function (err) {
                console.log('The following gUM error occured: ' + err)
            }
        )
    } else {
        console.log('getUserMedia not supported on your browser!')
    }
}

const W = 500
const H = 500

const canvas = createCanvas(W, H)
const ctx = canvas.getContext('2d')
const myAudio = document.querySelector('audio')

// ??????web audio ???????????????
const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
// ???????????????
const source = audioCtx.createMediaElementSource(myAudio)
// ??????????????????
const analyser = audioCtx.createAnalyser()
// ??????
analyser.fftSize = 1024
const bufferLength = analyser.fftSize

const dataArray = new Uint8Array(bufferLength)

// ???????????????
source.connect(analyser)
// // ????????????
source.connect(audioCtx.destination)

const draw = () => {
    // ??????????????????????????????????????????????????????????????????????????? Uint8Array?????????????????????????????????
    analyser.getByteTimeDomainData(dataArray)
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = 'rgb(200,200,200)'
    ctx.fillRect(0, 0, W, H)
    ctx.strokeStyle = 'rgb(0,0,0)'
    ctx.beginPath()
    const sliceWidth = (W * 1.0) / bufferLength
    let x = 0
    for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128.0
        let y = (v * H) / 2
        if (i === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
        x += sliceWidth
    }
    ctx.lineTo(W, H / 2)
    ctx.stroke()
    requestAnimationFrame(draw)
}

const draw2 = () => {
    // ?????????????????????????????????????????????????????????Uint8Array?????????????????????????????????
    analyser.getByteTimeDomainData(dataArray)
    ctx.clearRect(0, 0, W, H)
    ctx.fillStyle = 'rgb(0,0,0)'
    ctx.fillRect(0, 0, W, H)

    const barWidth = (W / bufferLength) * 2.5
    let barHeight
    let x = 0

    for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]
        ctx.fillStyle = `rgb(${barHeight + 100},${(dataArray[i] * Math.random()) * 10},${(dataArray[i] * Math.random()) * 10})`
        ctx.fillRect(x, H - barHeight, barWidth, barHeight)
        x += barWidth + 1
    }

    requestAnimationFrame(draw2)
}

window.onload = function () {
    audioSourceByUser(audioCtx, analyser)
}