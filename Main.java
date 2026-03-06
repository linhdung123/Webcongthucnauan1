public class Main {

    public static void main(String[] args) {

        FavoriteRating rating = new FavoriteRating(1, 1001, 5, true);

        System.out.println("Initial data:");
        rating.display();

        System.out.println("\nUpdate rating to 4:");
        rating.updateRating(4);
        rating.display();

        System.out.println("\nToggle favorite:");
        rating.toggleFavorite();
        rating.display();
    }
}