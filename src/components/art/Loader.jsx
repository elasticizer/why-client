import React from 'react'

export default function Loader({show}) {
  return (
    <div className={`article-loader ${show ? '' : 'article-loader--hide'}`}></div>
  )
}
