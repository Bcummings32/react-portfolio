import React from 'react';
import filePDF from ''
import "./Resume.css"

function Resume() {
    return (
        <div containers="App">
            <div id="pdfviewer">
            <Viewer fileUrl={filePDF}xs/>
            </div>
        </div>
    )
}

export default Resume;