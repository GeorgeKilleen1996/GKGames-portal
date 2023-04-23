<script setup>
const props = defineProps({
    delay: {
        type: Number,
        default: 0
    }
});
const element = ref(null);
// const isInViewport = (element) => {
//     if (!element) {
//         return false;
//     }
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };
const fade = () => {
    // element.value.classList.add('opacity-1');
    setTimeout(() => {
        element.value.classList.remove('opacity-0');
        element.value.classList.remove('-translate-y-[1rem]');
    }, props.delay * 1000);
};
// const handleScroll = () => {
//     if (isInViewport(element.value) && element.value.classList.contains('opacity-0')) {
//         fade();
//         window.removeEventListener('scroll', handleScroll);
//     }
// };
onMounted(() => {
    // Do a handleScroll on mount in case the element is already in view
    fade();
    // window.addEventListener('scroll', handleScroll);
});
</script>
<template>
  <div ref="element" class="-translate-y-[1rem] transition-all duration-1000 ease-in-out opacity-0">
    <slot />
  </div>
</template>