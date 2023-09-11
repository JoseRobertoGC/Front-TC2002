import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import "./Busqueda.css"
import { useState } from 'react';

function Busqueda(){
    const [busqueda,setBusqueda]=useState("");

    function addToBusqueda(value:string){
        setBusqueda(busqueda+value);
    }

    function clearBusqueda(){
        setBusqueda("");
    }
    const columnSize=4;
    return(
        <div>
            <div style={{paddingTop:"20px"}}>
                <div className="Display">
                    <h2>{busqueda}</h2>
                </div>
            </div>
            <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("1")}>1</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("2")}>2</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("3")}>3</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("4")}>4</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("5")}>5</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("6")}>6</Button>
                </Grid>
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("7")}>7</Button>
                </Grid> 
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("8")}>8</Button>
                </Grid> 
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("9")}>9</Button>
                </Grid> 
                <Grid item xs={columnSize}>
                    <Button className="Button" onClick={()=>addToBusqueda("0")}>0</Button>
                </Grid>                                               
            </Grid>

            </div>
            <div>
                <Button variant="outlined" className="Button">Buscar</Button>
                <Button variant="outlined" className="Button" onClick={clearBusqueda}>Borrar</Button>
            </div>
        </div>

    )
}

export default Busqueda;