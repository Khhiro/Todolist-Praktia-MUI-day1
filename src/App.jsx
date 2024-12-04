import { Box, Button, Typography } from '@mui/material';
import Table from './components/Table';
import { useState } from 'react';

export default function App() {
  const [cout, setCout] = useState(false);

  const addModal = () => {
    if (cout) {
      return (<div style={{
        fontFamily: 'sans-serif',
        background: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: '100vh',
        margitTop:'-100px',
        position: 'absolute',
        marginTop: '-420px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '20px', color: '#333' }}>New Add User</h2>

          <input
            placeholder='Avatar URL'
            type="text"
            style={{
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
          <input
            placeholder='Name'
            type="text"
            style={{
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
          <input
            placeholder='Email'
            type="email"
            style={{
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
          <input
            placeholder='Phone'
            type="tel"
            style={{
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />

          <select
            style={{
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          <select
            style={{
              padding: '10px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          >
            <option value="Dushanbe">Dushanbe</option>
            <option value="Khujand">Khujand</option>
            <option value="Varzob">Varzob</option>
          </select>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: '#fff',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
            >
              Save
            </button>
            <button
              onClick={() => setCout(false)}
              style={{
                backgroundColor: '#f44336',
                color: '#fff',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      );
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h2'>Table</Typography>
        <Button
          onClick={() => {
            setCout(true);
          }}
          variant="contained"
        >
          Contained
        </Button>
      </Box>

      <Table />

      {addModal()}
    </>
  );
}
