// export default function MainContent({ children }) {
//     return (
//         <div id="main-content">
//             {children}
//         </div>
//     );
// }

import "./MainContent.css";

export default function MainContent() {
    return (
        <div id="main-content">
                <h2>Welcome to the RecipeBook!</h2>
                <p>This is where your main, scrollable content goes. The fixed Header and Footer sidebars will not overlap this area because the #main-content CSS rule pushes it inward.</p>
                <p>Try resizing the window now—this block will trigger a horizontal scrollbar if the viewport is too narrow.</p>
        </div>
    );
}
