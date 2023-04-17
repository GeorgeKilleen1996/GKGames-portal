// Checking whether the user is logged in or not
export default defineNuxtRouteMiddleware((to, from) => {

    //Getting the supabase user...
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const router = useRouter();

    const pathSuffix = to.fullPath.split('/')[1];

    if(!user.value){ // If the user is not logged in
        if(pathSuffix === 'admin' || pathSuffix === 'user'){
            router.push('/');
        }
    } else { // If the user is logged in
        supabase.from('user').select('permission').eq('id', user.value.id).then(({data, error}) => {
            if(data.length === 0){
                // If the user is not in the database create a user...
                supabase.from('user').insert([
                    {
                        id: user.value.id,
                        permission: 0
                    }
                ]).then(({data, error}) => {
                    if(error){
                        console.log(error);
                    } else {
                        router.push('/user/account'); //Redirect to user section
                    }
                });
            } else if(data[0].permission > 0){
                router.push('/admin/'); //Redirect to admin section
            } else {
                router.push('/user/'); //Redirect to user section
            }
        });
    }
})