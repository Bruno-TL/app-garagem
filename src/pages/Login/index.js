import { Button, Divider, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './style.css'

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="login">
            <h2>Login</h2>
            <Divider/>
            <form>
                <TextField label="email" fullWidth />
                <TextField label="senha" type="password" fullWidth  />
                <Button variant="contained" fullWidth onClick={() => navigate('/')}>
                    Entrar
                </Button>
            </form>
        </div>
    );
}