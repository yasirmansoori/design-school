/** Small, decorative drawings that share the landing page's sketchbook style. */
export function SoudhaSketch() {
  return (
    <svg viewBox="0 0 180 136" fill="none" aria-hidden="true">
      <circle cx="137" cy="37" r="23" fill="#eee5f6" />
      <path
        d="M9 113h162M16 108h148M24 103h132M30 98V64h45m30 0h45v34M27 64h48m30 0h48M29 59h46m30 0h46M35 59V48h12v11m86 0V48h12v11M33 48h16m82 0h16M35 44c0-8 12-8 12 0m86 0c0-8 12-8 12 0M41 36v-5m98 5v-5M75 98V52h30v46M72 52h36M76 47h28M79 47V36h22v11M77 36h26M79 32c0-17 22-17 22 0M90 18V9m0 1h9l-3 4h-6"
        stroke="#6e607e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[37, 49, 61, 113, 125, 137].map((x) => (
        <path
          key={x}
          d={`M${x} 94V72h6v22m-7 3h8`}
          stroke="#8d8099"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      ))}
      <path
        d="M83 98V79a7 7 0 0 1 14 0v19M83 60h14M83 65h14M73 103h34M69 108h42"
        stroke="#6e607e"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M13 100V83m0 5c-15-7-9-23 0-19 9-10 22 8 9 15m139 16V82m0 7c-14-9-10-23 0-20 10-8 20 7 8 14"
        stroke="#a5b59a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M45 123c28 4 60 4 89-1"
        stroke="#d0bbdf"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FilterCoffee({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 31c0 8 28 8 28 0M10 31l3 8c4 5 18 5 22 0l3-8M10 31c0-3 28-3 28 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m16 18 2 16c3 3 9 3 12 0l2-16M16 18c0-4 16-4 16 0s-16 4-16 0Z"
        fill="currentColor"
        fillOpacity=".07"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M21 12c-4-4 4-5 0-9m7 9c-4-4 4-5 0-9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GardenSprig({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M28 193C74 142 82 76 125 13M70 128l-34-30m49-4 39-16M96 67 69 41"
        stroke="#9eaf95"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M70 128C42 130 17 113 22 96c24-4 43 9 48 32ZM85 94c3-24 25-39 44-29-3 21-18 30-44 29ZM96 67C72 69 52 47 62 31c22 1 33 13 34 36ZM111 34c-4-20 5-32 21-33 9 16 1 30-21 33Z"
        fill="#e7eddf"
        stroke="#b5c1a9"
        strokeWidth="1.2"
      />
      <g fill="#ddd0ed">
        <circle cx="35" cy="147" r="6" />
        <circle cx="44" cy="153" r="5" />
        <circle cx="34" cy="158" r="5" />
        <circle cx="45" cy="142" r="5" />
      </g>
    </svg>
  );
}
