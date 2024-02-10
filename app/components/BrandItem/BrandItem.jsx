import style from './BrandItem.module.css';


const BrandItem = (props) => {
    const {id, imgSrc, brandName, coreAttribute, oneItem, twoItem, threeItem} =  props.brandData
    console.log(brandName);
    return (
        <div className={style.brand_item}>
            <img className={style.brand_icon} src={imgSrc} alt="" />
            <span>{brandName}</span>
            <span className={style[coreAttribute.type]}>{coreAttribute.value}</span>
            <span className={style[oneItem.type]}>{oneItem.value}</span>
            <span className={style[twoItem.type]}>{twoItem.value}</span>
            <span className={style[threeItem.type]}>{threeItem.value}</span>
        </div>
    )
}

export default BrandItem;