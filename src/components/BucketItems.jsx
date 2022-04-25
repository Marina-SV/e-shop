import BucketItem from "./BucketItem"


export default function BucketItems(props) {
    const {bucketItems} = props
    console.log(bucketItems)

    return (
        <div className="items-wrapper-in-bucket">
         {bucketItems.map(item => <BucketItem {...item} />)}
        </div>
    )
}