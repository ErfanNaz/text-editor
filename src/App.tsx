import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Editor from "@monaco-editor/react";

function App() {
  return (
    <Editor
      height="100vh"
      options={{
        language: "text",
        minimap: { enabled: true },
        quickSuggestions: false,
      }}
    />
  );
}

export default App;
