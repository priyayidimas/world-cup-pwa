var webPush = require('web-push');

const endpoint = "https://fcm.googleapis.com/fcm/send/dKPMp_52tqg:APA91bEQj0p4WNjAjJuubb65jNQVqAU-7tcIzdlHHReZwhWtvim12I2vY-onnCrwlEon4aaeCo7DK-7XC55Luw45MVOYZxtdIHuwI40xKSkxDYejBW5IJFxLVvqGKRBJFYZrXm10qbD7";
const p256dh = "BNwd77YvFJUlw9NoVI+FYbeMzZ2sWl2e/Q6PdSc49/e9v+K6hc+YmSnq39CMu6tC9l2CXeI7kAKVpd8abRZuZPU=";
const auth = "dkQL4rijaIA6fozeTjO52g==";

const vapidKeys = {
   "publicKey": "BLvphUKMvEuW-D8fjoV21P1q0_gNbER-cVU5x5gYKZxbkByeu0tWgwOIMrxXegUigogogRVyZp3c6MBBIXhc7Mc",
   "privateKey": "G2SGbZnOoqyPRvxhW4HHUz3wXR8n6207oPmXj8TG-NI"
};
 
 
webPush.setVapidDetails(
   'mailto:priyayidimas@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": endpoint,
   "keys": {
       "p256dh": p256dh,
       "auth": auth
   }
};
var payload = 'Congrats! Push Notification Received!';
 
var options = {
   gcmAPIKey: '618186156839',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
).catch(err => {
   console.error(err);
});