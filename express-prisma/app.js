const express = require('express');

const { PrismaClient } = require('@prisma/client');

const app = express();

const prisma = new PrismaClient();

app.use(express.json());

app.post('/reviews', async (req, res) => {
    try {
        const { name, username, content, description, likes } = req.body;
        const gamereview = await prisma.gamereview.create({
            data: {
                name,
                username,
                content,
                description,
                likes,
            },
        });
        res.json(gamereview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating new review' });
    }
});

app.get('/reviews', async (req, res) => {
    try {
        const gamereviews = await prisma.gamereview.findMany();
        res.json(gamereviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching all reviews' });
    }
});

app.get('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const gamereview = await prisma.gamereview.findUnique({
            where: { id: parseInt(id) },
        });
        if (!gamereview) {
            return res.status(404).json({ error: 'review not found' });
        }
        res.json(gamereview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching review' });
    }
});

app.put('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    const { name, username, content, description, likes } = req.body;
    try {
        const updatedgamereview = await prisma.gamereview.update({
            where: { id: parseInt(id) },
            data: {
                name,
                username,
                content,
                description,
                likes,
            },
        });
        res.json(updatedgamereview);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating review' });
    }
});

app.delete('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.gamereview.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting review' });
    }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});