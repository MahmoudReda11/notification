// main.js

let num = 1;

 setInterval(() => {
   
// التحقق مما إذا كانت المتصفح تدعم Service Worker
if ('serviceWorker' in navigator && 'PushManager' in window) {
    // تسجيل Service Worker
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('تم تسجيل Service Worker بنجاح:', registration);
            
            // طلب إذن الإشعارات من المستخدم
            return Notification.requestPermission();
        })
        .then(function(permission) {
            if (permission === 'granted') {
                console.log('تمت الموافقة على الإشعارات');
                // يمكنك هنا إرسال الإشعار
                sendNotification();
            }
        })
        .catch(function(error) {
            console.log('فشل تسجيل Service Worker:', error);
        });
}

// إرسال الإشعار
function sendNotification() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(' abo Reda llsafar we ' + num, 
            {
                body: 'نص الإشعار',
            });
            num++
        });
      
    }
}


}, 1000);

// let num = 7
// setInterval(() => {
//     Notification.requestPermission().then(perm => {
//         if(perm === "granted"){
//             new Notification("Example Notification", {image : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
//                 body : "abo Reda " + num,
//                 data: {hello : " world"},
//                 icon: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                
           


//             })
//             num++;
//         }
//     })
// }, 50000);