import React, { Component, ReactNode } from 'react'
interface RoundedDivProps {
    children: ReactNode;
  }
  

export default function LayoutTrial({children}:RoundedDivProps) {
  return (
    <div className="bg-blue-500 rounded-tl-3xl rounded-bl-3xl p-4 absolute top-0 left-80 right-0">{children}</div>
  )
}
