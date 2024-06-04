'use client';
import * as React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import Box from '@mui/material/Box';
import { Autocomplete, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import { ChangeEvent } from 'react';
import router from 'next/router';

export default function Profile() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUser(userData.skills || []);
      setName(userData.name || '');
      setPosition(userData.position || '');
    }
  }, []);

  const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const nextUser = event.target.value;
    const response = await fetch('/api/dashboard?' + new URLSearchParams({ user: nextUser }));

    if (response.ok) {
      const lapalace = await response.json();
      console.log(lapalace);
      sessionStorage.setItem('userData', JSON.stringify(lapalace));
      router.push('/profile');
    } else {
      console.log('error');
    }
  };

  const handleInputOn = async (input: string) => {
    const response = await fetch('/api/dashboard?' + new URLSearchParams({ user: input }));

    if (response.ok) {
      const lapalace = await response.json();
      const newOptions = lapalace.map((user: any) => {
        user.label = user.name;
        console.log(user);
        return user;
      });
      setOptions(newOptions);
    } else {
      console.log('error');
    }
  };

  const initialLetters = (name: string) => {
    const parts = name.split(' ');
    return parts.length >= 2 ? `${parts[0][0]}${parts[1][0]}` : '';
  };

  return (
    <div style={{ height: '500px' }}>
      <Box sx={{ width: 500, maxWidth: '100%' }}>
        <Autocomplete
          onChange={(event: any, newValue: any | null) => {
            sessionStorage.setItem('userData', JSON.stringify(newValue));
            window.location.reload();
          }}
          onInputChange={async (event, newInputValue) => {
            await handleInputOn(newInputValue);
          }}
          options={options}
          sx={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} fullWidth label="fullWidth" id="fullWidth" placeholder="Ingresa un nombre o correo" />
          )}
        />
      </Box>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{initialLetters(name)}</Avatar>
      </Stack>
      <h1>{name}</h1>
      <h2>{position}</h2>
      {user.length > 0 && (
        <ResponsiveRadar
          data={user}
          keys={['skillGrade']}
          indexBy="skillName"
          valueFormat=">-.2f"
          margin={{ top: 122, right: 80, bottom: 40, left: 80 }}
          borderColor={{ from: 'color' }}
          gridLabelOffset={36}
          dotSize={10}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          motionConfig="wobbly"
          legends={[
            {
              anchor: 'top-left',
              direction: 'column',
              translateX: -50,
              translateY: -40,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#999',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: { itemTextColor: '#000' },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}
