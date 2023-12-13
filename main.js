const button = document.querySelector('button');

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            new Notification("Example Notification", {
                body : "this is more text2",
                data: {hello : " world"}



            })
        }
    })
})


setInterval(() => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            new Notification("Example Notification", {image : "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                body : "abo Reda",
                data: {hello : " world"},
                icon: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
                



            })
        }
    })
}, 5000);