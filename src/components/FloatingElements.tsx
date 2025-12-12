import './FloatingElements.css'

const FloatingElements = () => {
  return (
    <div className="floating-elements">
      {/* Top left cluster */}
      <div className="float-square sq-1"></div>
      <div className="float-square sq-2"></div>
      <div className="float-square sq-3"></div>
      
      {/* Top right cluster */}
      <div className="float-square sq-4"></div>
      <div className="float-square sq-5"></div>
      <div className="float-square sq-6"></div>
      
      {/* Middle left */}
      <div className="float-square sq-7"></div>
      <div className="float-square sq-8"></div>
      
      {/* Middle right */}
      <div className="float-square sq-9"></div>
      <div className="float-square sq-10"></div>
      
      {/* Bottom clusters */}
      <div className="float-square sq-11"></div>
      <div className="float-square sq-12"></div>
      <div className="float-square sq-13"></div>
      <div className="float-square sq-14"></div>
    </div>
  )
}

export default FloatingElements

