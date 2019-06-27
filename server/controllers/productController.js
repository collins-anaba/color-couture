module.exports = {

    getAll:  (req, res)=> {
        const dbInstance = req.app.get('db');
        dbInstance.getProducts()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error);
            res.status(500).send(error)
       });
            
    },
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        const {name, style, price, size, description, image} = req.body
        dbInstance.createProduct(name, style,price,size,description,image)
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
        dbInstance.deleteProduct(req.params.name)
        .then((response)=> res.status(200).json(response))
        .catch(error => {
            res.status(500).send({errorMessage: 'Error 4'})
            console.log(error)
        })
    },
    addCart: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.addToCart(req.params.id)
        .then((response) => {
            console.log(response)
            req.session.user.cart.push({
            image: response[0].name,
            style: response[0].style,
            price: response[0].price,
            size: response[0].size,
            description: response[0].description,
            image: response[0].image
            })
            req.session.user.total += response[0].price
            res.status(200).json(req.session.user)
        })
        .catch(error => {
            res.status(500).send({ errorMessage: "error 5"});
            console.log(error)
        })
    },
    getCart: (req,res) => {
        res.status(200).json(req.session.user)
    }
}