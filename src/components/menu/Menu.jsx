import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menuOptions " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}> {/* Need to refactor this into a component */}
                    <a href="#intro">home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">portfolio</a>
                </li>
            </ul>
        </div>
    )
}