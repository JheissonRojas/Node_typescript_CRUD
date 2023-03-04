# Node_typescript_CRUD
#
# deployment instruction 
#    - Database used : MongoDB -> Typegoose
#    - Database Name : motorcicle
#    - Connection string: connect("mongodb://0.0.0.0:27017/motorcicle")
#    - clone and install package dependencies
#    - execute npm run dev 
#
#
#
# Enpoints Implemented
#
# // to get all data
# router.get('/',async (_req, res) => {})
# // to find by id
# router.get('/getbyid',async (req, res) => {})
# // to delete
# router.delete('/', async(req, res) => {})
# to create 
# router.put('/', async(req, res) => {})
# // to update
# router.post('/', async(req, res) => {})
#
# data Base used MongoDB with Typegoose  -->
#
# data Type in models
#
#  @prop({required: true, trim: true, minlength: 3}) // mongoose properties
#  country?: string //typescript data types
#
#  @prop({min: 1000, max: 8000, required: true}) 
#  engine?: number
#
#  @prop({min: 1990, max: 2023, required: true}) 
#  year?: number
#
#  @prop({required: true, trim: true, minlength: 3}) 
#  brand?: string 
  
