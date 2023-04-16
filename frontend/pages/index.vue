<script setup>
const router = useRouter();
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');

const handleLogin = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signInWithOtp({ email: email.value })
        if (error) throw error
        router.push('/auth/signin')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
}

</script>
<template>
    <div class="w-full h-screen flex justify-center items-center bg-dark-main relative overflow-hidden">
        <CommonMovingBlobComponent class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[25rem] w-[20rem] h-[17.5rem] md:h-[15rem]"/>
        <div class="p-10 py-14 rounded-lg bg-dark-tertiary flex flex-col md:w-[25rem] w-[22.5rem] shadow-sm border border-dark-card z-10 h-[25rem]">
            <!-- Card Header -->
            <div class="w-full h-14 flex justify-start items-center">
                <!-- Icon -->
                <div class="w-14 h-14 relative flex justify-center items-center">
                    <div class="w-14 h-14 rounded-full bg-dark-primary opacity-10 absolute"></div>
                    <div class="tracking-widest font-semibold text-dark-primary text-lg">GK</div>
                </div>
                <!-- Company Title -->
                <div class="text-3xl text-white tracking-widest pl-4 font-light">
                    GK Games
                </div>
            </div>
            <!-- Card Body -->
            <div class="w-full mt-8">
                <form @submit.prevent="handleLogin">
                    <div class="w-full grid grid-rows-2 grid-cols-1 gap-4">
                        <!-- Email -->
                        <div class="w-full">
                            <label for="" class="text-dark-highlight tracking-tightest text-sm font-light">Email Address</label>
                            <input type="email" class="w-full rounded bg-dark-secondary h-12 px-2 border border-dark-primary mt-2 text-white" v-model="email">
                        </div>
                        <div class="w-full">
                            <button
                            type="submit"
                            class="w-full h-12 rounded bg-dark-primary text-white text-sm tracking-wide mt-2 transition-all"
                            :disabled="loading">
                                <span v-if="loading"><i class="fas fa-spinner fa-pulse"></i></span>
                                <span v-else>Sign In</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- Additional Links -->
            <div class="w-full mt-4 flex flex-col justify-center text-center gap-2">
                <!-- Forgotten Password -->
                <NuxtLink class="text-xs text-dark-highlight cursor-pointer hover:underline hover:text-[#E94560] transition-all">Forgotten Password?</NuxtLink>
                <!-- Sign Up -->
                <NuxtLink class="text-xs text-dark-highlight cursor-pointer hover:underline hover:text-[#E94560] transition-all">Not Registered? Sign Up Here</NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>