import React, { useEffect, useRef } from 'react';
import '../assets/commonstyle.css'; // Import the CSS file for styling

const ParagraphWithBlueLine = ({ text }) => {
    return (
        <p className="paragraph-with-blue-line">
          {text}
        </p>
      );
    };

export default ParagraphWithBlueLine;