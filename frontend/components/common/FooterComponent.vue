<script setup>
const user = useSupabaseUser();

const isLoggedIn = ref(false);

watchEffect(() => {
    isLoggedIn.value = (!user.value) ? false : true;
})
</script>
<template>
    <div class="w-full h-12 bg-dark-main flex justify-center fixed bottom-0 z-50 border-t border-dark-primary">
        <div class="w-5/6 max-w-[80rem] h-full flex items-center justify-center text-center">
            <div class="text-xs text-dark-highlight tracking-tightest opacity-50">
                {{ new Date().getFullYear() }} &copy; George Killeen. All rights reserved.
            </div>
        </div>
    </div>
</template>