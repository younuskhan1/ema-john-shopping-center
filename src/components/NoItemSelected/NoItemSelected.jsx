import noItemImage from "../../images/item-not-found.png"; 

const NoItemSelected = () => {
    return (
        <div>
            <div>
                <img src={noItemImage} alt="" />
            </div>
            <h1>No Item Selected....</h1>
        </div>
    );
};

export default NoItemSelected;