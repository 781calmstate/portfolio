import { ThemeProvider, Layout, Container, Header } from "./components";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Container>
          <Header />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
