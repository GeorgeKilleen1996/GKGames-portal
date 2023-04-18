<script setup>
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';

const props = defineProps({
    to: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    }
});

const router = useRouter();

const currentPage = ref(router.currentRoute.value.path.split('/')[2]);

watchEffect(() => {
    currentPage.value = router.currentRoute.value.path.split('/')[2];
})

</script>
<template>
    <NuxtLink :to="props.to" class="w-10 h-10 rounded-lg transition-all cursor-pointer flex justify-center items-center mt-4" :class="{'bg-zinc-800': currentPage == props.page, 'bg-transparent hover:bg-zinc-800': currentPage != props.page}" v-tippy="{ content: props.text}">
        <i :class="[{'text-dark-highlight': currentPage != props.page, 'text-dark-primary': currentPage == props.page}, props.icon]"></i>
    </NuxtLink>
</template>