import { Box, Tooltip } from "@mui/material";
import { useSettings } from "../../hooks/use-settings";

// Self-hosted branding: show the Shoothill logo instead of the sponsor banner.
// `compact` trims the vertical footprint for the mobile nav drawer, where this sits pinned
// below a scrolling menu and every pixel it takes is a pixel of navigation lost.
export const CippSponsor = ({ compact = false }) => {
  const currentSettings = useSettings();
  const theme = currentSettings?.currentTheme?.value;
  const logoSrc =
    theme === "light" ? "/assets/shoothill-logo-light.svg" : "/assets/shoothill-logo-dark.svg";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: compact ? "38px" : "55px",
        mt: compact ? 0.75 : 2,
        mb: compact ? 0.5 : 1,
      }}
    >
      <Tooltip title="Shoothill" arrow>
        <img
          src={logoSrc}
          alt="Shoothill"
          style={{
            cursor: "pointer",
            maxHeight: compact ? "28px" : "38px",
            width: "auto",
            maxWidth: compact ? "150px" : "170px",
          }}
          onClick={() => window.open("https://shoothill.com")}
        />
      </Tooltip>
    </Box>
  );
};
