import {useEffect, useState} from "react";
import axios from "../api/axios_config";
import notify from './useNotify'
import {useDispatch} from "react-redux";
import {removeIncorrectToken} from "../redux/auth/authSlice";
import {useNavigate} from "react-router-dom";

const useGetData = (options) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [isFetching, setFetching] = useState(true)
    const [isPaginating, setPaginating] = useState(false)
    const [nextPage, setNextPage] = useState(null)
    const [params, setParams] = useState({})

    const getData = () => {
        setFetching(true)
        axios.get(options.url, {params: {...options.params, ...params}, headers: options.headers})
        .then(response => {
            setData(response.data)
            setNextPage(response.data.next)
        })
        .catch(error => {
            if(error.code === 'ERR_NETWORK') notify.error('Отсутствует подключение к интернету!')
            else if(error.response.status === 401 || error.response.status === 403) {
                dispatch(removeIncorrectToken())
            } else if(error.response.status === 400){
                notify.error('Исправьте ошибки!')
            }
            else if(error.response.status === 404){
                navigate('/')
                notify.error('Cтраница не существует!')
            }
            else {
                alert('Ошибка сети!')
            }
        }).finally(() => setFetching(false))
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [params])

    const openNextPage = () => {
        setPaginating(true)
        axios.get(nextPage, {params: {...options.params, ...params}, headers: options.headers})
        .then(response => {
            setData({results: [...data.results, ...response.data.results]})
            setNextPage(response.data.next)
        })
        .catch(error => {
            if(error.response.status === 401 || error.response.status === 403) {
                dispatch(removeIncorrectToken())
            } else if(error.response.status === 400){
                notify.error('Исправьте ошибки!')
            }
            else {
                alert('Ошибка сети!')
            }
        }).finally(() => setPaginating(false))
    }

    return {
        data, 
        setData, 
        isFetching, 
        getData,
        nextPage, 
        openNextPage,
        params, 
        setParams, 
        isPaginating, 
        setPaginating
    }

}

export default useGetData