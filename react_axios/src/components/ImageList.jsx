import ImageShow from "./ImageShow"

function ImageList({ images }) {
    const renderImages = images.map(image => <ImageShow key={ image.id } image = { image } />)

    return (
        <>
            {renderImages}
        </>
    )
}

export default ImageList