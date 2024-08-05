const ImageOverlay = ({ photographer, photographerHyperlink, imageHyperlink }) => {
  return (
    <div className="absolute bottom-24 left-5 p-4 bg-black bg-opacity-50">
        <p className="text-white text-sm">Development image only.</p> 
        <p className="text-white text-sm">
            Photo by <a href={photographerHyperlink} className="underline">{photographer}</a> on <a href={imageHyperlink} className="underline">Unsplash</a>
        </p>
    </div>
  );
};

export default ImageOverlay;
