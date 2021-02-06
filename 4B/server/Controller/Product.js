const connection = require('../Config/Db');
const singleUpload = require("../Middleware/SingleUpload")();

// GET PRODUCT
exports.getProduct = function(req, res){

    var sql ="SELECT cycle.id, merk.name_product, cycle.name, cycle.price, cycle.stock, cycle.image FROM cycle JOIN merk ON merk.id = cycle.id_merk";
    connection.query(sql, (err, result) => {
        if(err) throw err;

        try {
            res.send({
                result
            })
        } catch (error) {
            res.send({
                message: error
            })
        }
    })
}

// CREATE PRODUCT
exports.createProduct = function(req, res){
    // Upload Image to API
    singleUpload(req, res, (err) => {
        try {
            if(err) throw err
            console.log(req.body.data);

            // Request Validation Filter
            if(req.filteringValidation) throw { message : req.filteringValidation }
            if(req.file === undefined) throw { message : 'File Not Found'}

            // Get Image Path
            var imagePath = 'http://localhost:5000/' + req.file.path
            
            // DATA di INPUT from Admin
            var data = req.body.data;

            try {
                var dataParsed = JSON.parse(data)
                console.log(dataParsed)
            } catch (error) {
                console.log(error)
            }
            
            dataParsed={...dataParsed, image: imagePath}

            // INPUT DATA PRODUCT FROM ADMIN KE TABEL CYCLE
            var inputProduct = "INSERT INTO cycle SET ?";
            connection.query(inputProduct, dataParsed, (err, result) => {
                console.log(result)

                try {
                    if(err) throw err;

                    res.send({
                    message: "Input Data Product Success!"
                    })
                }
                catch(error) {
                    res.send({
                        message: "Input Failed!"
                    })
                }
            });
        }
        catch (error) {
            res.status(404).send({
                error : true, 
                message : error.message
            })
        }
    })
}