'use client'

import mqtt from 'mqtt';
import React, { useEffect, useState } from 'react';

import { toiletInfo } from "./zustand";

const Mqtt = () => {

  const [messages, setMessages] = useState(['']);
  const { messageCnt, parse: parseMessage } = toiletInfo();

  useEffect(() => {
    const mqttOptions = { host: '192.168.48.22', port: 8080 };
    const client = mqtt.connect(mqttOptions);
    client.on("connect", () => {
      client.subscribe("#", (err) => {
        if (err) console.log(err);
      });
    });
    client.on("message", (topic, message) => {
      parseMessage(topic, message.toString());
      setMessages([new Date().toString(), topic, message.toString()]);
    });
  }, []); // only run this effect on mount on the client side


  // useEffect(() => {
  //   addMessageCount();
  //   console.log(messageCnt);
  // }, [messages]);

  return (
    <div>
      MessageCnt: {messageCnt}
      <ul>
        {messages.map((message) => (
          <li key={Math.random()}>{message.toString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mqtt;