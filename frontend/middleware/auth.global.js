// Checking whether the user is logged in or not
export default defineNuxtRouteMiddleware((to, from) => {

    //Getting the supabase user...
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const router = useRouter();

    if(user.value){

        supabase.from('user').select('permission').eq('id', user.value.id).then(({ data, error }) => {
            // If the user is already in the user table...
            if(data.length > 0){
                if(data[0].permission == 2 || data[0].permission == 1){
                    router.push('/admin/');
                } else {
                    router.push('/user/account');
                }
            } 
            // If the user is not in the user table...
            else {
                supabase.from('user').insert([
                    {
                        id: user.value.id,
                        permission: 0
                    }
                ]).then(({ data, error }) => {
                    if(error){
                        console.log(error);
                    } else {
                        router.push('/user/account');
                    }
                })
            }
        })
    } else {
        router.push('/');
    }
})