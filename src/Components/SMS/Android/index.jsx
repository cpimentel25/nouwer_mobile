import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SmsAndroid from 'react-native-sms-android';

const AndroidSMS = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const filter = {
      box: 'inbox',
    };

    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {
        console.log('Failed to get messages: ', fail);
      },
      (count, smsList) => {
        const arr = JSON.parse(smsList);
        setMessages(arr);
      }
    );
  }, []);

  return (
    <View>
      {messages.map((message) => (
        <Text key={message._id}>{message.body}</Text>
      ))}
    </View>
  );
};

export default AndroidSMS;

// We use the useEffect hook to fetch the SMS messages when the component mounts.
// The SmsAndroid.list method takes a filter object and two callback functions.
// The first callback function is called if the method fails to retrieve the messages,
// and the second callback function is called if the method succeeds.

// In the success callback function, we parse the SMS list JSON string and update the state of the messages array.
// Finally, we map over the messages array and render each message's body in a Text component.

// Note that this method only works on "Android devices", and it may require permissions to access the SMS messages.
