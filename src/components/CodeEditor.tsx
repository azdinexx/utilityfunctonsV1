import React from 'react';
import { useState } from 'react';

import Editor from '@monaco-editor/react';

export default function CodeEditor() {
  const [code, setCode] = useState('// type your code...');
  return (
    <>
      <Editor
        height='90vh'
        defaultLanguage='javascript'
        defaultValue='// some comment'
        onChange={(value) => setCode(value)}
        value={code}
        options={{ readOnly: true }}
        theme='Ocean Next'
      />
      {code}
    </>
  );
}
