var nowPage = 0;
var config = {
    url: 'http://192.168.1.88:8002/'
}
var body = document.querySelector('div.content')
body.style.height = window.innerHeight + 'px';
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', function() {
    statistical('download')
    window.open('http://www.star-fans.com')
})
var logo = document.querySelector('div.logo')
logo.addEventListener('click', function() {
    nowPage = 0;
    document.body.setAttribute('class', 'page1');
})
btn1.addEventListener('click', function() {
    if (nowPage == 2) {
        statistical('sqtj')
        var text1 = document.querySelector('.tex1').value
        var text2 = document.querySelector('.tex2').value
        var text3 = document.querySelector('.tex3').value
        if (text1 == '' || text2 == '' || text3 == '') {
            alert('请正确填写!')
            return
        }
        if (!validatemobile(text2)) {
            return
        }
        register(text1, text2, text3, function() {
            document.querySelector('.tex1').value = '';
            document.querySelector('.tex2').value = '';
            document.querySelector('.tex3').value = '';
        })
    } else {
        statistical('qryqm')
        var input1 = document.querySelector('.inp1').value
        var input2 = document.querySelector('.inp2').value
        if (input1 == '' || input2 == '') {
            alert('请正确填写!')
            return
        }
        if (!validatemobile(input1)) {
            return
        }
        check(input1, input2, function(e) {
            document.querySelector('.inp1').value = '';
            document.querySelector('.inp2').value = '';
            if (e.msg == '申请成功!') {
                document.body.setAttribute('class', 'page2');
            } else {
                alert(e.msg)
            }
        })
    }
})
function statistical(event) {
    try {
        MtaH5.clickStat(event);
    } catch ( e ) {
        console.log(e);
    }
}
adjustCanvas()
function adjustCanvas(argument) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w > 650) {
        w = 650
    }
    h = w * 16 / 9
    if (h > document.body.innerHeight) {
        w = h * 9 / 16
        h = window.innerHeight;
    }
    document.getElementById('glcanvas').width = w;
    document.getElementById('glcanvas').height = h;
}

function goApplication() {
    statistical('sqnc')
    nowPage = 2;
    document.body.setAttribute('class', 'page3');
}
function register(mobilephone, qqinfo, message, cb) {
    var url = config.url + 'insidetest/applyinfo'
    var xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP') : new window.XMLHttpRequest();
    xhr.open('POST', url, true);
    if ('overrideMimeType' in xhr) xhr.overrideMimeType('text/plain');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        var status = xhr.status;
        if (status === 0 || status === 200) {
            alert(JSON.parse(xhr.responseText).msg)
            cb()
        } else {
            throw new Error('Could not load ' + url);
        }
    };

    xhr.send('mobilephone=' + mobilephone + '&qqinfo=' + qqinfo + '&message=' + message);
}
function check(mobilephone, code, cb) {
    var url = config.url + 'insidetest/insidetest'
    var xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP') : new window.XMLHttpRequest();
    xhr.open('POST', url, true);
    if ('overrideMimeType' in xhr) xhr.overrideMimeType('text/plain');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        var status = xhr.status;
        if (status === 0 || status === 200) {
            cb(JSON.parse(xhr.responseText))
        } else {
            throw new Error('Could not load ' + url);
        }
    };

    xhr.send('mobilephone=' + mobilephone + '&code=' + code);
}
function validatemobile(mobile) {
    if (mobile.length == 0) {
        alert('请输入手机号码！');
        return false;
    }
    if (mobile.length != 11) {
        alert('手机号填对了吗？');
        return false;
    }

    var myreg = /^(((1[0-9][0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
        alert('手机号填对了吗？');
        return false;
    }
    return true
}
window.onresize = function() {
var body = document.querySelector('div.content')
body.style.height = window.innerHeight + 'px';
}
