<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

//Getting whether the user is logged in...
const isLoggedIn = computed(() => user.value !== null);

const logOut = async () => {
    try {
        await supabase.auth.signOut();
        router.push('/');
    } catch (error) {
        alert(error.error_description || error.message)
    }
}

</script>
<template>
    <div class="w-full h-16 bg-dark-main flex justify-center fixed top-0 z-50 border-b border-dark-primary">
        <div class="w-5/6 max-w-[80rem] h-full">
            <div class="w-full h-full flex items-center justify-between">
                <!-- Logo -->
                <div class="w-16 h-16 relative flex justify-center items-center">
                    <div class="w-12 h-12 rounded-full bg-dark-primary opacity-10 absolute"></div>
                    <div class="tracking-widest font-semibold text-dark-primary text-lg"><i class="fas fa-bolt fa-lg"></i></div>
                </div>
                <!-- Links -->
                <div class="w-full h-full flex items-center justify-center">
                    <div class="w-full h-full flex items-center justify-center gap-4">
                    </div>
                </div>
                <!-- Sign In -->
                <div class="w-full h-full flex items-center justify-end">
                    <NuxtLink class="text-sm text-dark-highlight cursor-pointer hover:text-[#E94560] transition-all" v-if="!isLoggedIn">Contact Us</NuxtLink>
                    <NuxtLink class="text-sm text-dark-highlight cursor-pointer hover:text-[#E94560] transition-all" v-if="isLoggedIn" @click="logOut()">Sign Out</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>