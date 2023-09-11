import Busqueda from "./pokedex/Busqueda";
import "./Pokedex.css"
import PokemonInfo from "./pokedex/PokemonInfo";
import { Grid } from "@mui/material";
import { Pokemon } from "../models/Pokemon";

function Pokedex() {
    const columnSize = 6;
    const pokemon:Pokemon={
        id:35,
        name:"Clefairy",
        moves: [{
                move: {
                    name: "pound",
                }
            }
        ],
        abilities:[{
            "ability": {
                "name": "cute-charm",
            },
        }]
    }
    return (
        <div className="Pokedex">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={columnSize} className="Busqueda">
                    <Busqueda></Busqueda>
                </Grid>
                <Grid item xs={columnSize} className="Resultado">
                    <PokemonInfo pokemon={pokemon}></PokemonInfo>
                </Grid>
            </Grid>
        </div>
    );

}

export default Pokedex;