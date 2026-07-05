import {Route, Router, Routes} from 'react-router-dom'

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NotFound from '../components/NotFound/NotFound'
import Cart from '../components/Cart/Cart'
import FormCheckOut from '../components/ItemDetailContainer/CheckOut/FormCheckOut'
import Order from '../components/OrderContainer/Order'
import OrderContainer from '../components/OrderContainer/OrderContainer'

function AppRoutes(){

    return(
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categorias/:categoriaId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<FormCheckOut />} />
            <Route path='/order' element={<OrderContainer />} />
            <Route path='/order/:orderId' element={<Order />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes