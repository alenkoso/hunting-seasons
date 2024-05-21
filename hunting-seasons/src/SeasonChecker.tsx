// src/SeasonChecker.tsx
import React, { useState, useEffect } from 'react';
import seasonsData from './data/countries/slovenia/huntingseasons.json'
import { TextField, Typography, Container, Grid, List, ListItem, ListItemText } from '@mui/material';

interface Season {
    type: string;
    start_date: string;
    end_date: string;
}

interface SpeciesSeasons {
    species: string;
    image?: string;
    description?: string;
    seasons: Season[];
}

const SeasonChecker: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [activeSeasons, setActiveSeasons] = useState<SpeciesSeasons[]>([]);

    useEffect(() => {
        const checkSeasons = () => {
            const active: SpeciesSeasons[] = seasonsData.filter((species: SpeciesSeasons) => 
                species.seasons.some((season: Season) => 
                    selectedDate >= season.start_date && selectedDate <= season.end_date
                )
            );
            setActiveSeasons(active);
        };

        checkSeasons();
    }, [selectedDate]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Lovne sezone za {new Date(selectedDate).toDateString()}
            </Typography>
            <TextField
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                label="Izberi datum"
                fullWidth
                margin="normal"
            />
            <Grid container spacing={3}>
                {activeSeasons.map((species, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="h5">{species.species}</Typography>
                        <List>
                            {species.seasons.map((season, i) => (
                                <ListItem key={i}>
                                    <ListItemText primary={season.type} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SeasonChecker;
