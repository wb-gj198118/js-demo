document.querySelector('.tbody').innerHTML = new Array(1000)
    .fill({
        id: 1,
        name: '李四',
        phone: '199****9999',
        address: 'xx省xx市xx区xx街道xx小区xx栋xx号',
        createTime: new Date().getTime(),
    })
    .map((v, i) => {
        return `<div class="tr">
            <div class="fixedLeft flex1 td">${(i + 1) * 100}</div>
            <div class="td flex2">${v.name}</div>
            <div class="td flex3">${v.phone}</div>
            <div class="td flex4">${v.address}</div>
            <div class="td flex5">${v.createTime}</div>
        </div>`;
    })
    .join('');