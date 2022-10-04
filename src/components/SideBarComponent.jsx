import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const SideBarContainer = ({ user, setUser }) => {
  const [dni, setDni] = useState();
  return (
    <SideContainer>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#010F25',
        }}
      >
        <InputBuscador onChange={(e) => setDni(e.target.value)} />
        <Button
          variant="outlined"
          sx={{ background: 'white', display: 'flex', margin: 'auto' }}
          onClick={() => setUser('info')}
        >
          Buscar
        </Button>
      </Box>
    </SideContainer>
  );
};

export default SideBarContainer;

const InputBuscador = styled.input`
  display: flex;
  margin: 10% auto 5% auto;
  width: 80%;
  height: 2vw;
  border-radius: 5px 5px;
  font-size: 1.5vw;
`;

const SideContainer = styled.div`
  display: flex;
  width: 20%;
  height: 93vh;
`;
