const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

router.get("/", async (req, res) => {
    try{
        const result = await prisma.user.findMany({
            orderBy: {
              id: "asc"
            },
            
          })
        
          res.status(200).json(result);
    }
    catch(err){
       res.status(500).json({message: err.message});
    }
  
  });
  
router.get('/:id',async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(user);
})
router.post('/create', async (req, res) => {
     const {first_name, last_name, email, password} = req.body
        const user = {
            first_name:first_name,
            last_name:last_name,
            email:email,
            password:password
        }
        const result = await prisma.user.create({
            data:user
        })
        res.status(200).json(result)
})

router.put('/edit/:id',async (req, res)=>{

})

module.exports = router;
