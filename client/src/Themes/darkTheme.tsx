import { ThemeOptions } from "@mui/material";
// DARK THEME

export const themeOptionsDark: ThemeOptions = {
  palette: {
    primary: {
      main: "#f7f1e3",
    },
    secondary: {
      main: "#090910",
    },
    background: {
      default: "#090910",
      paper:"#090910"
    },
    text: {
      primary: "#f7f1e3",
      secondary: "#f7f1e3",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif;",
  },

  components: {
    MuiCardContent: {
      defaultProps: {
        sx: {
          color: "#090910",
          backgroundColor: "#f7f1e3",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          m: 5,
          boxShadow: 0,
          color: "#090910",
          backgroundColor: "#f7f1e3",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor:"#f7f1e3",
          color: "#090910",
        },
      },
    },
    MuiCardActions: {
      defaultProps: {
        sx: {
          color: "#090910",
          backgroundColor: "#f7f1e3",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        sx: {
          borderRadius: "10px",
          background: "#090910",
          opacity: 0.9,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          borderRadius: "10px",
          background: "#090910",
          opacity: 0.9,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        markLabel: {
          color: "#090910",
        },
        rail: {
          color: "#090910",
        },
        track: { color: "red" },
        thumbColorPrimary: {
          color: "#090910",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "primary",
        },
        text: {
          color: "inherit",
          position: "relative",
          display: "inline-block",

          "&:after": {
            background: "none repeat scroll 0 0 transparent",
            backgroundColor: "#090910",
            bottom: 0,
            content: '""',
            display: "block",
            height: "2px",
            left: "50%",
            position: "absolute",
            transition: "width 0.3s ease 0s, left 0.3s ease 0s",
            width: 0,
          },
          "&:hover:after": {
            width: "100%",
            left: 0,
          },
        },
      },
      defaultProps: {
        sx: {
          margin: 2,
        },
      },
    },
    MuiMenuItem: {
      defaultProps: {
        sx: {
          backgroundColor: "primary",
          color: "black",
        },
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 1,
};
