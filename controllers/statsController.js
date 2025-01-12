const Product = require('../models/Product');

exports.getStatistics = async (req, res) => {
    const { month } = req.query;
    const monthIndex = new Date(`${month} 1`).getMonth();

    try {
        const totalSaleAmount = await Product.aggregate([
            {
                $match: {
                    sold: true,
                    dateOfSale: {
                        $gte: new Date(2023, monthIndex, 1),
                        $lt: new Date(2023, monthIndex + 1, 1),
                    },
                },
            },
            { $group: { _id: null, total: { $sum: '$price' } } },
        ]);

        const soldItemsCount = await Product.countDocuments({
            sold: true,
            dateOfSale: {
                $gte: new Date(2023, monthIndex, 1),
                $lt: new Date(2023, monthIndex + 1, 1),
            },
        });

        const notSoldItemsCount = await Product.countDocuments({
            sold: false,
            dateOfSale: {
                $gte: new Date(2023, monthIndex, 1),
                $lt: new Date(2023, monthIndex + 1, 1),
            },
        });

        res.json({
            totalSaleAmount: totalSaleAmount[0]?.total || 0,
            soldItemsCount,
            notSoldItemsCount,
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching statistics', details: error.message });
    }
};
