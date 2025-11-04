'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

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
    <div className={cn('flex h-full flex-col overflow-hidden rounded-lg border border-input bg-background', className)}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-input px-4 py-2">
        <h3 className="font-mono text-sm font-semibold text-foreground">Code Editor</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-md border border-input bg-muted px-2 py-1 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-primary"
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
          className="h-full w-full resize-none bg-background p-4 font-mono text-sm text-foreground focus:outline-none"
          spellCheck={false}
          placeholder="Write your code here..."
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-input px-4 py-2 text-xs text-muted-foreground">
        <span>Lines: {code.split('\n').length}</span>
        <span>Characters: {code.length}</span>
      </div>
    </div>
  );
}
