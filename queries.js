
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'aseem',
    password:'aseem123',
    host : 'localhost',
    database :'aseem',
    port:'5432'
});

const getNotes = (request,response) => {
    pool.query('SELECT * from notes', (error,results)=> {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows)
    });
};

const postNote = (request,response) => {
    //console.log(request);
    const note = request.body.note;
    console.log(note);
    pool.query('insert into notes (note) values ($1)',[note],(error,results) => {
        if (error){
            throw error;
        };
        response.status(201).send('Note successfully added');
    });
};

const deleteNote = (request,response) => {
    const id = request.body.id;
    pool.query('delete from notes where id = $1',[id],(error,results) => {
        if (error){
            throw error;
        }
        response.status(201).send('Note successfully deleted.');
    });
};

const updateNote = (request,response) => {
    const id = request.body.id;
    const note = request.body.note;
    pool.query('update notes set note = $1 where id = $2',[note,id],(error,results) => {
        if(error){
            throw error;
        }
        response.status(201).send('Note updates successfully.');
    });
};


module.exports = {
    getNotes,
    postNote,
    deleteNote,
    updateNote
}