import React from 'react';
// import './../../../public/testPDF.pdf';

export default function Compresoare() {
  return (
    <div>
      {/* <object data="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1" width="100%" height="600px">
        <p>Alternative text - include a link <a href="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1">to the PDF!</a></p>
      </object> */}
      {/* <a href="https://github.com/Bianca-ME/-ultrafilter-react-app-t20/blob/t20.v1.1.1-adding-pages/public/testPDF.pdf" target="_blank">Download PDF</a> */}

      {/* asta de jos (google drive) merge dar cere captcha */}
      <iframe src="https://drive.google.com/file/d/1rZMWHRzH_rGtFoxc867ZRAT2YtEnPOA1/preview" width="100%" height="600px" allow="autoplay"></iframe>

      {/* one drive embed, mai naspa */}
      {/* <iframe src="https://onedrive.live.com/embed?cid=E9A4AEED74E4F1D1&resid=E9A4AEED74E4F1D1%2110988&authkey=AEWFAB51YcNiLwM&em=2" width="100%" height="600px" ></iframe> */}
    </div>
  );
}