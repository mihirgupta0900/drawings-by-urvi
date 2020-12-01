import React, { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext({ theme: false, toggleTheme: () => {} });

export function ThemeProvider({ children, toggleTheme, theme }) {
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
