import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Auth.css';

const IniciarSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensaje de error
  const navigate = useNavigate();

  // Función para mostrar/ocultar la contraseña
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Función para manejar el submit del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    const datosUsuario = { email, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/API/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Guarda el token en localStorage
        navigate('/inicio'); // Redirige a la página de inicio
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Credenciales invalidas');
      }
    } catch (error) {
      console.error('Error al autenticar:', error);
      setErrorMessage('Error al autenticar. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <Box className="user-container">
      <div className="form-wrapper">
        <img src="/images/naturalink.jpg" alt="Logo" width="180px" />
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Iniciar sesión
          </Button>
          
          {/* Mostrar mensaje de error si existe */}
          {errorMessage && <Typography color="error" align="center" style={{ marginTop: '10px' }}>{errorMessage}</Typography>}

          <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
            ¿Aún no tienes cuenta? <Link to="/registro">Registrarse</Link>
          </Typography>
        </form>
      </div>
    </Box>
  );
};

export default IniciarSesion;

