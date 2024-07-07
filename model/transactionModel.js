import transactionSchema from "../schema/transactionSchema.js";

// Get all transactions
export const getTransactions = (userId) => {
  return transactionSchema.find({ userId });
};
// Create a transaction
export const createTransaction = (transObj) => {
  return transactionSchema(transObj).save();
};

// Delete selected transactions
export const deleteSelectedTransactions = (selectedIds = []) => {
  return transactionSchema.deleteMany({ _id: { $in: selectedIds } });
};
