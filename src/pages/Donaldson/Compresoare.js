import React from 'react';
// import { NavLink } from 'react-router-dom';
import '../../assets/Donaldson.css';
import '../../assets/commonstyle.css';
import { Document, Page } from 'react-pdf';
import pdf from '../../assets/testPDF.pdf';





export default function Compresoare () {
    return(
        <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    )
    }