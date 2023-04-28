import React from "react"
import ContentLoader from "react-content-loader"

const Loader = () => (

<ContentLoader 
  speed={3}
  width={340}
  height={150}
  viewBox="0 0 340 150"
  backgroundColor="#f3f3f3"
  foregroundColor="#e2e2e2"
>
  <rect x="0" y="0" rx="2" ry="2" width="400" height="400" />
</ContentLoader>

)

export default Loader

