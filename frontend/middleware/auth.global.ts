export default defineNuxtRouteMiddleware((to, from) => {

    const user = useSupabaseUser();
    const pathSuffix = to.fullPath.split('/')[1];

    if(!user.value){
        if(pathSuffix == '' || pathSuffix != 'auth'){
            return navigateTo('/auth/login');
        }
    } else {
        if(pathSuffix == '' || pathSuffix == 'auth'){
            return navigateTo('/admin/');
        }
    }
})