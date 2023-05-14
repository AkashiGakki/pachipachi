<!-- <template> -->
  <!-- <main class="px-10 py-20 text-center">
    <slot />
    <Footer />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </div>
  </main> -->
<!-- // </template> -->

<template>
  <div grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]" h-full w-full of-hidden font-sans>
    <div data-scroll relative of-x-hidden of-y-auto>
      <slot />
    </div>
    <NavBar lg:order-first />
    <IframeModal />
    <PhotoModal />
  </div>
</template>
