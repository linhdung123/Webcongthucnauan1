public class FavoriteRating {

    private int userId;
    private int itemId;
    private int rating; // 1 - 5 stars
    private boolean favorite;

    // Constructor
    public FavoriteRating(int userId, int itemId, int rating, boolean favorite) {
        this.userId = userId;
        this.itemId = itemId;
        this.rating = rating;
        this.favorite = favorite;
    }

    // Getter and Setter
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        if (rating >= 1 && rating <= 5) {
            this.rating = rating;
        } else {
            System.out.println("Rating must be between 1 and 5");
        }
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }

    // Display information
    public void displayInfo() {
        System.out.println("User ID: " + userId);
        System.out.println("Item ID: " + itemId);
        System.out.println("Rating: " + rating + " stars");
        System.out.println("Favorite: " + (favorite ? "Yes" : "No"));
    }

    // Main test
    public static void main(String[] args) {
        FavoriteRating fr = new FavoriteRating(1, 101, 5, true);
        fr.displayInfo();

        System.out.println("Update rating...");
        fr.setRating(4);
        fr.displayInfo();
    }
}