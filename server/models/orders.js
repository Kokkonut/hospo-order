const orderSchema = new Schema({
    items: [{
      menuItem: {
        type: Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      notes: {
        type: String,
        trim: true
      }
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    status: {
      type: String,
      enum: ['New', 'In Progress', 'Ready', 'Completed', 'Canceled'],
      default: 'New'
    },
  }, {
    timestamps: true
  });
  