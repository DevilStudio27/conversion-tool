import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"


const IndexPage = () => {
    const uploadRef = useRef(null);
    const textAreaRef = useRef(null);
    const [fileName, setFileName] = useState("My Note");
    const [mFont, setFont] = useState('');
    const [mSize, setSize] = useState(18);
    const [textSelected, setTextSelected] = useState(false);
    const [charData, setChar] = useState('0');
    const [wordData, setWord] = useState('0');
    const [bStyle, setBStyle] = useState('');
    const [iStyle, setIStyle] = useState('');
    const [uStyle, setUStyle] = useState('');
    const [noteRes, setNote] = useState('');

    const myStyle = {
        fontFamily: `${mFont},san-serif`,
        fontSize: `${Number(mSize)}px`,
        fontWeight: `${bStyle}`,
        fontStyle: `${iStyle}`,
        textDecoration: `${uStyle}`,
    };

    function handleSelection() {
        var selectedText = '';
        setTextSelected(false);

        // window.getSelection
        if (window.getSelection) {
            selectedText = window.getSelection();
        }
        // document.getSelection
        else if (document.getSelection) {
            selectedText = document.getSelection();
        }
        else if (textAreaRef.current.select) {
            selectedText = textAreaRef.current.select();
        }
        // document.selection
        else if (document.selection) {
            selectedText =
                document.selection.createRange().text;
        } else return;
        setTextSelected(true);
        return selectedText;
    }
    function destroyClickElement(e) {
        document.body.removeChild(e.target);
    }

    const handlePrint = () => {
        let childWindow;
        childWindow = window.open(
            "",
            "childWindow",
            "location=yes, menubar=yes, toolbar=yes"
        );
        childWindow.document.open();
        childWindow.document.write(textAreaRef.current.value.replace(/\n/gi, "<br>"));
        childWindow.print();
        childWindow.document.close();
        childWindow.close();
    }
    const handleCopy = () => {
        if (textSelected) {
            navigator.clipboard.writeText(handleSelection());
        } else {
            navigator.clipboard.writeText(textAreaRef.current.value);
        }
    }
    const handlePaste = () => {
        navigator.clipboard.readText()
            .then(text => {
                // let clipText;
                // clipText += text;
                setNote(noteRes + text);
            })
            .catch(err => setNote(err));
    }
    const handleDel = () => {
        setNote(noteRes.replace(handleSelection(), ''))
    }
    const uploadFile = (uploadedFile) => {
        const fReader = new FileReader();

        fReader.onloadend = () => {
            try {
                setNote(fReader.result);
            }
            catch (e) {
                setNote("Check File Type");
            }
        }
        if (uploadedFile !== undefined) {
            fReader.readAsText(uploadedFile);
        }
    }

    const handleZoom = (sign) => {
        let fSize = mSize;
        if (sign === '+') {
            (mSize !== textAreaRef.current.style.fontSize && mSize < 32) ? setSize(Number(fSize + 1)) : setSize(Number(fSize))
        } else if (sign === '-') {
            (mSize !== textAreaRef.current.style.fontSize && mSize > 14) ? setSize(Number(fSize - 1)) : setSize(Number(fSize))
        } else {
            setSize(Number(fSize))
        }
    }
    const handleUser = (resp) => {
        switch (resp) {
            case 'help':
                window.open("https://www.rapidtables.com/tools/notepad_help.html", "blank");
                break;
            case 'contact':
                window.open("https://github.com/DevilStudio27", "blank");
                break;
            default:
                break;
        }
    }
    const handleSave = () => {
        let textFileAsBlob = new Blob([noteRes], { type: 'text/plain' });

        let downloadLink = document.createElement("a");
        downloadLink.download = fileName;
        downloadLink.innerHTML = "Save/Download File";
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }

    return (
        <Layout>
            <SEO title="Premium Tools" />
            <div className="row no-gutters">
                <div className="col-md-9 leftside">
                    <div className="left-container">
                        <div className="container text-center">
                            <h1>Notepad</h1>
                            <p className="lead">Online Notes free, No login required</p>
                        </div>
                        <div className="container">
                            <div className="container my-3 ml-1 p-0 row justify-content-center card-container card shadow card-body" >
                                <nav className="bread-container" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Notepad</li>
                                    </ol>
                                    <div className="file-title">
                                        <input className="file-title" type="text" name="tabin" id="tabin" title="File Name" placeholder="Untitled" required value={fileName} onChange={e => {
                                            e.target.value === "" && e.target.value === null && e.target.value === undefined ? setFileName("My Note") : setFileName(e.target.value)
                                        }}></input>
                                    </div>
                                    <div className="theme-div">
                                        <button className="btn btn-sm theme-btn" title="Theme Toggle" name="theme" aria-label="theme" onClick={() => console.log(textAreaRef)}><FontAwesomeIcon icon={["fas", "moon"]} /></button>
                                    </div>
                                </nav>
                                <div className="menu-container">
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                            File
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button className="dropdown-item" title="New File" name="new" aria-label="New"><FontAwesomeIcon icon={["fas", "file"]} /> New</button>
                                            <button className="dropdown-item" title="Open Folder" name="open" aria-label="Open" onClick={(ewt) => {
                                                ewt.preventDefault();
                                                uploadRef.current.click();
                                            }}><FontAwesomeIcon icon={["fas", "folder"]} /> Open</button>
                                            <button className="dropdown-item" title="Save to Device" name="save" aria-label="Save" onClick={() => handleSave()}><FontAwesomeIcon icon={["fas", "laptop"]} /> Save</button>
                                            <button className="dropdown-item" title="Save to Device" name="save-as" aria-label="Save As" onClick={() => handleSave()}><FontAwesomeIcon icon={["fas", "arrow-alt-circle-down"]} /> Save As</button>
                                            <button className="dropdown-item" title="Print" name="print" aria-label="Print" onClick={() => handlePrint()}><FontAwesomeIcon icon={["fas", "print"]} /> Print</button>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                            Edit
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button className="dropdown-item" title="Undo" name="undo" aria-label="Undo"><FontAwesomeIcon icon={["fas", "undo-alt"]} /> Undo</button>
                                            <button className="dropdown-item" title="Redo" name="redo" aria-label="Redo"><FontAwesomeIcon icon={["fas", "redo-alt"]} /> Redo</button>
                                            <button className="dropdown-divider"></button>
                                            <button className="dropdown-item" title="Cut" name="cut" aria-label="Cut"><FontAwesomeIcon icon={["fas", "cut"]} /> Cut</button>
                                            <button className="dropdown-item" title="Copy" name="copy" aria-label="Copy" onClick={() => handleCopy()}><FontAwesomeIcon icon={["fas", "clone"]} /> Copy</button>
                                            <button className="dropdown-item" title="Paste" name="paste" aria-label="Paste" onClick={() => handlePaste()}><FontAwesomeIcon icon={["fas", "clipboard"]} /> Paste</button>
                                            <button className="dropdown-divider"></button>
                                            <button className="dropdown-item" title="Delete" name="delete" aria-label="Delete" onClick={() => handleDel()}><FontAwesomeIcon icon={["fas", "times"]} /> Delete</button>
                                            <button className="dropdown-item" title="Select All" name="select-all" aria-label="Select All"><FontAwesomeIcon icon={["fas", "check-double"]} /> Select All</button>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                            View
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button className="dropdown-item" title="Zoom In" name="zoom-in" aria-label="Zoom In" onClick={() => handleZoom('+')}><FontAwesomeIcon icon={["fas", "search-plus"]} /> Zoom In</button>
                                            <button className="dropdown-item" title="Zoom Out" name="zoom-out" aria-label="Zoom Out" onClick={() => handleZoom('-')}><FontAwesomeIcon icon={["fas", "search-minus"]} /> Zoom Out</button>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                            Help
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <button className="dropdown-item" title="Help" name="help" aria-label="Help" onClick={() => handleUser('help')}><FontAwesomeIcon icon={["fas", "question"]} /> Help</button>
                                            <div className="dropdown-divider"></div>
                                            <button className="dropdown-item" title="Contact" name="contact" aria-label="Contact" onClick={() => handleUser('contact')}><FontAwesomeIcon icon={["fas", "comment-dots"]} /> Contact</button>
                                        </div>
                                    </div>
                                    <input type="file" className="hidden"
                                        multiple={false}
                                        accept=".txt,application/txt"
                                        onChange={(et) => uploadFile(et.target.files[0])}
                                        ref={uploadRef}
                                    />
                                </div>
                                <div className="toolbar-container">
                                    <button className="btn" title="Open" name="open" aria-label="Open" onClick={(ewt) => {
                                        ewt.preventDefault();
                                        uploadRef.current.click();
                                    }}><FontAwesomeIcon icon={["fas", "folder"]} /></button>
                                    <button className="btn" title="Save to Device" name="save" aria-label="Save" onClick={() => handleSave()}><FontAwesomeIcon icon={["fas", "laptop"]} /></button>
                                    <button className="btn" title="Cut" name="cut" aria-label="Cut"><FontAwesomeIcon icon={["fas", "cut"]} /></button>
                                    <button className="btn" title="Copy" name="copy" aria-label="Copy" onClick={() => handleCopy()}><FontAwesomeIcon icon={["fas", "clone"]} /></button>
                                    <button className="btn" title="Paste" name="paste" aria-label="Paste" onClick={() => handlePaste()}><FontAwesomeIcon icon={["fas", "clipboard"]} /></button>
                                    <button className="btn" title="Undo" name="undo" aria-label="Undo"><FontAwesomeIcon icon={["fas", "undo-alt"]} /></button>
                                    <button className="btn" title="Redo" name="redo" aria-label="Redo"><FontAwesomeIcon icon={["fas", "redo-alt"]} /></button>
                                    <button className="btn" title="Zoom In" name="zoom-in" aria-label="Zoom In" onClick={() => handleZoom('+')}><FontAwesomeIcon icon={["fas", "search-plus"]} /></button>
                                    <button className="btn" title="Zoom Out" name="zoom-out" aria-label="Zoom Out" onClick={() => handleZoom('-')}><FontAwesomeIcon icon={["fas", "search-minus"]} /></button>
                                    <button className="btn btn-style style-bold" title="Bold" name="bold" aria-label="Bold" onClick={() => {
                                        document.getElementById('field').style.fontWeight === "bold" ? setBStyle(400) : setBStyle('bold')
                                    }}>B</button>
                                    <button className="btn btn-style style-italic" title="Italic" name="italic" aria-label="Italic" onClick={() => {
                                        document.getElementById('field').style.fontStyle === "italic" ? setIStyle('normal') : setIStyle('italic')
                                    }}>I</button>
                                    <button className="btn btn-style style-unline" title="Underline" name="underline" aria-label="Underline" onClick={() => {
                                        document.getElementById('field').style.textDecoration === "underline" ? setUStyle('none') : setUStyle('underline')
                                    }}>U</button>
                                    <div className="font-content">
                                        <label htmlFor="font-fam">Family</label>
                                        <select className="font-input" required name="font-fam" id="font-fam" value={mFont} onChange={(e) => setFont(e.target.value)}>
                                            <option value="Arial">Arial</option>
                                            <option value="Courier">Courier</option>
                                            <option value="cursive">cursive</option>
                                            <option value="fantasy">fantasy</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Helvetica">Helvetica</option>
                                            <option value="Lucida Console">Lucida Console</option>
                                            <option value="monospace">monospace</option>
                                            <option value="serif">serif</option>
                                            <option value="Times">Times</option>
                                            <option value="Times New Roman">Times New Roman</option>
                                            <option value="Verdana">Verdana</option>
                                            <option disabled>-----</option>
                                            <option value="Quicksand">Quicksand</option>
                                            <option value="Varela">Varela</option>
                                        </select>
                                    </div>
                                    <div className="font-content">
                                        <label htmlFor="font-size" className="font-lab">Size:</label>
                                        <input type="number" className="font-input" name="font-size" min="14" max="32" id="font-size" value={mSize} onChange={e => {
                                            e.preventDefault();
                                            let size = Number(e.target.value);
                                            size !== 18 ? setSize(Number(size)) : setSize(Number(18))
                                        }}></input>
                                    </div>
                                </div>
                                <div className="note-container">
                                    <div className="paper-content">
                                        <textarea ref={textAreaRef} style={myStyle} name="field" id="field" data-gramm_editor="false" spellCheck="false" required value={noteRes} onChange={(evt) => {
                                            evt.preventDefault();
                                            let noteTxt = evt.target.value;
                                            let wordSize=noteTxt.split(' ').filter((item) => {
                                                return item !== '';
                                            });
                                            setChar(noteTxt.replace(/\s/g, '').length);
                                            setWord(wordSize.length);
                                            if (noteTxt === " ") {
                                                setNote("Hello World!");
                                            }
                                            else {
                                                setNote(noteTxt);
                                            }
                                        }}></textarea>
                                    </div>
                                </div>
                                <div className="counter-content">
                                    <p className="counter-set">Characters {charData}, Words {wordData}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebar />
            </div>
        </Layout>
    )
}
export default IndexPage