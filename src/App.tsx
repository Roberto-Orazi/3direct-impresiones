import { StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppNavigation } from './Components/navigation/navigation'


// eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
// window.Buffer = window.Buffer || require('buffer').Buffer

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * (1000 * 60) // 2 min
    }
  }
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst>
        <AppNavigation />
    </StyledEngineProvider>
  </QueryClientProvider>
)

export default App
