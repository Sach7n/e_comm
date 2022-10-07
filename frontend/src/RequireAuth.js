import { useAuthContext } from "./AuthContext"

function RequireAuth({ value,children }){
    
    const auth = useAuthContext()

    //console.log(auth.User)
    console.log(value)

    if (!value) {
        return <h1>No{console.log('not valid')}</h1>
    }
    return children
}

export default RequireAuth