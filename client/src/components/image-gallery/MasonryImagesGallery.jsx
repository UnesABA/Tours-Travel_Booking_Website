import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import galleryImages from "./galleryImages"

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => (
          <div key={index}>
            <img
              className= "masonry__img"
              src={item}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
              alt=""
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
