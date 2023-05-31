import React, { useState } from 'react';
import { mobil } from './Car';
import logo from '../images/logo.png';
import { Card, CardContent, CardMedia, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const CarCard = ({ car }) => {
  return (
    <Card className="car-card">
      <CardMedia
        component="img"
        src={require(`../images/${car.path}`)}
        alt={car.nama}
        className="car-image"
      />
      <CardContent>
        <Typography variant="h6">{car.nama}</Typography>
        <Typography>Merek: {car.merek}</Typography>
        <Typography>Warna: {car.warna}</Typography>
        <Typography>Tipe: {car.tipe}</Typography>
        <Button variant="contained" color="primary">
          LIHAT DETAIL
        </Button>
      </CardContent>
    </Card>
  );
};

const Counter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const filteredCars = mobil.filter((car) => {
    const isSearchMatch = car.nama.toLowerCase().includes(searchQuery.toLowerCase());
    const isTypeMatch = selectedType === '' || car.tipe === selectedType;
    const isBrandMatch = selectedBrand === '' || car.merek === selectedBrand;
    const isColorMatch = selectedColor === '' || car.warna === selectedColor;
    return isSearchMatch && isTypeMatch && isBrandMatch && isColorMatch;
  });

  return (
    
    <div className="App">
         <img src={logo} alt="Logo" className="logo" />
      <h3 className="search-text">Cari Mobil Impian Anda</h3>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <div className="filters">
        <FormControl>
          <InputLabel>Tipe</InputLabel>
          <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <MenuItem value="">Semua</MenuItem>
            <MenuItem value="SUV">SUV</MenuItem>
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="Hatchback">Hatchback</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Merek</InputLabel>
          <Select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <MenuItem value="">Semua</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Nissan">Nissan</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Warna</InputLabel>
          <Select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <MenuItem value="">Semua</MenuItem>
            <MenuItem value="Merah">Merah</MenuItem>
            <MenuItem value="Biru">Biru</MenuItem>
            <MenuItem value="Hitam">Hitam</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="car-container">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
