import {Route, Routes} from 'react-router-dom'
import { HeroesRoute } from '../heroes'
import { LoginPage } from '../auth'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'


export const AppRouter = () => {
  return (
    <>
        <Routes>

          {/* RUTA PUBLICA */}
            <Route path='login' element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>}
            />

            {/* RUTA PRIVADA */}
            <Route path='/*' element={
              <PrivateRouter>
                <HeroesRoute />
              </PrivateRouter>} 
            />

        </Routes>

    </>
  )
}
