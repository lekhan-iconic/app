import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";

const files = {
  "script.py": {
    name: "script.py",
    language: "python",
    value: "Here is Some Python Text",
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "Here is Some html code like <div> </div>",
  },
  "program.java": {
    name: "program.java",
    language: "java",
    value: "here is java code",
  },
};

function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [fileName, setfileName] = useState("script.py");
  const editorRef = useRef(null);
  const file = files[fileName];

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function getEditorValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <div className="App">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ minWidth: 950 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-simple-select-label">Languages</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Language"
                onChange={handleChange}
                sx={{ minWidth: 250 }}
              >
                <MenuItem value={10} onClick={() => setfileName("index.html")}>
                  HTML
                </MenuItem>
                <MenuItem value={20} onClick={() => setfileName("script.py")}>
                  Python
                </MenuItem>
                <MenuItem
                  value={30}
                  onClick={() => setfileName("program.java")}
                >
                  JAVA
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            disableElevation
            onClick={() => getEditorValue()}
            endIcon={<ArrowRightIcon />}
          >
            Run
          </Button>
        </div>

        <div className="editor-container">
          <Editor
            className="editor1"
            height="90vh"
            width="150%"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
            autofocus
          />
          <div className="editor-column">
            <div className="editor-text">INPUT</div>
            <Editor
              className="editor2"
              height="35vh"
              width="85%"
              theme="vs-dark"
            />
            <div className="editor-text">OUTPUT</div>
            <Editor
              className="editor3"
              height="40vh"
              width="85%"
              theme="vs-dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
