
function ImageShow({ image }) {
    return (
        <>
            <img width={150} height={150} src={image.urls.small} alt={image.alt_description} />
        </>
    )
}

export default ImageShow