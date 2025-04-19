<template>
  <div class="absolute opacity-5">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <pattern
        id="footer-pattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="5" cy="5" r="1" fill="currentColor"></circle>
      </pattern>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#footer-pattern)"
      ></rect>
    </svg>
  </div>
</template>
