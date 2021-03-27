import React from 'react';

import sound from "../sound/example_sound.mp3"

let notificationLock = false;

export default ({ position }) => {


    const sendNotif = () => {
        console.log("sendNotif")
        var notification = new Notification("Wyprostuj się!", { tag: "Wyprostuj się!" });
        const audio = new Audio(sound);
        audio.play();
    }

    window.Notification.requestPermission().then(function (result) {
        console.log(result);
    });


    if (!position) {
        console.log(position)
        if (!notificationLock) {
            notificationLock = true;
            sendNotif();
            setTimeout(() => {
                notificationLock = false;

            }, 5000)
        }
    }

    return (<>

    </>)

}
