<script setup>
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

const isLoggedIn = ref(false);
const accountSettings = ref(false);

const breadcrumbs = ref((router.currentRoute.value.path.split('/')[2] == '') ? 'Dashboard' : router.currentRoute.value.path.split('/')[2].replace('-', ' '));
const userInitial = ref(user.value.email.charAt(0).toUpperCase());

watchEffect(() => {
    breadcrumbs.value = (router.currentRoute.value.path.split('/')[2] == '') ? 'Dashboard' : router.currentRoute.value.path.split('/')[2].replace('-', ' ');
    if (user.value) {
        isLoggedIn.value = true;
    } else {
        isLoggedIn.value = false;
        router.push('/auth/login');
    }
})

const logOut = async () => {
    try {
        await supabase.auth.signOut();
        accountSettings.value = false;
    } catch (error) {
        alert(error.error_description || error.message)
    }
}

</script>
<template>
    <div>
        <!-- Top Navbar -->
        <div class="w-full h-14 bg-dark-main flex justify-center fixed top-0 z-50 border-b border-dark-primary">
            <div class="w-full h-full md:px-0 px-4 ml-14">
                <div class="w-full h-full flex items-center justify-between">
                    <!-- Logo -->
                    <div class="w-full h-full relative flex justify-center items-center" v-if="!isLoggedIn">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-pink-600 opacity-10 absolute"></div>
                        <div class="tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-pink-600 text-md"><i class="fas fa-bolt fa-lg"></i></div>
                    </div>
                    <!-- Logged In Components -->
                    <div class="w-full h-full flex items-center justify-between px-4" v-if="isLoggedIn">
                        <div class="w-full h-full flex justify-start items-center text-dark-highlight capitalize">
                            {{ breadcrumbs }}
                        </div>
                        <div class="w-full h-full flex justify-end items-center">
                            <div class="w-10 h-10 rounded-lg bg-transparent hover:bg-zinc-800 transition-all cursor-pointer flex justify-center items-center relative mr-2" v-tippy="{ content: 'Notifications'}">
                                <i class="fas fa-bell text-dark-highlight"></i>
                            </div>
                            <div class="w-10 h-10 flex justify-center items-center relative">
                                <div class="w-10 h-10 rounded-full bg-dark-primary opacity-10 absolute"></div>
                                <div class="tracking-widest font-semibold text-dark-primary text-md">{{ userInitial }}</div>
                            </div>
                        </div>
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
                <div class="w-10 h-10 rounded-lg bg-transparent hover:bg-zinc-800 transition-all cursor-pointer flex justify-center items-center relative" v-tippy="{ content: 'Account Settings'}" @click="accountSettings = !accountSettings">
                    <i class="fas fa-user-gear text-dark-highlight"></i>
                </div>
                <div class="grid grid-cols-1 grid-rows-5 bg-dark-main rounded-lg absolute bottom-12 -right-[8rem] gap-2 border border-dark-primary overflow-hidden" v-if="accountSettings">
                    <div class="w-full h-8 text-dark-highlight flex justify-start items-center text-sm hover:bg-zinc-800 cursor-pointer transition-all pr-4">
                        <i class="fa-solid fa-circle-user text-sm px-2"></i>
                        Account
                    </div>
                    <div class="w-full h-8 text-dark-highlight flex justify-start items-center text-sm hover:bg-zinc-800 cursor-pointer transition-all pr-4 relative">
                        <i class="fa-solid fa-moon text-sm px-2"></i>
                        Dark Mode
                        <div class="w-[0.5rem] h-[0.5rem] rounded-full flex justify-center items-center bg-dark-primary blur-sm absolute right-4">
                        </div>
                        <i class="fas fa-circle text-dark-primary text-[0.5rem] pl-4"></i>
                    </div>
                    <div class="w-full h-8 text-dark-highlight flex justify-start items-center text-sm hover:bg-zinc-800 cursor-pointer transition-all pr-4">
                        <i class="fa-solid fa-sun text-sm px-2"></i>
                        Light Mode
                    </div>
                    <div class="w-full h-8 text-dark-highlight flex justify-start items-center text-sm hover:bg-zinc-800 cursor-pointer transition-all pr-4">
                        <i class="fa-solid fa-database text-sm px-2"></i>
                        Database
                    </div>
                    <div class="w-full h-8 text-dark-highlight flex justify-start items-center text-sm hover:bg-zinc-800 cursor-pointer transition-all pr-4" @click="logOut();">
                        <i class="fa-solid fa-arrow-right-from-bracket text-sm px-2"></i>
                        Sign Out
                    </div>
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
                {
                    to: '/admin/ebay-integration',
                    icon: 'fas fab fa-ebay',
                    text: 'eBay',
                    page: 'ebay-integration'
                },
                {
                    to: '/admin/facebook-integration',
                    icon: 'fas fab fa-facebook',
                    text: 'Facebook Marketplace',
                    page: 'facebook-integration'
                },
            ] 
        }
    },
}
</script>