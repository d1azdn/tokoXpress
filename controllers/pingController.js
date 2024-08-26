const testPing = (req,res) =>{
    try {
        res.status(200).send({
            status : 'success',
            data : 'halo'
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { testPing }