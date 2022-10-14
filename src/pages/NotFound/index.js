import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import img from './undraw_access_denied_re_awnf.svg'

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>página não encontrada</h2>
            <img width="100%" src={img}/>

            <Button variant="outlined" onClick={() => navigate('/')}>Voltar pro início</Button>
            
        </div>
    );
}