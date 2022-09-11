const btn = document.querySelector("button")


// Push notification will ask for permission from the user and then display message onclick event of the button
btn.addEventListener("click", () => {
    
    Notification.requestPermission().then( perm =>{

        let notification;
        if(perm == "granted"){

            notification = new Notification("Example Notification ",{
                
                body:"Hello World",
                data:'I like peas.',
                icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/600px-Windows_Settings_app_icon.png",
                renotify:true,
                vibrate: [200, 100, 200],
                lang: 'en-US',  
                tag:"Example Notif"

            })

        }
        else{
            console.log("Permission to send notifications has been denied")
        }

    })
})


// Hack Alert this can be disturbing. Notification sent after every 1 second


let notif;
let interval;
document.addEventListener("visibilitychange",() => {

    if(document.visibilityState === "hidden"){

        let leaveDate = new Date()

        interval  = setInterval(() => {
            notif =  new Notification("Come back to Eshaan.com", {
                data:"visibilty hidden",
                icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZt4DuFaryu_S5KzSkCH3VnM9lQSnNyRmVw&usqp=CAU",
                tag: "come back",
                body: `Please come back you have gone for ${(Math.round((new Date() - leaveDate)/1000))} seconds`,
                silent:false,
                vibrate:[100,200,100]
            })
        },1000)

    }else{

        if(interval) clearInterval(interval);

        if (notif) notif.close();

    }
})

// Cursor live tracker

var pointerX = -1;
var pointerY = -1;
document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
    // console.log(pointerX, pointerY)
}

let box1 = document.getElementById("pointer-x");
let box2 = document.getElementById("pointer-y");


function pointerCheck() {
	// console.log('Cursor at: '+pointerX+', '+pointerY);
    box1.innerText = "X-coords: " + pointerX;
    box2.innerText = "Y-coords: " + pointerY;

}

setInterval(pointerCheck, 100);

