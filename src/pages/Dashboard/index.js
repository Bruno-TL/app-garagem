import {Card, CardContent, CardAction} from "@mui/material";
import {DirectionsCar, TwoWheeler, DirectionsBike} from "@mui/icons-material";

// import {Button} from "@mui/material";
// import {Favorite} from "@mui/icons-material";
function Informacao (props) {
    return (
        <Card style={{marginTop: 5}}>
            <CardContent>
                {props.icone}

                <strong> {props.qtd}</strong>
                {props.titulo}
            </CardContent>
        </Card>
    );
}

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Informacao icone={<DirectionsCar/>} titulo=" Carros" qtd="10"/>
            <Informacao icone={<TwoWheeler/>} titulo=" Moto" qtd="2"/>
            <Informacao icone={<DirectionsBike/>} titulo=" Bike" qtd="5"/>
        </>
    );
}