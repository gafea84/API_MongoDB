// SELECT * FROM posts

const getAll = () => {
    return db.query('select * from posts');
}

// insert into posts (título, descripción, fecha, categoría, clave) values(?,?,?,?,?)

const create = ({título, descripción, fecha, categoría, clave}) =>{
    return db.query(
        'insert into posts (título, descripción, fecha, categoría, clave) values(?,?,?,?,?)',[título, descripción, fecha, categoría, clave]
    )
}

const update = (postId,{título, descripción, fecha, categoría, clave}) => {
    return db.query(
        'update posts set título = ?, descripción = ?, fecha = ?, categoría = ?, clave = ? where id = ?',
        [título, descripción, fecha, categoría, clave,postId]
    );
}

const deleteById = (PostId) => {
    return db.query('delete from posts where id = ?', [postId]);
}




module.exports = {
    getAll, create, update, deleteById
}