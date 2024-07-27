import useLocalStorage from "./useLocalStorage";
import "./styles.css"

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log('theme', theme)

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World!</p>
                <button
                    onClick={handleToggleTheme}
                >
                    Change Theme
                </button>
            </div>
        </div>
    )
}