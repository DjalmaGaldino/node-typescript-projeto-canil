import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from  'path';
import mainRoutes from './routes/index';


// vairiaveis de ambiente PORT=4000
dotenv.config();

const server = express();

// aqui estou configurando meu templete engine - mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// configrurando a pasta public(onde está arquivos css,html, etc)
server.use(express.static(path.join(__dirname, '../public')));


// configurando as minhas Rotas:
server.use(mainRoutes);

// configurando uma pagina de error
server.use((req, res) => {
    res.render('pages/404')
})

// ja tenho um arquivo na porta 4000, por isso devo deixar na 80 agora, senao não roda
server.listen(process.env.PORT);