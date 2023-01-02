import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/card';
import Stack from 'react-bootstrap/esm/Stack';

function App() {
  return (
    <>
  <Stack gap={5}>
  <Card title ="pink" colors="#FF6333" code="#FF6333"/>
  <Card title ="Gray" colors="#333333" code="#333333"/>
  <Card title ="Black" colors="#000000" code="000000"/>
  <Card title ="Orange" colors="#FF8000" code="FF8000"/>
  <Card title ="Yellow" colors="#FFF500" code="FFF500"/>
  <Card title ="Light Gray" colors="#cccccc" code="CCCCCC"/>

  </Stack>
    </>
  );

}

export default App;
