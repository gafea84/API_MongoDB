const router = require('express').Router();
const { getAll, create, update, deleteById } = require('../../models/post.model');

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

router.put('/:postId', async (req,res) => {
    try { 
        const [result] = await update(req.params.postId,req.body);
        res.json(result); 
     } catch (err) {
         res.json({error: err.message});
     }
 });

 router.delete('/:postId', async (req,res) => {
    try { 
        const [result] = await deleteById(req.params.postId);
        res.json(result); 
     } catch (err) {
         res.json({error: err.message});
     }
 });


module.exports = router;