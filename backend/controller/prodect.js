router.post('/addTocart', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        
        if (!userId || !productId || !quantity) {
            return res.status(400).send("All fields are required");
        }

       
        const user = await User.findOne({ email: userId });
        if (!user) return res.status(404).send("User not found");

      
        const product = await Product.findById(productId);
        if (!product) return res.status(404).send("Product not found");

        const cartIndex = user.cart.findIndex(item => item.productId.toString() === productId);

        if (cartIndex !== -1) {
            
            user.cart[cartIndex].quantity = quantity || 1;
        } else {
            
            user.cart.push({ productId, quantity: quantity || 1 });
        }

        
        await user.save();
        
        return res.status(200).json({ message: "Updated successfully", cart: user.cart });

    } catch (e) {
        console.error("Error:", e);
        return res.status(500).send(e.message);
    }
});