import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f6f8fa', minHeight: '100vh' }}>
      <h2>KL Shortest Route Finder</h2>
      <form style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <label>
          Point A (start):
          <input type="text" name="pointA" placeholder="e.g., Universiti Putra Malaysia" style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <label>
          Point B (destination):
          <input type="text" name="pointB" placeholder="e.g., KLCC" style={{ width: '100%', padding: 8, marginTop: 4 }} />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1.2rem', background: '#005fcc', color: 'white', border: 'none', borderRadius: 4 }}>Find Route</button>
      </form>
      <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
        <strong>Total Distance:</strong> <span>-- km</span>
      </div>
      <div style={{ border: '2px dashed #ccc', borderRadius: 8, minHeight: 250, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#bbb' }}>[Interactive Map Placeholder]</span>
      </div>
    </div>
  );
}

export default App;
