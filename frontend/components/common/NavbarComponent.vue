<script setup>
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const isLoggedIn = ref(false);

watchEffect(() => {
    if (user.value) {
        isLoggedIn.value = true;
    } else {
        isLoggedIn.value = false;
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
    <div>
        <!-- Top Navbar -->
        <div class="w-full h-14 bg-dark-main flex justify-center fixed top-0 z-50 border-b border-dark-primary">
            <div class="w-full max-w-[80rem] h-full md:px-0 px-4">
                <div class="w-full h-full flex items-center justify-between">
                    <!-- Logo -->
                    <div class="w-full h-full relative flex justify-center items-center" v-if="!isLoggedIn">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-pink-600 opacity-10 absolute"></div>
                        <div class="tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-pink-600 text-md"><i class="fas fa-bolt fa-lg"></i></div>
                    </div>
                    <!-- Logged In Components -->
                    <div class="w-full h-full flex items-center justify-end" v-if="isLoggedIn">
                        <NuxtLink class="text-sm text-dark-highlight cursor-pointer hover:text-[#E94560] transition-all" @click="logOut()">Sign Out</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- Side Navbar -->
        <div class="w-14 h-full bg-dark-main flex flex-col justify-between fixed top-0 left-0 border-r border-dark-primary z-50" v-if="isLoggedIn">
            <div class="w-full h-14">
                <div class="w-full h-full relative flex justify-center items-center">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-pink-600 opacity-10 absolute"></div>
                    <div class="tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-pink-600 text-md"><i class="fas fa-bolt fa-lg"></i></div>
                </div>
            </div>
            <div class="w-full h-[calc(100vh-7rem)] flex flex-col items-center">
                <CommonNavigationLink v-for="item in navItems" :to="item.to" :icon="item.icon" :text="item.text" :page="item.page" />
            </div>
            <div class="w-full h-14 flex justify-center items-center">
                <div class="w-10 h-10 rounded-lg bg-transparent hover:bg-zinc-800 transition-all cursor-pointer flex justify-center items-center" v-tippy="{ content: 'Account Settings'}">
                    <i class="fas fa-user-gear text-dark-highlight"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default  {
    name:  'NavbarComponent' ,
    data() {
        return {
            navItems: [
                {
                    to: '/admin/',
                    icon: 'fas fa-house',
                    text: 'Dashboard',
                    page: ''
                },
                {
                    to: '/admin/orders',
                    icon: 'fas fa-truck-fast',
                    text: 'Orders',
                    page: 'orders'
                },
                {
                    to: '/admin/inventory',
                    icon: 'fas fa-cubes',
                    text: 'Inventory',
                    page: 'inventory'
                },
                {
                    to: '/admin/analytics',
                    icon: 'fas fa-chart-simple',
                    text: 'Analytics',
                    page: 'analytics'
                },
            ] 
        }
    },
}
</script>