// Checking whether the user is logged in or not
export default defineNuxtRouteMiddleware((to, from) => {

    //Getting the supabase user...
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const router = useRouter();

    const pathSuffix = to.fullPath.split('/')[1];

    if(!user.value && pathSuffix != 'auth'){
        router.push('/auth/login');
    }
})