import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return <h1 className="header" title="Header" data-testid='header-1'>{title}</h1>
}
