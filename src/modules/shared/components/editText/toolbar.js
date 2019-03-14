import React from "react";

export const CustomToolbar = () => (
  <div id="toolbar">
     <span className="ql-formats">
        <button type="button" className="ql-bold">
        </button>
        <button type="button" className="ql-italic">
        </button>
        <button type="button" className="ql-underline">
        </button>
        <button type="button" className="ql-strike">
        </button>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-blockquote">
        </button>
        <button type="button" className="ql-code-block">
        </button>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-header" value="1">
        </button>
        <button type="button" className="ql-header ql-active" value="2">
        </button>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-list" value="ordered">
        </button>
        <button type="button" className="ql-list" value="bullet">
        </button>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-script" value="sub">
        </button>
        <button type="button" className="ql-script" value="super">
        </button>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-indent" value="-1">
        </button>
        <button type="button" className="ql-indent" value="+1">
        </button>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-direction" value="rtl">
        </button>
     </span>
    <span className="ql-formats">
        <select defaultValue={"16"} onChange={e => e.persist()} className="ql-size">
           <option value="small">8</option>
          <option>16</option>
           <option value="large">32</option>
           <option value="huge">64</option>
        </select>
     </span>
    <span className="ql-formats">
          <select defaultValue={""} onChange={e => e.persist()} className="ql-header">
             <option value="1">Gigante</option>
             <option value="2">Grande</option>
             <option value="3">Médio</option>
             <option></option>
             <option value="5">Pequeno</option>
             <option value="6">Rodapé</option>
          </select>
       </span>
    <span className="ql-formats">
        <select defaultValue={""} onChange={e => e.persist()} className="ql-color">
           <option/>
           <option value="#e60000"/>
           <option value="#ff9900"/>
           <option value="#ffff00"/>
           <option value="#008a00"/>
           <option value="#0066cc"/>
           <option value="#9933ff"/>
           <option value="#ffffff"/>
           <option value="#facccc"/>
           <option value="#ffebcc"/>
           <option value="#ffffcc"/>
           <option value="#cce8cc"/>
           <option value="#cce0f5"/>
           <option value="#ebd6ff"/>
           <option value="#bbbbbb"/>
           <option value="#f06666"/>
           <option value="#ffc266"/>
           <option value="#ffff66"/>
           <option value="#66b966"/>
           <option value="#66a3e0"/>
           <option value="#c285ff"/>
           <option value="#888888"/>
           <option value="#a10000"/>
           <option value="#b26b00"/>
           <option value="#b2b200"/>
           <option value="#006100"/>
           <option value="#0047b2"/>
           <option value="#6b24b2"/>
           <option value="#444444"/>
           <option value="#5c0000"/>
           <option value="#663d00"/>
           <option value="#666600"/>
           <option value="#003700"/>
           <option value="#002966"/>
           <option value="#3d1466"/>
        </select>
        <select defaultValue={""} onChange={e => e.persist()} className="ql-background">
           <option value="#000000"/>
           <option value="#e60000"/>
           <option value="#ff9900"/>
           <option value="#ffff00"/>
           <option value="#008a00"/>
           <option value="#0066cc"/>
           <option value="#9933ff"/>
           <option/>
           <option value="#facccc"/>
           <option value="#ffebcc"/>
           <option value="#ffffcc"/>
           <option value="#cce8cc"/>
           <option value="#cce0f5"/>
           <option value="#ebd6ff"/>
           <option value="#bbbbbb"/>
           <option value="#f06666"/>
           <option value="#ffc266"/>
           <option value="#ffff66"/>
           <option value="#66b966"/>
           <option value="#66a3e0"/>
           <option value="#c285ff"/>
           <option value="#888888"/>
           <option value="#a10000"/>
           <option value="#b26b00"/>
           <option value="#b2b200"/>
           <option value="#006100"/>
           <option value="#0047b2"/>
           <option value="#6b24b2"/>
           <option value="#444444"/>
           <option value="#5c0000"/>
           <option value="#663d00"/>
           <option value="#666600"/>
           <option value="#003700"/>
           <option value="#002966"/>
           <option value="#3d1466"/>
        </select>
     </span>
    <span className="ql-formats">
        <select defaultValue={""} onChange={e => e.persist()} className="ql-font">
           <option/>
           <option value="serif"/>
           <option value="monospace"/>
        </select>
     </span>
    <span className="ql-formats">
        <select defaultValue={""} onChange={e => e.persist()} className="ql-align">
           <option/>
           <option value="center"/>
           <option value="right"/>
           <option value="justify"/>
        </select>
     </span>
    <span className="ql-formats">
        <button type="button" className="ql-clean">
        </button>
     </span>
  </div>
);
