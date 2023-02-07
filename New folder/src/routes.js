import React from 'react'

const ProductList = React.lazy(() => import('./views/compare/ProductList'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/productList', name: 'ProductList', element: ProductList },

]

export default routes
