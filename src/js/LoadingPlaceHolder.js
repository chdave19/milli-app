import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";

const theme = createTheme({
  components: {
    MuiSkeleton: {
      styleOverrides: {
        wave: {
          // Override the keyframes to change animation speed
          animationDuration: '0.2s',
          "@keyframes wave": {
            "0%": {
              transform: "translateX(-100%)",
            },
            "100%": {
              transform: "translateX(100%)",
            },
          },
        },
      },
    },
  },
});

function LoadingComponent() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "300px" }} className="skel">
        <div className="load abs"></div>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={200}
          animation="wave"
          style={{ backgroundColor: "#363535", borderRadius: '12px' }}
          sx={{ animationDuration: "0.2s" }}
        />
        <div className="skel-bottom">
          <div>
            <Skeleton
              variant="text"
              width="30%"
              height={20}
              animation="wave"
              style={{ backgroundColor: "#363535" }}
              sx={{ animationDuration: "0.2s" }}
            />
            <Skeleton
              variant="text"
              width="40%"
              height={20}
              animation="wave"
              style={{ backgroundColor: "#363535" }}
              sx={{ animationDuration: "0.2s" }}
            />
            <Skeleton
              variant="text"
              width="50%"
              height={20}
              animation="wave"
              style={{ backgroundColor: "#363535" }}
              sx={{ animationDuration: "0.2s" }}
            />
          </div>
          <Skeleton
              variant="text"
              width="25%"
              height={50}
              animation="wave"
              style={{ backgroundColor: "#363535" }}
              sx={{ animationDuration: "0.2s" }}
            />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LoadingComponent;
