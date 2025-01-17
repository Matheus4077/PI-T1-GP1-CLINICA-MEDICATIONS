const { Cage } = require("../../models/cage.js");
require("../../models/associations.js");

async function updateCage(req, res) {
    try {
        const { id } = req.params;
        const { cageNumber } = req.body;

        const cage = await Cage.findByPk(id);

        if (!cage) {
            return res.status(404).json({ error: "Gaiola não encontrada" });
        }

        cage.cageNumber = cageNumber;
        await cage.save();

        res.status(200).json(cage);
    } catch (error) {
        res.status(500).json({ error: "Falha ao atualizar a gaiola" });
    }
};

module.exports = {
    updateCage
}