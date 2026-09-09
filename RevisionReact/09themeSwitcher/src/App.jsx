import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  }

  const lightMode = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
    console.log(themeMode);
  }, [themeMode]);

  return (
    <>
    <ThemeContextProvider value={{themeMode, darkMode, lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
                <Card />
            </div>
        </div>
    </div>
    </ThemeContextProvider>
    </>
  )
}

export default App;