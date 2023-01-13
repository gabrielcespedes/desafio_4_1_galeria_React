import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <div className="App">
      <Header text="Galería de Imágenes con React"></Header>
      <Card url={"https://images.pexels.com/photos/14985352/pexels-photo-14985352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title_image = "Ganso de Toulouse" description = "Es un ave procedente de la cría selectiva del ganso común salvaje (Anser anser) en esta región de Francia. Visualmente es muy parecido al ganso común, pero es de mayor tamaño y peso."></Card>
      <Card url={"https://images.pexels.com/photos/14964344/pexels-photo-14964344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title_image="Gaviota Patiamarilla" description="Es una especie de ave Charadriiforme de la familia Laridae. Pertenece al grupo de las gaviotas de talla mediana, de manto gris y patas amarillas."></Card>
      <Card url={"https://images.pexels.com/photos/14483392/pexels-photo-14483392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title_image="Águila Mora" description="Es una especie de ave accipitriforme de la familia Accipitridae. Se trata de un ave de presa que vive en Sudamérica."></Card>
      <Card url={"https://images.pexels.com/photos/14483367/pexels-photo-14483367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title_image="Aguililla Rojinegra" description="La aguililla rojinegra, también conocida como gavilán mixto, gavilán acanelado, águila de Harris o peuco (Parabuteo unicinctus) es una especie de ave accipitriforme de la familia Accipitridae."></Card>
      <Card url={"https://images.pexels.com/photos/14898826/pexels-photo-14898826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title_image="Garza Real" description="La garza real (Ardea cinerea) o airón es una especie de ave pelecaniforme de la familia Ardeidae propia de Eurasia y África. Es un ave acuática esbelta y de gran tamaño, de largos cuello y patas, con plumaje principalmente gris. "></Card>
      <Card url={"https://images.pexels.com/photos/14880213/pexels-photo-14880213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} title_image="Pelícano Oriental" description="El pelícano oriental(Pelecanus philippensis) es una especie de ave pelecaniforme de la familia Pelecanidae presente en un gran territorio que va desde la India hasta Filipinas y de Indonesia a China. No se reconocen subespecies."></Card>  
      <Footer><Badge>Ver aplicación móvil</Badge></Footer>    
    </div>
  );
}

export default App;
