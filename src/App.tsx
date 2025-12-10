import { AppFooter, AppHeader, AppSidebar } from "./components/common"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="page">
        <AppHeader />
        <div className="container">
          <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
            <AppSidebar />
            <section></section>
          </main>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
