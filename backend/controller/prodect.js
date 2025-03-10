router.get('/cartProduct', async (req, res) => {
    const { email } = req.query;
    try {
        if (!email) 
            return res.status(403).send('login to add to cart');

        const user = await User.findOne({ email }).populate({ 
            path: 'cart.productId', 
            model: 'Product' 
        });

        if (!user) 
            return res.status(400).send('register to add to cart');

        res.status(200).json({
            message: 'Cart retrieved successfully',
            cart: user.cart
        });

    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});