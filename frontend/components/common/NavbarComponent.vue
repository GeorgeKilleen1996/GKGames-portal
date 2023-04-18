<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

const isLoggedIn = ref(false);

watchEffect(() => {
    if (user.value) {
        isLoggedIn.value = true;
        router.push('/admin/');
    } else {
        isLoggedIn.value = false;
        router.push('/auth/login');
    }
})

const logOut = async () => {
    try {
        await supabase.auth.signOut();
    } catch (error) {
        alert(error.error_description || error.message)
    }
}

</script>
<template>
    <div class="w-full h-14 bg-dark-main flex justify-center fixed top-0 z-50 border-b border-dark-primary">
        <div class="w-5/6 max-w-[80rem] h-full">
            <div class="w-full h-full flex items-center justify-between">
                <!-- Logo -->
                <div class="w-16 h-16 relative flex justify-center items-center">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-pink-600 opacity-10 absolute"></div>
                    <div class="tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-pink-600 text-md"><i class="fas fa-bolt fa-lg"></i></div>
                </div>
                <!-- Links -->
                <div class="w-full h-full flex items-center justify-center">
                    <div class="w-full h-full flex items-center justify-center gap-4">
                    </div>
                </div>
                <!-- Logged In Components -->
                <div class="w-full h-full flex items-center justify-end" v-if="isLoggedIn">
                    <!-- <NuxtLink class="text-sm text-dark-highlight cursor-pointer hover:text-[#E94560] transition-all" v-if="!isLoggedIn">Contact Us</NuxtLink> -->
                    <NuxtLink class="text-sm text-dark-highlight cursor-pointer hover:text-[#E94560] transition-all" @click="logOut()">Sign Out</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>