// SELECT * FROM autores

const getAll = () => {
    return db.query('select * from autores');
}

// insert into autores (nombre,email,imagen) values(?,?,?)

const create = ({nombre,email,imagen}) =>{
    return db.query(
        'insert into autores (nombre,email,imagen) values(?,?,?)',[nombre,email,imagen]
    )
}

const update = (autorId,{nombre,email,imagen}) => {
    return db.query(
        'update autores set nombre = ?, email = ?, imagen = ? where id = ?',
        [nombre,email,imagen,autorId]
    );
}

const deleteById = (autorId) => {
    return db.query('delete from autores where id = ?', [autorId]);
}




module.exports = {
    getAll, create, update, deleteById
}