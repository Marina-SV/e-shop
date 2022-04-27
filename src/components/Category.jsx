
export default function Category (props) {
    const {category, onClickButton} = props;
    return (
             <button className="categories-button" onClick={() => onClickButton(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
    )
}