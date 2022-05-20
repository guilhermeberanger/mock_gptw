//External Imports
const express = require('express');
const router = express.Router()

//Internal Imports
const db = require('../database/database')

//Routes
router.get('/', async (req, res) => {
    res.send('hellow Mordor ╰(*°▽°*)╯')
})

router.get('/obras', async (req, res) => {
    try {
        const obrasRef = db.collection('tolkien')
        const obrasData = await obrasRef.get()

        const filmes = []
        obrasData.forEach((doc) => {
            filmes.push(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )
        })
        res.status(200).send(filmes)

    } catch (error) {
        res.status(500).send(error);
    }
})

router.post('/obras', async (req, res) => {
    try {
        const newObra = await db.collection('tolkien').add(req.body);
        res.status(200).send(newObra.id)

    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete('/obras/:filmesiD', async (req, res) => {
    const { filmesiD } = req.params;
    db.collection('tolkien').doc(filmesiD).delete()
        .then(() => (
            res.status(204).send("Document successfully deleted!")
        ))
        .catch((error) => {
            res.status(500).send(error);
        });
})

router.put('/obras/:filmesiD', async (req, res) => {
    const { filmesiD } = req.params
    await db.collection('tolkien').doc(filmesiD).set(req.body, { merge: true })
        .then(() => (
            res.json({ id: filmesiD })
        ))
        .catch((error) => (
            res.status(500).send(error)
        ))
})

module.exports = router