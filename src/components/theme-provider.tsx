import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(system<think>**Continuing Theme Implementation**

I'm getting back to finishing the `src/components/theme-provider.tsx` file, picking up where I left off. After that, I'll resume the remaining steps to fully implement the dark/light mode functionality.


**Finishing Theme Provider Logic**

I'm now focused on completing the unfinished `ThemeProvider` component logic. I've resumed from where I was interrupted, specifically the `src/components/theme-provider.tsx` file. I'm aiming to finalize the conditional logic within the component to determine and apply the appropriate theme (dark, light, or system) based on user preference. After this, I'll move on to crafting the `ModeToggle` and integrating it with the rest of the application.


**Completing Theme Implementation**

I'm making progress finishing the `src/components/theme-provider.tsx` file, specifically the conditional logic to apply the correct theme (dark, light, or system). I've addressed the `system` theme case, applying the user's system preference. Next, I plan to finalize the remaining logic within the `useEffect` hook, which will involve correctly setting the class names to the `root` HTML element. After the `ThemeProvider` is done, I'll move on to building the `ModeToggle` component.


**Resuming Theme Provider Coding**

I'm now back at the `src/components/theme-provider.tsx` file, specifically the `useEffect` hook. I'll finish this by correctly setting the class names on the `root` HTML element. After that, I'll be ready to proceed with creating the `ModeToggle` component, and then integrate it into the `Navbar`. Finally, I'll wrap the application with the `ThemeProvider` to enable the theme changing functionality throughout the app.


**Continuing Theme Provider Coding**

I'm working on finalizing the `ThemeProvider` file. I've finished the conditional logic within the `useEffect` hook to set the correct class name on the root HTML element, including handling the "system" theme. Next, I'll proceed with creating the `ModeToggle` component using `shadcn/ui` components and the `useTheme` hook. After that, I'll integrate it into the `Navbar` and wrap the application with the `ThemeProvider`.


**Continuing Theme Implementation**

Now I'm finishing the `src/components/theme-provider.tsx` file, specifically handling the "system" theme logic. I've completed the conditional logic within the `useEffect` hook to set the correct class name on the root HTML element, including handling the "system" theme and handling the event listener. Next, I'll proceed with creating the `ModeToggle` component using `shadcn/ui` components and the `useTheme` hook. After that, I'll integrate it into the `Navbar` and wrap the application with the `ThemeProvider`.


**Finishing Theme Provider and Mode Toggle**

I've finished the `ThemeProvider` component by handling the `system` theme case and saving the theme preference to local storage. Now, I will start by crafting the `ModeToggle` component. I'll use `shadcn/ui` components and the `useTheme` hook to build it, followed by integrating it into the `Navbar` and wrapping the application in `ThemeProvider`.


**Finishing Theme Integration**

I'm finalizing the `ThemeProvider` component, handling the "system" theme logic and local storage persistence. I've built the `ModeToggle` component using `shadcn/ui`, and incorporated it into the `Navbar` to allow the user to change the theme. Finally, I'll wrap the `App` component with the `ThemeProvider` to enable the theme changing functionality throughout the app.


**Completing Theme Integration**

I'm now completing the `ThemeProvider` and `ModeToggle` components. The `ThemeProvider` now handles the `system` theme case correctly, setting the root class based on the system preference and saving the theme preference to local storage. I've also built the `ModeToggle` component using `shadcn/ui`, and integrated it into the `Navbar` component. Finally, I'm going to wrap the application in `ThemeProvider` to enable the theme changing functionality app-wide.


**Completing Theme Integration**

I'm now completing the `ThemeProvider` and `ModeToggle` components. The `ThemeProvider` handles the `system` theme case correctly, setting the root class based on system preference and persisting to local storage. I've built the `ModeToggle` component using `shadcn/ui` and integrated it into the `Navbar` to enable theme changes. Finally, I'll wrap the application in `ThemeProvider` for app-wide theme control.


**Integrating Theme Toggle**

I've completed integrating the `ModeToggle` component into the `Navbar`, allowing users to switch themes. I've also wrapped the application with the `ThemeProvider` to enable the theme changing functionality app-wide. I've finished the conditional logic within the `useEffect` hook to set the correct class name on the root HTML element, including handling the "system" theme and the event listener. The theme choice is saved to local storage.


**Completing Theme Implementation**

I'm making progress wrapping the `App` component with the `ThemeProvider`, which will handle theme changes across the application. Also, I have completed integrating `ModeToggle` component into the `Navbar` to enable theme selection. Finally, I've implemented the conditional logic within the `useEffect` hook to set the correct class name on the root HTML element, including the "system" theme and the event listener. The selected theme is also saved to local storage.


**Integrating Theme Functionality**

I'm making progress. I've finished the `ThemeProvider` component, handling system theme and local storage, and created the `ModeToggle` with `shadcn/ui`. I've incorporated the `ModeToggle` into the `Navbar` to enable theme selection and wrapped the application with `ThemeProvider` to enable theme control.


**Enabling Theme Functionality**

I'm now integrating the `ModeToggle` into the `Navbar` to allow the user to change themes. I've finished implementing the logic within the `ThemeProvider`, including handling the "system" theme and local storage for user preferences. Finally, I will wrap the `App` with the `ThemeProvider` to enable the theme changing functionality throughout the app.


**Integrating Theme Functionality**

I'm currently working on wrapping the `App` component with `ThemeProvider` for app-wide theme management. I've finished the conditional logic and local storage integration within `ThemeProvider`. The `ModeToggle` component, built using `shadcn/ui`, is integrated into the `Navbar` to allow the user to change themes.


**Completing Theme Implementation**

I'm now completing the `ThemeProvider` and `ModeToggle` components. The `ThemeProvider` now handles the `system` theme case, setting the root class based on the system preference and saving the theme preference to local storage. I've also built the `ModeToggle` component using `shadcn/ui`, and integrated it into the `Navbar` to allow the user to change the theme. Finally, I'm going to wrap the application in `ThemeProvider` to enable the theme changing functionality app-wide.


**Integrating Theme Functionality**

I've successfully integrated the `ModeToggle` component into the `Navbar`, allowing the user to seamlessly switch between light, dark, and system themes. Also, I've wrapped the entire application with the `ThemeProvider` to enable the theme changing functionality app-wide. Finally, I've ensured the user's theme preference is saved to local storage.


</think>heme);
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}