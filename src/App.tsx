import { Demo } from './Demo';
import { Container } from '@mantine/core'

const App = () => {

  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <Container {...demoProps}>
      <div className="content">
        <h1>Rsbuild with React use Mantine UI</h1>
        <Demo />
      </div>
    </Container>

  );
};

export default App;
