import java.time.LocalDateTime;

public class FavoriteRating {

    private int userId;
    private int itemId;
    private int rating; // 1 -> 5
    private boolean favorite;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Constructor
    public FavoriteRating(int userId, int itemId, int rating, boolean favorite) {
        this.userId = userId;
        this.itemId = itemId;
        setRating(rating);
        this.favorite = favorite;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    // Getter
    public int getUserId() {
        return userId;
    }

    public int getItemId() {
        return itemId;
    }

    public int getRating() {
        return rating;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    // Update rating
    public void updateRating(int newRating) {
        if (newRating < 1 || newRating > 5) {
            System.out.println("Rating must be between 1 and 5.");
            return;
        }

        this.rating = newRating;
        this.updatedAt = LocalDateTime.now();
    }

    // Toggle favorite
    public void toggleFavorite() {
        this.favorite = !this.favorite;
        this.updatedAt = LocalDateTime.now();
    }

    // Set rating with validation
    private void setRating(int rating) {
        if (rating < 1 || rating > 5) {
            throw new IllegalArgumentException("Rating must be between 1 and 5");
        }
        this.rating = rating;
    }

    // Display info
    public void display() {
        System.out.println(this);
    }

    @Override
    public String toString() {
        return "FavoriteRating {" +
                "userId=" + userId +
                ", itemId=" + itemId +
                ", rating=" + rating +
                ", favorite=" + favorite +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}