import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton, InputAdornment, Snackbar, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Auth.css';

const Registrar = () => {
  const [name, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error'); // Tipo literal
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const validateEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setAlertMessage('El correo electrónico debe contener "@" y "."');
      setAlertSeverity('error');
      setOpenAlert(true);
      return;
    }

    if (!validatePassword(password)) {
      setAlertMessage('La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.');
      setAlertSeverity('error');
      setOpenAlert(true);
      return;
    }

    const datosUsuario = { name, email, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/API/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Guardar el token en el Local Storage
        navigate('/inicio'); // Redirigir al inicio
      } else {
        console.error('Error en el registro');
        setAlertMessage('Error al registrar el usuario');
        setAlertSeverity('error');
        setOpenAlert(true);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      setAlertMessage('Error al registrar el usuario');
      setAlertSeverity('error');
      setOpenAlert(true);
    }
  };

  return (
    <Box className="user-container">
      <div className="form-wrapper">
        <img src="/images/naturalink.jpg" alt="Logo" width="180px" />
        <Typography variant="h5" align="center" gutterBottom>
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
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
            onChange={(e) => setContraseña(e.target.value)}
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
            Registrarse
          </Button>
        </form>

        {/* Snackbar para mostrar alertas */}
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert onClose={handleCloseAlert} severity={alertSeverity} sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>

        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </Typography>
      </div>
    </Box>
  );
};

export default Registrar;




