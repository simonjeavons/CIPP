import { Box, Tooltip } from "@mui/material";
import { useSettings } from "../../hooks/use-settings";

// Self-hosted branding: show the Shoothill logo instead of the sponsor banner.
export const CippSponsor = () => {
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
        height: "55px",
        mt: 2,
        mb: 1,
      }}
    >
      <Tooltip title="Shoothill" arrow>
        <img
          src={logoSrc}
          alt="Shoothill"
          style={{
            cursor: "pointer",
            maxHeight: "38px",
            width: "auto",
            maxWidth: "170px",
          }}
          onClick={() => window.open("https://shoothill.com")}
        />
      </Tooltip>
    </Box>
  );
};
