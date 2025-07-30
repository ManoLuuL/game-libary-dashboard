import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './contexts/ThemeContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import Header from './components/header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <FavoritesProvider>
          <Router>
            <div className='min-h-screen bg-background text-foreground'>
              <Header />
              <main className='container mx-auto px-4 py-8'>
                <Routes>
                  <Route
                    path='/'
                    element={<HomePage />}
                  />
                  <Route
                    path='/game/:id'
                    element={<GameDetailsPage />}
                  />
                  <Route
                    path='/favorites'
                    element={<FavoritesPage />}
                  />
                </Routes>
              </main>
            </div>
          </Router>
        </FavoritesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
