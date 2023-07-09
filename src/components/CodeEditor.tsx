'use client';
import { useState } from 'react';

import Editor from '@monaco-editor/react';

interface Props {
  height: string | undefined;
  code: string;
  setCode: Function;
}

export default function CodeEditor({ height = '90vh', code, setCode }: Props) {
  return (
    <>
      <Editor
        className='p-2 bg-[#1E1E1E] rounded-md'
        height={height}
        defaultLanguage='javascript'
        defaultValue='// type your Utility Function...'
        onChange={(value) => setCode((prev: string) => value || prev)}
        value={code}
        theme='vs-dark'
      />
    </>
  );
}
