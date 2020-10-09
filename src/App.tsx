// eslint-disable-next-line no-use-before-define
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
)

export default App
