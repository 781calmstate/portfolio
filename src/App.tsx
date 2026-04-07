import {
  ThemeProvider,
  Layout,
  Container,
  Header,
  CustomCursor,
} from "./components";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Container>
          <Header />
        </Container>
        <CustomCursor />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
