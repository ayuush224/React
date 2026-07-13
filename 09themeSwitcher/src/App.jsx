import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './context/Theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  //It is must to give the same name as you have given 
  //at the time of default values

  //Give the name same as given in default values,
  //So the value get automatically inherited here. It is additional benefit of it
  const [themeMode, setThemeMode] = useState("light");
  
  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("dark", "light");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card/>
            </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App;

//We don't need to touch the Car component because there we have defined the separate classes for each mode, like the dark and light so the styles automatically get updated as the html classes get changed, so it makes no sense to read the values inside Card componenet. It will just lower the performance of redering it again and again as the themeMode changes, so do not take the values of the modes there.