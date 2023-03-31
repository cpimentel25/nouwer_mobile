import * as SMS from 'expo-sms';

// Aviailable sms (in iOS and Web simulator always return false)
const isAvailable = await SMS.isAvailableAsync();
if (isAvailable) {
  console.log('SMS is aviailable');
  // do your SMS stuff here
} else {
  console.log('SMS no available on this device');
  // misfortune... there's no SMS available on this device
}

// Get a message method
SMS.getMessagesAsync()
  .then((messages) => {
    console.log('sms: ', messages);
  })
  .catch((error) => {
    console.log('Error SMS: ', error);
  });

// Send a message method
// Replace phoneNumber with the recipient's phone number and message with the message you want to send.
SMS.sendSMSAsync(phoneNumber, message) // phoneNumber is posibility with array [300576823, 3116749098, ...]
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
