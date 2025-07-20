const WeightEntry = require('../models/WeightEntry');

exports.getEntries = async (req, res) => {
  try {
    const filter = req.query.userId ? { userId: req.query.userId } : {};
    const entries = await WeightEntry.find(filter).sort({ loggedAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.addEntry = async (req, res) => {
  try {
    const { weightKg, note, userId } = req.body;
    if (!weightKg) return res.status(400).json({ message: 'weightKg required' });

    const newEntry = await WeightEntry.create({ weightKg, note, userId });
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteEntry = async (req, res) => {
  try {
    const removed = await WeightEntry.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Entry not found' });
    res.json({ message: 'Entry deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
