const ShoeCard = ({
    imgUrl,
    changeBigShoe, bigShoe
}) => {
    const handleClick = () => {
        if(bigShoe !== imgUrl.bigShoe){
            changeBigShoe(imgUrl.bigShoe)
        }
    }
    return <>
        <div className={`${bigShoe === imgUrl.bigShoe ? 'border-coral-blue' : 'border-transparent'} `} onClick={handleClick}>
            <div>
                <img src={imgUrl.thumbnail} alt="shoe" width={127} height={103}/>
            </div>
        </div>
    </>;
  };
  
  export default ShoeCard;
  