import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
const [photos,setPhotos] = useState([
  {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
]); 

const [flowers, setFlowers] = useState(true)
const [animals, setAnimals] = useState(true)
const [cars, setCars] = useState(true)

const filteredPhotos = photos.filter((element) => {
  if (element.category === 1 && flowers === true){
    return true
  }
  if (element.category === 2 && animals === true){
    return true
  }
  if (element.category === 3 && cars === true){
    return true
  }
  return false
})

const updateDownloads = (id) => {
  setPhotos(photos.map((photo) => {
    if (photo.id === id){
      photo.downloads +=1 ;
      return photo
    }
    return photo
  })
);
}

return (
  <>
  <h1>Kategorie zdjęć</h1>
  <div className="form-check form-switch form-check-inline">
 <input
  checked={flowers}
 onChange={() => setFlowers(!flowers)}
  className="form-check-input" type="checkbox" id="flowers"/>
 <label className="form-check-label" htmlFor="flowers">Kwiaty</label>
</div>
<div className="form-check form-switch form-check-inline">
 <input
  checked={animals}
 onChange={() => setAnimals(!animals)}
  className="form-check-input" type="checkbox" id="animals"/>
 <label className="form-check-label" htmlFor="animals">Zwierzęta</label>
</div>
<div className="form-check form-switch form-check-inline">
 <input
  checked={cars}
 onChange={() => setCars(!cars)}
  className="form-check-input" type="checkbox" id="cars"/>
 <label className="form-check-label" htmlFor="cars">Samochody</label>
</div>

<div className="row">
  {filteredPhotos.map((element) => {
    return (
      <div className="col" key={element.id}>
        <img style={{margin: "5px",
        borderRadius: "8px",}} 
        src={"assets/" + element.filename} alt={element.alt}/>
        <h4>Pobrań:{element.downloads}</h4>
        <button onClick={() => updateDownloads(element.id)} type="button" className="btn btn-success">Pobierz</button>
        </div>
    );
  })}
</div>
    </>
);
}

export default App;
