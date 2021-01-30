window.addEventListener('load', main, false);

// 通知の許可
if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {});
}

function main(e) {
    let jsInitCheckTimer = setInterval(jsLoaded, 1000);
    let flag = false;

    function jsLoaded() {
        flag = false;
        let progress_time = document.getElementsByClassName('playback-bar__progress-time');
        progress_time = progress_time[0].innerText.split(':');
        let min = parseInt(progress_time[0]);
        let sec = parseInt(progress_time[1]);
        let art = document.getElementsByClassName('now-playing__cover-art');

        let music_title = document.getElementsByClassName('now-playing-bar__left')[0].getElementsByTagName("a")[1].outerText;
        let artist_name = document.getElementsByClassName('now-playing-bar__left')[0].getElementsByTagName("a")[2].outerText;
        let url = art[0].getElementsByClassName('cover-art-image')[0].src;

        if(flag == false & min == 0 & sec == 2){
            let options = {
                body: artist_name,
                icon: url
            };
            let p = new Notification(music_title, 
                                     options);
            setTimeout(p.close.bind(p), 5000); 
            flag = true;
        }
    }
}
