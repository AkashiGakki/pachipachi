<template>
  <footer p="y15 x15" flex="~ col gap4">
    <div flex="~ row gap2" my2 items-center>
      <img src="/nuxt.svg" width="25" height="25" alt="Logo">
      <div text-xl>
        PachiPachi
      </div>
    </div>
    <div flex="~ row gap2" items-center>
      <div text-sm op50>
        Made with
      </div>
      <a href="https://v3.nuxtjs.org/" target="_blank" title="Nuxt 3">
        <IconNuxt3 h6 />
      </a>
    </div>
    <div flex="~ row gap2" items-center>
      <p text-sm text-true-gray:90>
        Data provided by&nbsp;
        <a target="_blank" href="https://www.themoviedb.org/" title="The Movie Database" rel="noopener" n-link-text op100>
          <IconTMDB inline h4 />
        </a>
      </p>
    </div>
    <div flex="~ row gap2" items-center>
      <p text-sm text-true-gray:90>
        This project uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
    <div>
      <ExternalLinks
        :links="{
          twitter_id: 'null',
          github_id: 'akashigakki/pachipachi',
        }"
      >
        <DarkToggle />
        <a href="https://vercel.com" rel="noopener" target="_blank" aria-label="go to vercel">
          <IconVercel alt="Vercel" />
        </a>
      </ExternalLinks>
    </div>
  </footer>
</template>
