import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div className="bg-stone-200 min-h-screen flex items-center justify-center">
      <ReactLoading
        type="bars"
        color="#009cd8"
        height="64px"
        width="64px"
      />
    </div>
  );
}
