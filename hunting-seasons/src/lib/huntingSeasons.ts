import { parseISO, isWithinInterval } from 'date-fns';

export interface Season {
  type: string;
  startDate: string;
  endDate: string;
}

export interface Species {
  name: string;
  seasons: Season[];
}

export const huntingSeasons: Species[] = [
    {
        name: "Srna",
        seasons: [
            {
                type: "srnjak, lanščak",
                startDate: "2024-05-01",
                endDate: "2024-10-31"
            },
            {
                type: "srna, mladiči obeh spolov",
                startDate: "2024-09-01",
                endDate: "2024-12-31"
            },
            {
                type: "mladica",
                startDate: "2024-05-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Navadni jelen",
        seasons: [
            {
                type: "jelen",
                startDate: "2024-08-16",
                endDate: "2024-12-31"
            },
            {
                type: "košuta",
                startDate: "2024-09-01",
                endDate: "2024-12-31"
            },
            {
                type: "teleta obeh spolov",
                startDate: "2024-09-01",
                endDate: "2024-01-31"
            },
            {
                type: "junica, lanščak",
                startDate: "2024-07-01",
                endDate: "2024-01-31"
            }
        ]
    },
    {
        name: "Damjak",
        seasons: [
            {
                type: "jelen",
                startDate: "2024-08-16",
                endDate: "2024-12-31"
            },
            {
                type: "košuta",
                startDate: "2024-09-01",
                endDate: "2024-12-31"
            },
            {
                type: "teleta obeh spolov",
                startDate: "2024-09-01",
                endDate: "2024-01-31"
            },
            {
                type: "junica, lanščak",
                startDate: "2024-07-01",
                endDate: "2024-01-31"
            }
        ]
    },
    {
        name: "Muflon",
        seasons: [
            {
                type: "oven, lanščaki obeh spolov in jagnjeta obeh spolov",
                startDate: "2024-08-01",
                endDate: "2024-02-28"
            },
            {
                type: "ovca",
                startDate: "2024-08-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Gams",
        seasons: [
            {
                type: "kozel, koza, kozliči obeh spolov, enoletni obeh spolov",
                startDate: "2024-08-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Kozorog",
        seasons: [
            {
                type: "kozel, koza, kozliči obeh spolov, enoletni obeh spolov",
                startDate: "2024-08-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Divji prašič",
        seasons: [
            {
                type: "merjasec",
                startDate: "2024-01-01",
                endDate: "2024-12-31"
            },
            {
                type: "svinja",
                startDate: "2024-07-01",
                endDate: "2024-01-31"
            },
            {
                type: "ozimci in lanščaki obeh spolov",
                startDate: "2024-01-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Poljski zajec",
        seasons: [
            {
                type: "",
                startDate: "2024-10-01",
                endDate: "2024-12-15"
            }
        ]
    },
    {
        name: "Kuna belica, kuna zlatica",
        seasons: [
            {
                type: "",
                startDate: "2024-11-01",
                endDate: "2024-02-28"
            }
        ]
    },
    {
        name: "Jazbec",
        seasons: [
            {
                type: "",
                startDate: "2024-08-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Lisica",
        seasons: [
            {
                type: "",
                startDate: "2024-07-01",
                endDate: "2024-03-15"
            }
        ]
    },
    {
        name: "Rakunasti pes",
        seasons: [
            {
                type: "",
                startDate: "2024-08-01",
                endDate: "2024-03-31"
            }
        ]
    },
    {
        name: "Šakal",
        seasons: [
            {
                type: "",
                startDate: "2024-07-01",
                endDate: "2024-03-15"
            }
        ]
    },
    {
        name: "Navadni polh",
        seasons: [
            {
                type: "",
                startDate: "2024-10-01",
                endDate: "2024-11-30"
            }
        ]
    },
    {
        name: "Alpski svizec",
        seasons: [
            {
                type: "",
                startDate: "2024-09-01",
                endDate: "2024-10-30"
            }
        ]
    },
    {
        name: "Pižmovka",
        seasons: [
            {
                type: "",
                startDate: "2024-01-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Nutrija",
        seasons: [
            {
                type: "",
                startDate: "2024-01-01",
                endDate: "2024-12-31"
            }
        ]
    },
    {
        name: "Fazan",
        seasons: [
            {
                type: "",
                startDate: "2024-09-01",
                endDate: "2024-02-28"
            }
        ]
    },
    {
        name: "Poljska jerebica (gojena)",
        seasons: [
            {
                type: "",
                startDate: "2024-09-01",
                endDate: "2024-11-15"
            }
        ]
    },
    {
        name: "Raca mlakarica",
        seasons: [
            {
                type: "",
                startDate: "2024-09-01",
                endDate: "2024-01-15"
            }
        ]
    },
    {
        name: "Šoja",
        seasons: [
            {
                type: "",
                startDate: "2024-08-01",
                endDate: "2024-02-28"
            }
        ]
    },
    {
        name: "Sraka",
        seasons: [
            {
                type: "",
                startDate: "2024-08-01",
                endDate: "2024-02-28"
            }
        ]
    },
    {
        name: "Siva vrana",
        seasons: [
            {
                type: "",
                startDate: "2024-08-01",
                endDate: "2024-02-28"
            }
        ]
    }
];

export function getActiveSeasons(date: Date): Species[] {
  return huntingSeasons.map(species => ({
    ...species,
    seasons: species.seasons.filter(season => 
      isWithinInterval(date, {
        start: parseISO(season.startDate),
        end: parseISO(season.endDate)
      })
    )
  })).filter(species => species.seasons.length > 0);
}