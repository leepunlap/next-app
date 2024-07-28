'use client'

import mqtt from 'mqtt';
import React, { useEffect, useState } from 'react';

import { useCartStore } from "./zustand";

const Mqtt = () => {

  const [messages, setMessages] = useState(['']);
  const [cnt, incCount] = useState(0);

  const { cart, add: handleAddToCart } = useCartStore();

  useEffect(() => {
    const mqttOptions = { host: '192.168.48.22', port: 8080 };
    const client = mqtt.connect(mqttOptions);
    client.on("connect", () => {
      client.subscribe("#", (err) => {
        if (err) console.log(err);
      });
    });
    client.on("message", (topic, message) => {
      setMessages([new Date().toString(), topic, message.toString()]);
    });
  }, []); // only run this effect on mount on the client side


  useEffect(() => {
    incCount(cnt + 1);
    console.log("messageCnt:" + cnt.toString());
  }, [messages]);

  return (
    <div>
      <h2>Received Messages ： </h2>
      <pre>
        {cart}
      </pre>
      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
      <ul>
        MessageCnt: {cnt.toString()}
      </ul>
      <ul>
        {messages.map((message) => (
          <li key={Math.random()}>{message.toString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mqtt;