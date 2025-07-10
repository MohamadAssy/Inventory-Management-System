// Simple linear regression predictor
export const predictStockDepletion = (item, dailyUsage) => {
    if (!dailyUsage || dailyUsage <= 0) return null;

    const daysRemaining = Math.floor(item.quantity / dailyUsage);
    return daysRemaining;
};

// AI-generated usage suggestion
export const suggestDailyUsage = (transactions) => {
    if (!transactions || transactions.length < 3) return 1;

    const changes = [];
    for (let i = 1; i < transactions.length; i++) {
        changes.push(transactions[i - 1].quantity - transactions[i].quantity);
    }

    const avgChange = changes.reduce((a, b) => a + b, 0) / changes.length;
    return Math.max(1, Math.round(avgChange));
};