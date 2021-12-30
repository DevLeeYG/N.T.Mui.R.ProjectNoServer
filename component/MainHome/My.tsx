import Typewriter from 'typewriter-effect';

import React from 'react';

const My = () => {
  return (
    <div className="main">
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter

            .typeString('ARIANA GRANDE <br/><br/>FAN PAGE')

            .pauseFor(100)

            .start();
        }}
      />
    </div>
  );
};

export default My;
