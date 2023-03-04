import express from 'express'
import {toNewProductEntry, toUpdateProductEntry} from '../utils'
import {getProducts, getProductById, addProduct, updateProduct, deleteProductById} from '../services/motorcicleServices'

const router = express.Router()


router.get('/',async (_req, res) => {
    const data = await getProducts()
    console.log(data)
    res.send(data)
})

router.get('/getbyid',async (req, res) => {
    try{
        const getproduct = req.body
        const getproductId = getproduct.id
        console.log("DELETED ID")
        console.log(getproductId)
        const getProduct = await getProductById(getproductId)
        res.json(getProduct)
    }catch (e){
        res.status(400).send('error getting Motorcile')
    
    }
})

router.delete('/', async(req, res) => {
    try{
        const deleteproduct = req.body
        const deleteproductId = deleteproduct.id
        console.log("DELETED ID")
        console.log(deleteproductId)
        const deletedProduct = await deleteProductById(deleteproductId)
        res.json(deletedProduct)
    }catch (e){
        res.status(400).send('error deleting the Motorcile')
    
    }
})
router.put('/', async(req, res) => {
    try{
        const newproductEntry = toNewProductEntry(req.body)
        const addedProductEntry = await addProduct(newproductEntry)
        res.json(addedProductEntry)
    }catch (e){
        res.status(400).send('error adding new Motorcile')
    
    }

    
})

router.post('/', async(req, res) => {
    try{
        const updateProductEntry = toUpdateProductEntry(req.body)
        const updatedProductEntry = await updateProduct(updateProductEntry)
        res.json(updatedProductEntry)
    }catch (e){
        res.status(400).send('error adding new Motorcile')
    
    }

    
})


export default router