import Avatar from './Avatar'; // Ajusta la ruta si es necesario

function App() {
  return (
    <div>
      <Avatar 
        person={{ 
          name: "Lin Lanying", 
          imageUrl: "https://i.imgur.com/1bX5QH6.jpg" 
        }} 
      />
    </div>
  );
}

export default App;