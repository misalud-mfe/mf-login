import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!form.username || !form.password) {
      setError('Por favor, completa todos los campos.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (form.username === 'admin' && form.password === 'admin') {
        alert('¡Bienvenido!');
      } else {
        setError('Usuario o contraseña incorrectos.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{
      display: 'flex',
      height: '98vh',
      fontFamily: 'Arial, sans-serif',
      background: '#f0f6fb'
    }}>
      <div style={{
        flex: 1,
        backgroundImage: `url('https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?semt=ais_hybrid&w=740')`, 
        backgroundSize: '',
        backgroundPosition: 'center',
        filter: 'brightness(0.95)'
      }} />

      {/* Lado Derecho con login */}
      <div style={{
        flex: 1,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '-2px 0 10px rgba(0,0,0,0.05)',
        padding: 40
      }}>
        <div style={{
          width: '100%',
          maxWidth: 400
        }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: 32,
            color: '#1976d2'
          }}>
            MI SALUD
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontWeight: 500 }}>Usuario</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: 10,
                  marginTop: 6,
                  borderRadius: 8,
                  border: '1px solid #ccc',
                  outlineColor: '#1976d2'
                }}
                autoComplete="username"
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontWeight: 500 }}>Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: 10,
                  marginTop: 6,
                  borderRadius: 8,
                  border: '1px solid #ccc',
                  outlineColor: '#1976d2'
                }}
                autoComplete="current-password"
              />
            </div>
            {error && (
              <div style={{
                color: '#d32f2f',
                marginBottom: 12,
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: 12,
                borderRadius: 8,
                border: 'none',
                background: '#1976d2',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 16,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s'
              }}
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
