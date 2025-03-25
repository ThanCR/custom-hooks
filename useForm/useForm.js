import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState( initialForm )

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setformState({
            ...formState,
            [name]: value
        })

    }

    const onResetForm = () =>{
        setformState( initialForm );
    }

    return {
        ...formState, // el spread permite tambien retornar las propiedades para poder desestructurarlo
        formState,
        onInputChange,
        onResetForm
    }
}
