// Checking whether the user is logged in or not
export default defineNuxtRouteMiddleware((to, from) => {

    //Getting the supabase user...
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const router = useRouter();

    const pathSuffix = to.fullPath.split('/')[1];
    console.log(user.value);

    if(!user.value){
        //console.log('not logged in')
        if(pathSuffix == '' || pathSuffix != 'auth'){
            return navigateTo('/auth/login');
        }
    } else {
        //console.log('logged in')
        if(pathSuffix == '' || pathSuffix == 'auth'){
            return navigateTo('/admin/');
        }
    }
})