import './App.css';

function ProductItem(props) {
    console.log(props);
    return(
        <tr className='rows'>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>${props.item.price}</td>
        </tr>
    );
}

export default ProductItem;