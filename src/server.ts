import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache'); // template engine
server.set('views', path.join(__dirname, 'views')); // configuar a pasta de visualização do projeto
server.engine('mustache', mustache()); // setar a engine que importei de cima

server.use(express.static(path.join(__dirname, '../public'))); // configura a pasta publica

// rotas
server.use(mainRoutes);

server.use((req, res)=> {
    res.render('pages/404');
});

server.listen(process.env.PORT); // inicia o servidor