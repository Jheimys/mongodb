const express = require('express')
const app = express()

const path = require('path')

//template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname, 'public')))

//Habilitar sever para receber dados via post
app.use(express.urlencoded({extended:true}))

//rotas
app.get('/', (req, res)=>{
    res.render('index',{
        title:'Titulo teste'
    })
})


//404 error 
app.use((req, res)=>{ //middleware
    res.send('Pagina não encontrada')
})


//execução do servidor
const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`Serve is listing on ${port}`))