
import './App.css';
import React, { useState } from 'react';

function App() {
  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [distance, setDistance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Stub function for form submit (hook backend/API later)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setDistance(null);
    // TODO: send request to backend & render map and distance
    setTimeout(() => {
      setLoading(false);
      setDistance(12.5); // mock
    }, 1000);
  };

  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '2rem', background: '#f6f8fa', minHeight: '100vh' }}>
      <h2 style={{ color: '#0D2062' }}>KL Shortest Route Finder</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
        <label>
          Point A (start):
          <input value={pointA} onChange={e => setPointA(e.target.value)} type="text" name="pointA" placeholder="e.g., Universiti Putra Malaysia" style={{ width: '100%', padding: 8, marginTop: 4 }} required />
        </label>
        <label>
          Point B (destination):
          <input value={pointB} onChange={e => setPointB(e.target.value)} type="text" name="pointB" placeholder="e.g., KLCC" style={{ width: '100%', padding: 8, marginTop: 4 }} required />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1.2rem', background: '#005fcc', color: 'white', border: 'none', borderRadius: 4 }} disabled={loading}>
          {loading ? 'Finding...' : 'Find Route'}
        </button>
      </form>
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
        <strong>Total Distance:</strong> <span>{distance !== null ? `${distance} km` : '-- km'}</span>
      </div>
      <div style={{ border: '2px dashed #ccc', borderRadius: 8, minHeight: 250, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: '#bbb' }}>[Interactive Map Placeholder]</span>
      </div>
    </div>
  );
}

export default App;
