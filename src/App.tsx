import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main >
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Bienvenue sur KANBANs avec VITE 
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 16, md: 4 }}
          >
            <Column column={ColumnType.A_FAIRE} />
            <Column column={ColumnType.EN_PROGRESS} />
            <Column column={ColumnType.BLOQUER} />
            <Column column={ColumnType.COMPLET} />
          </SimpleGrid>
        </Container>
      </DndProvider> 
      
    </main>
  );
}

export default App;
