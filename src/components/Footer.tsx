import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: 'white',
        padding: '2rem 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Stack direction="column" alignItems="center" spacing={3}>
        {/* Qué hacemos */}
        <Typography variant="h6" align="center">
          ¿Qué hacemos?
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: 800 }}>
          Nos dedicamos a promover la educación y conciencia sobre el cuidado del
          medio ambiente, con campañas, reciclaje y mucho más. Únete a nosotros para
          hacer del mundo un lugar más verde y saludable.
        </Typography>

        {/* Síguenos en redes sociales */}
        <Typography variant="h6" align="center">
          Síguenos en redes
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white' }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: 'white' }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white' }}>
            <Instagram />
          </IconButton>
        </Stack>

        {/* Cuéntanos tu proyecto */}
        <Typography variant="h6" align="center">
          Cuéntanos tu proyecto
        </Typography>
        <Typography variant="body1" align="center">
          Si tienes un proyecto ambiental o quieres colaborar con nosotros, escríbenos a{' '}
          <a href="mailto:contacto@medioambiente.com" style={{ color: 'white' }}>
            contacto@medioambiente.com
          </a>
        </Typography>
      </Stack>
    </Box>
  );
}
