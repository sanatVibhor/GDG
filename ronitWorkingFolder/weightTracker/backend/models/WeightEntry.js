const {Schema, model} = require(`mongoose`);

const weightEntrySchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'user', required: false},
        weightKg: { type: Number, required: true},
        note: { type: String },
        loggedAt: { type: Date, default: Date.now }
    },

    { timestamps: true}
);

module.exports = model('WeightEntry', weightEntrySchema);