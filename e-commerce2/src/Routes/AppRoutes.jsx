import {Route, Router, Routes} from 'react-router-dom'

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NotFound from '../components/NotFound/NotFound'
import Cart from '../components/Cart/Cart'

function AppRoutes(){

    return(
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categorias/:categoriaId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes