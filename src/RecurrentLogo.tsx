import { Typography } from "@mui/material";

export default function RecurrentLogo() {
  return (
    <>
      <svg
        height="25"
        viewBox="0 0 121.295 121.361"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="hsl(239, 47%, 22%)"
            d="M120,60A60,60,0,1,1,60,0,60,60,0,0,1,120,60ZM38.72,99.63,57,65.38,24.8,71.64,70.58,16.29A45,45,0,0,0,38.72,99.63Zm42-79.57L63,53.17l32.24-6.26L48.42,103.47A45,45,0,0,0,80.67,20.06Z"
          />
        </g>
      </svg>
      <Typography
        variant="h6"
        component="p"
        color="hsl(239, 47%, 22%)"
        sx={{
          paddingLeft: 1,
          flexGrow: 1,
          textTransform: "uppercase",
          fontWeight: 400,
        }}
      >
        Recurrent
      </Typography>
    </>
  );
}
