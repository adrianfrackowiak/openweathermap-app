export const StyledFlexColCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
} as const;

export const StyledFlexJstColCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as const;

export const StyledFlexJstCenter = {
  display: "flex",
  justifyContent: "center",
} as const;

export const StyledStatsBox = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  flexWrap: "wrap",
  alignItems: "center",
} as const;

export const StyledStats = {
  fontWeight: "500",
  bgcolor: "primary.main",
  borderRadius: "10px",
  padding: "0.5rem 1rem",
} as const;

export const StyledForecastBox = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  justifyContent: "space-between",
} as const;

export const StyledForecastDay = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "primary.main",
  borderRadius: "10px",
  padding: "1rem",
  marginBottom: { xs: "2rem" },
  width: { xs: "10rem" },
} as const;

export const StyledTodayWeather = {
  display: "flex",
  justifyContent: "center",
  bgcolor: "primary.main",
  borderRadius: "10px",
  padding: "2rem",
} as const;

export const StyledSearchTextField = {
  color: "#ffffff",
  boxShadow: 3,
  bgcolor: "primary.main",
  borderRadius: "10px",
  border: "none",
} as const;

export const StyledSearchButton = { marginLeft: "1rem", boxShadow: 3 };
