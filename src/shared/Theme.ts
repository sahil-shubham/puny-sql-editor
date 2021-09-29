export const lightTheme: ThemeType = {
  backgroundColor: "#f5f5f5",
  color: "#2b2f33",
  fontFamily: "'Manrope', sans-serif",

  sidebar: {
    backgroundColor: "#fdfdfd",
    color: "#898d90",
    hoverBackground: "#efefef",
    hoverColor: "#2b2f33",
  },
};

export const darkTheme: ThemeType = {
  backgroundColor: "#111315",
  color: "#fcfcfc",
  fontFamily: "'Manrope', sans-serif",

  sidebar: {
    backgroundColor: "#1a1c1e",
    color: "#85898f",
    hoverBackground: "#272a30",
    hoverColor: "#fcfcfc",
  },
};

type ThemeType = {
  backgroundColor: string;
  color: string;
  fontFamily: string;

  sidebar: {
    backgroundColor: string;
    color: string;

    hoverBackground: string;
    hoverColor: string;
  };
};

export type { ThemeType };
