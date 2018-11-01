module.exports = {

    create: (req, res) => {
        let db = req.app.get('db')
        let { name, description, price, image_url } = req.body

        db.createProduct([name, description, price, image_url]).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Oops! something went wrong'})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.readProduct([id]).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Oops! something went wrong'})
            console.log(err)
        })
    },

    getAll: (req, res) => {
        let db = req.app.get('db')

        db.readProducts().then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Oops! something went wrong'})
            console.log(err)
        })
    },

    update: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params
        

        db.updateProduct([id, req.query.desc]).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Oops! something went wrong'})
            console.log(err)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.deleteProduct([id]).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send({errorMessage: 'Oops! something went wrong'})
            console.log(err)
        })
    }

}