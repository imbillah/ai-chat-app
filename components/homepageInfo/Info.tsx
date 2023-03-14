import React from "react";
import {
  SunIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";
const Info = () => {
  return (
    <div className="p-2">
      <h1 className="text-center mb-5 py-5 font-bold text-4xl">Ai Chat 2.0</h1>
      <div className="md:flex text-center md:space-x-4 md:h-screen">
        <div>
          <div className="flex flex-col justify-center items-center mb-4">
            <SunIcon className="h-8 w-8" />
            <h1>Exaples</h1>
          </div>
          <div className="space-y-3">
            <p className="infoText">
              Explain quantum computing in simple terms
            </p>
            <p className="infoText">
              Got any creative ideas for a 10 year old birthday?
            </p>
            <p className="infoText">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-4">
            <BoltIcon className="h-8 w-8" />
            <h1>Capabilities</h1>
          </div>
          <div className="space-y-3">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-4">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h1>Limitations</h1>
          </div>
          <div className="space-y-3">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
