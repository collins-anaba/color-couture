module.exports = {

    getAll: async (req, res)=> {
        const dbInstance = req.app.get('db');

        let products = await dbInstance.readProducts()
            .catch(error => {
                res.status(500).send({ errorMessage: 'error'});
                console.log(error)
            });
            res.status(200).send(products)
    },
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        dbInstance.createProduct([
            req.body.name,
            req.body.style,
            req.body.price,
            req.body.size,
            req.body.description,
            req.body.image
        ])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({ errorMessage: 'error 2'});
            console.log(error)
        })
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.updateProduct([
            req.body.name,
            req.body.style,
            req.body.price,
            req.body.size,
            req.body.description,
        ])
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send({errorMessage: 'Error 3'});
                console.log(error)
            })
    },
    delete: ( req, res) => {
        const dbInstance = req.app.get('db');
        console.log(req.params)
    }
}