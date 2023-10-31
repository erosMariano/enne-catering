'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import React from 'react';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#00cc5e"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
}

export default Providers;
