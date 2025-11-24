import "./MainContent.css";

const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        description: "Fluffy and light, perfect for a lazy Sunday morning. Ready in under 15 minutes!",
        image: "images/pancakes.jpeg",
        prepTime: "10 min",
        servings: 4,
    },
    {
        id: 2,
        title: "Spicy Black Bean Soup",
        description: "A hearty, nutritious, and easy-to-make soup with a subtle kick of chipotle. Great for meal prep.",
        image: "images/black_bean.jpeg",
        prepTime: "45 min",
        servings: 6,
    },
    {
        id: 3,
        title: "Lemon Garlic Shrimp Scampi",
        description: "Elegant and flavorful—shrimp sautéed in a bright lemon-garlic butter sauce, served over linguine.",
        image: "images/shrimp.jpeg",
        prepTime: "25 min",
        servings: 2,
    },
];

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="card-image" />
            <div className="card-body">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <div className="card-meta">
                    <span>⏱️ **Prep:** {recipe.prepTime}</span>
                    <span>🥣 **Serves:** {recipe.servings}</span>
                </div>
                <button className="view-recipe-btn">View Recipe</button>
            </div>
        </div>
    );
}

export default function MainContent() {
    return (
        <div id="main-content">
            <div className="main-header">
                <h2>📚 Welcome to the RecipeBook!</h2>
                <p>Discover delicious recipes crafted with love. Browse our latest additions below.</p>
            </div>
            
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
            
            <div className="main-footer-text">
                <p>Can't find what you're looking for? Check out our full **A-Z Index**!</p>
            </div>
        </div>
    );
}
