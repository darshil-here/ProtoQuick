import mergeImages from "merge-images";
import img1 from "./public/frame.png"
import img2 from "./public/ss.png"

mergeImages([img1, img2]).then(
  (b64) => (document.getElementById("img").src = b64)
);