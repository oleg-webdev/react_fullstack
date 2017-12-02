import React from 'react';

export const Flashes = ({ messages, ondestroyFlashes }) => {

  let alertMessages = null;


  if (messages) {

    if (messages instanceof Array) {
      alertMessages = messages.map(function (msg) {
        return (
          <div key={msg.key} className={`alert alert-${msg.type}`}>
            <p>{msg.body}</p>
          </div>
        )
      });
    } else {
      alertMessages = (
        <div className={`alert alert-${messages.type}`}>
          <p>{messages.body}</p>
        </div>
      );
    }

    setTimeout(() => {
      ondestroyFlashes();
    }, 5000);

  }

  return (
    <div className="Flashes-scope">
      {alertMessages}
    </div>
  );

}
