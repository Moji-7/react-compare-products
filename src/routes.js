import React from 'react'
import ComparingList from './views/compare/ComparingList'

const ProductList = React.lazy(() => import('./views/compare/ProductList'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/productList', name: 'ProductList', element: ProductList },
  { path: '/ComparingList', name: 'ComparingList', element: ComparingList },

]

export default routes
