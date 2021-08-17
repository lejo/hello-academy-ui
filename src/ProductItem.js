function ProductItem(props) {
    console.log(props);
    return(
        <tr>
            <td>{props.item.title}</td>
            <td>{props.item.description}</td>
            <td>${props.item.price}</td>
        </tr>
    );
}

export default ProductItem;