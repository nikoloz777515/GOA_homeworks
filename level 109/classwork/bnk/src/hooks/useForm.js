import { useState } from "react";

const useForm = (InitVal) =>{
    const [formData,setFormData] = useState(InitVal || {})

    const handlechange = (e) =>{
        const {name,value} = e.target

        setFormData((prev) =>({...prev, [name]:value }))
    }

    return {formData,handlechange,setFormData}
}

export default useForm