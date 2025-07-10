import { predictStockDepletion, suggestDailyUsage } from '../utils/predictStock';

function ItemCard({ item }) {
    // Calculate prediction
    const predictedDays = predictStockDepletion(
        item,
        suggestDailyUsage(item.usageHistory)
    );

    return (
        <div className="card">
            {/* ...existing content */}
            {predictedDays && (
                <div className={`alert ${predictedDays <= 3 ? 'alert-danger' : 'alert-warning'}`}>
                    AI Prediction: Low stock in {predictedDays} days
                </div>
            )}
        </div>
    );
}
export default ItemCard;