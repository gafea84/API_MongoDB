const router = require('express').Router();
const { getAll, create, update, deleteById } = require('../../models/autor.model');

router.get('/', (req, res) => {
    getAll()
        .then((result)=> res.json(result[0]))
        .catch((err)=>res.json(err,err.message));
})  

router.post('/', async (req,res) => {
   try { 
       const [result] = await create(req,body);
       res.json(result); 
    } catch (err) {
        res.json({error: err.message});
    }
});

router.put('/:autorId', async (req,res) => {
    try { 
        const [result] = await update(req.params.autorId,req.body);
        res.json(result); 
     } catch (err) {
         res.json({error: err.message});
     }
 });

 router.delete('/:autorId', async (req,res) => {
    try { 
        const [result] = await deleteById(req.params.autorId);
        res.json(result); 
     } catch (err) {
         res.json({error: err.message});
     }
 });


module.exports = router;