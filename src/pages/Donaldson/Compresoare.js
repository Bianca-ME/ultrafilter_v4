import React from 'react';

export default function Compresoare() {
  return (
    <div>
      <object data="../../../testPDF.pdf" type="application/pdf" width="100%" height="600px">
        <p>Alternative text - include a link <a href="../../../testPDF.pdf">to the PDF!</a></p>
      </object>
    </div>
  );
}