import { useState, useEffect } from 'react'
import axios from 'axios'
import { productItem_list_mock } from './mockData.js'

//axios.defaults.baseURL = 'http://localhost:4000/digiapi'
axios.defaults.baseURL = 'https://dog.ceo/api/breeds/image'

const useContextService = (axiosParams) => {
  const [dataAll, setDataAll] = useState(undefined)
  const [productItem_list, setProductItem_list] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchSp = async (which) => {
    try {
      setLoading(true)
      const response = await axios.request(axiosParams)
      switch (which) {
        case 'get_productItem_list':
          return productItem_list_mock
        default:
          break
      }

      return await response.data
    } catch (error) {
      setError(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const fetchProductItem_list = async () => {
    let response = await fetchSp('get_productItem_list')
    setProductItem_list(response)
  }

  const fetchDataAll = async () => {
    let _dataAll = {}
    //start step productItem_list
    await fetchProductItem_list()
    _dataAll.productItem_list = productItem_list
    //finish step productItem_list
    setDataAll(_dataAll)
  }

  useEffect(() => {
    fetchDataAll()
  }, [])

  return {
    dataAll,
    loading,
    error,
    fetchProductItem_list,
    productItem_list,
  }
}

export default useContextService
