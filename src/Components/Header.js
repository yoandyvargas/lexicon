import DarkModeToggle from 'react-dark-mode-toggle'
import { useState, useEffect } from 'react'
import styles from '../Styles/Header.module.scss'

function ThemeToggler() {

  const [theme, setTheme] = useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
      document.body.dataset.theme = theme
    }, [theme])

  return (
    <DarkModeToggle
    className={styles.darkmodetoggle}
    checked={theme === 'light' ? false : true}
    onChange={() => setTheme(nextTheme)}
    />
  )
}

export default function Header() {
  
  return (
    <header className={styles.container}>
      <h1>Lexicon 📖</h1>
      <ThemeToggler />
    </header>
  )
}