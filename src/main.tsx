import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import { FormProvider } from './formContext.tsx';

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </FormProvider>
  </StrictMode>,
)
