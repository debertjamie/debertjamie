import { SVGProps } from "react";

export function NodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" {...props}>
      <path
        fill="#83CD29"
        d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
      />
    </svg>
  );
}

export function DenoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 128 128"
      {...props}
    >
      <path
        className="text-black dark:text-white"
        fill="currentColor"
        d="M64 2C29.755 2 2 29.755 2 64c0 34.245 27.755 62 62 62 34.245 0 62-27.755 62-62 0-34.245-27.755-62-62-62zm32.09 20.126.023-.073.799-3.003.363.266a53.424 53.424 0 0 1 4.771 3.997l-.097.314-.022.073a3.03 3.03 0 0 1-3.488 2.01 3.02 3.02 0 0 1-2.349-3.584zm-13.853 5.716.023-.073c.46-1.55 2.107-2.47 3.705-2.059 1.574.436 2.519 2.059 2.131 3.657v.073l-3.245 11.988-.266-.218a32.286 32.286 0 0 0-5.11-3.1zM71.484 14.497l.023-.073 1.453-5.4.436.072c1.84.315 3.681.727 5.473 1.211l-1.526 5.691-.022.073a3.03 3.03 0 0 1-3.488 2.01 3.02 3.02 0 0 1-2.349-3.584zM49.009 23.7l.023-.073 3.826-14.216.412-.072a57.938 57.938 0 0 1 5.764-.824c.097.436.097.92-.023 1.356l-.022.073-4.117 15.258-.023.073a3.03 3.03 0 0 1-3.488 2.01 3.02 3.02 0 0 1-2.349-3.584zM13.843 56.395c-.46 1.55-2.107 2.47-3.681 2.058a2.867 2.867 0 0 1-1.502-.92 55.517 55.517 0 0 1 6.467-20.295c.242 0 .484.023.726.097a3.042 3.042 0 0 1 2.156 3.657l-.023.073-4.117 15.258zm12.4 8.33v.074l-4.117 15.258-.023.072c-.46 1.526-2.034 2.422-3.608 2.059-1.623-.388-2.616-2.034-2.229-3.657v-.073L20.384 63.2l.022-.073c.46-1.55 2.107-2.47 3.706-2.058 1.574.436 2.519 2.058 2.131 3.657zm1.187-20.78c-1.623-.387-2.616-2.034-2.228-3.656l.022-.073 4.117-15.258.023-.073c.46-1.55 2.107-2.47 3.681-2.058a3.028 3.028 0 0 1 2.156 3.633l-.023.096-4.117 15.258-.023.073c-.46 1.526-2.034 2.422-3.608 2.059zm7.992 52.096-.023.072c-.46 1.526-2.034 2.422-3.608 2.06-1.623-.388-2.616-2.035-2.228-3.658l.022-.073 4.117-15.258.023-.097.194-.46a27.216 27.216 0 0 0 5.231 3.56zm12.473 9.324-.023.073-2.93 10.923-.412-.17a51.943 51.943 0 0 1-5.207-2.252l2.712-10.075.023-.073a3.011 3.011 0 0 1 3.681-2.058c1.599.412 2.543 2.034 2.156 3.633zm16.929-7.726-.073.34v.072l-4.117 15.258-.023.073a3.03 3.03 0 0 1-3.487 2.01 3.032 3.032 0 0 1-2.35-3.584v-.073l4.118-15.258.022-.073a3.026 3.026 0 0 1 3.706-2.059 2.984 2.984 0 0 1 1.889 1.526l.097.436.145.702.097.51zm40.276 3.948c-8.622 9.421-20.441 15.863-33.737 17.631l-.121-.8-.218-1.598-.194-1.162-.218-1.526-.29-1.865-.121-.726-.266-1.768-.17-1.042-.218-1.356-.218-1.308-.218-1.26-.218-1.234-.194-1.211-.218-1.163-.194-1.114-.145-.823-.17-.8-.096-.508-.194-1.017-.146-.727-.169-.896-.145-.63-.12-.605-.122-.581-.073-.388-.17-.726-.12-.533-.121-.533-.097-.339-.12-.484-.098-.46-.12-.46-.121-.437-.073-.266-.121-.412-.097-.387-.073-.266-.097-.243-.072-.218-.097-.339-.073-.242-.049-.145a9.113 9.113 0 0 0-.435-1.138l-.073-.145.557-1.454-2.204.073-.605.023c-20.006.412-32.915-8.09-32.915-21.409 0-14.12 14.047-25.478 32.066-25.478 8.67 0 16.105 2.398 21.966 6.975 4.989 3.9 8.646 9.276 10.535 15.355l.048.145.048.17.097.314.145.582.388 1.356.411 1.55.703 2.567 1.114 4.069 1.792 6.684 2.035 7.605 3.269 12.23 1.235 4.601zm3.052-60.595-.023.073-4.117 15.258-.023.073c-.46 1.525-2.034 2.421-3.609 2.058-1.622-.387-2.615-2.034-2.228-3.657l.023-.073 4.117-15.258v-.072a3.078 3.078 0 0 1 3.705-2.059 3.062 3.062 0 0 1 2.156 3.657zm10.414 20.344-4.142 15.258v.073c-.436 1.623-2.107 2.567-3.73 2.131-1.622-.436-2.567-2.107-2.13-3.73l.022-.072 4.117-15.258.023-.073c.46-1.55 2.107-2.47 3.681-2.059a3.028 3.028 0 0 1 2.156 3.633zM69.329 51.164a3.875 3.875 0 0 1-3.875 3.875 3.875 3.875 0 0 1-3.875-3.875 3.875 3.875 0 0 1 3.875-3.875 3.875 3.875 0 0 1 3.875 3.875z"
      />
    </svg>
  );
}

export function DrizzleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 160 160" fill="none" {...props}>
      <rect
        width="9.63139"
        height="40.8516"
        rx="4.8157"
        transform="matrix(0.873028 0.48767 -0.497212 0.867629 43.4805 67.3037)"
        fill="currentColor"
      />
      <rect
        width="9.63139"
        height="40.8516"
        rx="4.8157"
        transform="matrix(0.873028 0.48767 -0.497212 0.867629 76.9395 46.5342)"
        fill="currentColor"
      />
      <rect
        width="9.63139"
        height="40.8516"
        rx="4.8157"
        transform="matrix(0.873028 0.48767 -0.497212 0.867629 128.424 46.5352)"
        fill="currentColor"
      />
      <rect
        width="9.63139"
        height="40.8516"
        rx="4.8157"
        transform="matrix(0.873028 0.48767 -0.497212 0.867629 94.957 67.3037)"
        fill="currentColor"
      />
    </svg>
  );
}