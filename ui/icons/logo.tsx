import {SVGProps} from "react";

export function MinecraftLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-label="Minecraft"
      role="img"
      viewBox="0 0 512 512"
      strokeLinecap="square"
      fill="none"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <g id="a" transform="matrix(19 11 0 22 76 142)">
          <path fill="#432" d="M.5.5h9v9h-9"/>
          <path stroke="#864" d="M2 8v1h2V8h5V7 H7V5"/>
          <path stroke="#643" d="M1 5zM2 9zM1 8V7h2V6h1M5 9h2V8H6V4M7 6h1v1M9 9zM9 4v1"/>
          <path stroke="#a75" d="M1 7h1M4 7h1M9 6z"/>
          <path stroke="#555" d="M5 5z"/>
          <path stroke="#593" d="M4 4V1h4v2H7V2H4v1H2v1"/>
          <path stroke="#6a4" d="M2 1h1M6 1zM7 2zM9 1v1"/>
          <path stroke="#7c5" d="M5 3zM3 2h1"/>
          <path stroke="#9c6" d="M1 1v1h1M8 1z"/>
        </g>
        <use xlinkHref="#a" transform="matrix(-1 0 0 1 513 0)"/>
        <g transform="matrix(-19 11-19-11 447 159)">
          <path fill="#7b4" d="M.5.5h9v9h-9"/>
          <path stroke="#8c5" d="M1 1zM3 1zM4 7zM3 4v2H1v2h3v1h2V7M2 3h4V1H5v1h3M7 4v1H4M9 4v2H8v3"/>
          <path stroke="#ad7" d="M1 3v2M1 7zM1 9zM3 3zM4 4zM5 1zM5 3zM5 5v1M5 8v1M7 2v1M8 7h1"/>
        </g>
      </g>
    </svg>
  )
}

export function CODLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48.00 48.00" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.192"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#fafe06"
          d="M4.5,10.4674v27.01L8.6159,40.35l6.2959-4.0339.0031-25.1449L8.7,7.6505Z"
        />
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#fafe06"
          d="M43.5,10.4674v27.01L39.3841,40.35l-6.2959-4.0339-.0031-25.1449L39.3,7.6505Z"
        />
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#fafe06"
          d="M30.1834,12.7676V27.3432L24,30.8459,17.816,27.3432V12.7676L24,16.27Z"
        />
      </g>
    </svg>
  )
}