import React from 'react'
// import {useState} from 'react';

// import SlidingPane from "../../sliding-pane/react-sliding-pane";

export default function Card({ img, title, subtitle, info, table }) {


  // const [state, setState] = useState({
  //   pane_brosura_compresoare_cu_suruburi_elicoidale: false
  // });


  return (
    <section className='card'>

      {/* <SlidingPane
        className="some-custom-class stop-background-scroll"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.pane_brosura_compresoare_cu_suruburi_elicoidale}
        title="compresoare cu suruburi elicoidale"
        subtitle="brosura"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ pane_brosura_compresoare_cu_suruburi_elicoidale: false });
        }}
      >
        <div style={{ position: 'relative', paddingTop: 'max(60%,324px)', width: '100%', height: '0' }}><iframe style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: '0', top: '0' }} src="https://online.fliphtml5.com/bvxpp/mqmf/" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
      </SlidingPane> */}



      {/* img */}
      {/* <img src={img} alt={title} className='card-img'/> */}
      <div className='card-details'>
        {/* <h3 className='card-title'>{title}</h3> */}
        <span className='tooltip2'> <h3 className='card-title'>{title}</h3><span className='tooltiptext2'><img src={img} alt={title} className='card-img' /></span></span>
        {/* section card-reviw */}
        {/* section card-price - div - del/> */}
        <p className='subtitle-in-card-product'>{subtitle}</p>
        <div className='flex read-more-and-table'>
          <p>{info}</p>
          <p>{table}</p>
        </div>
        {/* <p onClick={() => setState({ pane_brosura_compresoare_cu_suruburi_elicoidale: true })} className='see-brochure'>broșură</p> */}

      </div>
    </section>
  )
}

// the sliding pane is working but I need to see how to render individual panes for each product card