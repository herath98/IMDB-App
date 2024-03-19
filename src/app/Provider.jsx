'use client'
import { ThemeProvider } from "next-themes";


export default function Provider({ children }) {
  return (
    <ThemeProvider>
      <div defaultTheme='system' attribute='class'
        className="light:text-gray-400 dark:text-gray-200
         dark:bg-gray-700 min-h-screen select-none transition-colors
          duration-300 ">
        {children}
      </div>
    </ThemeProvider>
  )
}
