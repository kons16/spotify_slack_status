window.addEventListener('load', main, false);

// 通知の許可
if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {});
}

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    var flag = false;

    function jsLoaded() {
        var progress_time = document.getElementsByClassName('playback-bar__progress-time');
        progress_time = progress_time[0].innerText.split(':');
        sec = parseInt(progress_time[1]);
        var info = document.getElementsByClassName('track-info ellipsis-one-line');
        var art = document.getElementsByClassName('now-playing__cover-art');

        var music_title = info[0].innerText;
        var artist_name = info[1].getElementsByClassName(
                                    'react-contextmenu-wrapper')[1].innerText;
        var url = art[0].getElementsByClassName('cover-art-image')[0].
                            style.backgroundImage.split("\"");

        flag = false;
        if(flag == false & sec >= 1 & sec <= 2){
            var options = {
                body: artist_name,
                icon: url[1]
            };
            var p = new Notification(music_title, 
                                     options);
            setTimeout(p.close.bind(p), 6000); 
            flag = true;
        }
    }
}
