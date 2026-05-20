import {Route, Router, Routes} from 'react-router-dom'

import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

function AppRoutes({setCarrito}){
    return(
        <Routes>
            <Route path='productos/item/detail/:id' element={<ItemDetailContainer setCarrito={setCarrito} />} />
            <Route path='/' element={<ItemListContainer />} />
        </Routes>
    )
}

export default AppRoutes