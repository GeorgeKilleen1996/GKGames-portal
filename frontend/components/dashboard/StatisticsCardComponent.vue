<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
});

const sales = ref(0);
</script>
<template>
    <div class="w-full h-full bg-dark-main rounded-lg border border-dark-primary drop-shadow-md relative p-2">
        <!-- Icon -->
        <div class="w-10 h-10 rounded-lg absolute top-2 right-2 bg-zinc-800 flex justify-center items-center">
            <i class="text-dark-primary" :class="props.icon"></i>
        </div>
        <!-- Card Title -->
        <div class="h-10 rounded-lg flex justify-start items-center px-2 text-dark-highlight">
            {{ props.title }}
        </div>
        <!-- Card Graph data -->
        <!-- Card Sales number -->
        <div class="text-dark-primary text-6xl tracking-tightest font-semibold absolute bottom-2 right-2">{{ sales }}</div>
    </div>
</template>