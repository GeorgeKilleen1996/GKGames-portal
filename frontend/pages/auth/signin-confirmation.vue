<script setup>
const counter = ref(2);
const router = useRouter();

watchEffect(() => {
    if (counter.value > 0) {
        setTimeout(() => {
            counter.value--;
        }, 1000);
    } else {
        router.push('/user/');
    }
})
</script>
<template>
    <div class="w-full h-screen flex justify-center items-center bg-dark-main relative overflow-hidden">
        <CommonMovingBlobComponent class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[15rem] w-[15rem] h-[15rem] md:h-[15rem]" />
        <div class="p-10 py-14 rounded-lg bg-dark-tertiary flex flex-col md:w-[25rem] w-[22.5rem] shadow-sm border border-dark-card z-10 h-[17.5rem]">
            <!-- Card Header -->
            <div class="w-full h-14 flex justify-center items-center">
                <!-- Icon -->
                <div class="w-14 h-14 relative flex justify-center items-center">
                    <div class="w-14 h-14 rounded-full bg-dark-primary opacity-10 absolute"></div>
                    <i class="fas fa-envelope-circle-check text-dark-primary text-xl"></i>
                </div>
            </div>
            <!-- Card Body -->
            <div class="w-full mt-4 flex flex-col">
                <div class="text-2xl tracking-wide font-semibold text-center text-white">Sign In Successful!</div>
                <div class="text-sm tracking-wide font-light text-center text-dark-highlight pt-2">You have successfully signed in, you will be redirected in... {{ counter }}</div>
            </div>
        </div>
    </div>
</template>