export default function Logo({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/*
        NGMI Brand Mark — Arrow-N
        The N's right pillar ends in an arrowhead pointing up.
        Reads as both the letter "N" and an upward arrow — 
        the brand message built into the geometry.
      */}
      <path
        d="M3 38V6H11L25 28V6L29 0L33 6V38H25L11 16V38H3Z"
        fill="var(--color-accent, #c8ff00)"
      />
    </svg>
  )
}
