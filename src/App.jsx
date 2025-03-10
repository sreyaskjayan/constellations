import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html')?.setAttribute('data-theme', localTheme)
}, [theme]);


  return (
    <>
    <div className='flex gap-2'>
        <button className='btn btn-primary' onClick={()=>setTheme(theme==='dark' ? 'cupcake' : 'dark')}>button</button>
        <div className='bg-accent'>hiii</div>
    </div>
    </>
  )
}

export default App
