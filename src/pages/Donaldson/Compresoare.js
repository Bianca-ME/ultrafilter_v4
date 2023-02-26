import React from 'react';
// import './../../../public/testPDF.pdf';

export default function Compresoare() {
  return (
    <div>
      {/* <object data="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1" width="100%" height="600px">
        <p>Alternative text - include a link <a href="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1">to the PDF!</a></p>
      </object> */}
      <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="640" height="480" allow="autoplay"></iframe>
      {/* <a href="https://github.com/Bianca-ME/-ultrafilter-react-app-t20/blob/t20.v1.1.1-adding-pages/public/testPDF.pdf" target="_blank">Download PDF</a> */}
    </div>
  );
}