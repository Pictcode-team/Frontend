import React from 'react';
import './styles.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about--text">
        <div className="about--text-1">
          <h2>What is Pictcode?</h2>
          <p>Pictcode is a nice and simple app that let's us share images between two devices via scanning a QR code. You can share from any computer and receive the images from any smartphone.</p>
        </div>
        <div className="about--text-2">
          <h2>How to use it?</h2>
          <p>
            For the use of this app you need a computer,
            in this device you'll select some pictures that
            you want to share. Once that you are sure to
            transfer those images, you can generate a QR code.
            That way it can be scanned from a phone in order to
            access to that private space in the cloud and then
            download all the images the user wants.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;