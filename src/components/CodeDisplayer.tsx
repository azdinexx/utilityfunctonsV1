'use client';

import React from 'react';

import Editor from '@monaco-editor/react';

interface Props {
  height?: string | undefined;
  code?: string;
}

export default function CodeDisplayer({ height = '90vh', code }: Props) {
  return (
    <>
      <Editor
        height={height}
        defaultLanguage='javascript'
        defaultValue='// type your Utility Function...'
        value={code}
        options={{ readOnly: true, minimap: { enabled: false } }}
        theme='Ocean Next'
      />
    </>
  );
}
