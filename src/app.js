import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  // JSX
  return (
    <div>
      {/* maps to components/field.js */}
      <Field label="Enter English" onChange={setText} value={text} /> 
      {/* maps to componets/language.js   */}
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      {/* maps to components/translate.js */}
      <Translate text={text} language={language} />
    </div>
  );
}
