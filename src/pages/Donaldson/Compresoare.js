// import React, { useState } from 'react';
// // import { NavLink } from 'react-router-dom';
// import '../../assets/Donaldson.css';
// import '../../assets/commonstyle.css';
// import pdf from '../../assets/testPDF.pdf';
// import { Document, Page } from 'react-pdf';

// function Compresoare() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }