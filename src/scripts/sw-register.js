
const registerSw = () => {
  if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js')
        .then(function() {
          console.log('ServiceWorker Registration OK');
        })
        .catch(function(){
          console.log('ServiceWorker Registration Failed');
        });
      })
  } else {
      console.log("ServiceWorker Not Supported")
  }
}

const base64ToArray = base64String => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, "+")
    .replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const permission = () => {
  if ("Notification" in window) {
    Notification.requestPermission().then(function(result) {
      if (result === "denied") {
        console.log("Notification Feature Not Allowed");
        return;
      } else if (result === "default") {
        console.error("Permission Blocked");
        return;
      }

      if ("PushManager" in window) {
        const opt = {
          userVisibleOnly: true,
          applicationServerKey: base64ToArray(
            "BLvphUKMvEuW-D8fjoV21P1q0_gNbER-cVU5x5gYKZxbkByeu0tWgwOIMrxXegUigogogRVyZp3c6MBBIXhc7Mc"
          )
        }
        navigator.serviceWorker.getRegistration()
          .then(function(registration) {
            registration.pushManager.subscribe(opt).then(function(subscribe) {
                console.log("Subscribe OK, Endpoint:",subscribe.endpoint);
                console.log("Subscribe OK, p256dh key: ",
                  btoa(
                    String.fromCharCode.apply(
                      null,
                      new Uint8Array(subscribe.getKey("p256dh"))
                    )
                  )
                );
                console.log("Subscribe OK, auth key: ",
                  btoa(
                    String.fromCharCode.apply(
                      null,
                      new Uint8Array(subscribe.getKey("auth"))
                    )
                  )
                );
              })
              .catch(function(e) {
                console.error("Subscribe Error: ", e.message);
              });
          });
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function (){
    registerSw();
    permission();
});


