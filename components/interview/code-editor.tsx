'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript' },
  { id: 'python', name: 'Python' },
  { id: 'java', name: 'Java' },
  { id: 'cpp', name: 'C++' },
  { id: 'typescript', name: 'TypeScript' },
];

export function CodeEditor({ className }: { className?: string }) {
  const [code, setCode] = useState('// Start coding here...\n\n');
  const [language, setLanguage] = useState('javascript');

  return (
    <div
      className={cn(
        'border-input bg-background flex h-full flex-col overflow-hidden rounded-lg border',
        className
      )}
    >
      {/* Header */}
      <div className="border-input flex items-center justify-between border-b px-4 py-2">
        <h3 className="text-foreground font-mono text-sm font-semibold">Code Editor</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border-input bg-muted focus:ring-primary rounded-md border px-2 py-1 font-mono text-xs focus:ring-2 focus:outline-none"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-auto">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="bg-background text-foreground h-full w-full resize-none p-4 font-mono text-sm focus:outline-none"
          spellCheck={false}
          placeholder="Write your code here..."
        />
      </div>

      {/* Footer */}
      <div className="border-input text-muted-foreground flex items-center justify-between border-t px-4 py-2 text-xs">
        <span>Lines: {code.split('\n').length}</span>
        <span>Characters: {code.length}</span>
      </div>
    </div>
  );
}
