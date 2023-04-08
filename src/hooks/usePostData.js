import {useState} from "react";
import axios from "../api/axios_config";
import {removeIncorrectToken} from "../redux/auth/authSlice";
import notify from "./useNotify";
import {useDispatch} from "react-redux";

const usePostData = (options) => {

    const dispatch = useDispatch()
    const [data, setData] = useState(options.data)
    const [errors, setErrors] = useState({})
    const [isFetching, setFetching] = useState(false)

    const postData = async (uploadData) => {
        setFetching(true)
        try {
            const response = await axios.post(options.url, uploadData, {headers: options.headers})
            setData(response.data)
            setErrors({})
            setFetching(false)
            return response.data
        } catch (errorResponse) {
            setErrors(errorResponse.response.data)
            if(errorResponse.code === 'ERR_NETWORK') notify.error('Отсутствует подключение к интернету!')
            else if(errorResponse.response.status === 401 || errorResponse.response.status === 403) {
                dispatch(removeIncorrectToken())
            } else if(errorResponse.response.status === 400){
                notify.error('Исправьте ошибки!')
            }
            else {
                alert('Ошибка сети!')
            }
        }
        setFetching(false)
        return null
    }

    return {data, isFetching, setData, setFetching, errors, setErrors, postData}

}

export  default  usePostData