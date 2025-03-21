import React, { type JSX } from 'react';

export function SelectIcon(): JSX.Element {
  return (
    <svg className="DocSearch-Hit-Select-Icon" width="20" height="20" viewBox="0 0 20 20">
      <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3v4c0 2-2 4-4 4H2" />
        <path d="M8 17l-6-6 6-6" />
      </g>
    </svg>
  );
}
