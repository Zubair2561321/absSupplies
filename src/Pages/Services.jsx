import React from "react";
const services = [
  "Reinforced Concrete Structures",
  "Concrete Contractors",
  "Concrete Framed Buildings",
  "Concrete Basements",
  "Concrete Balconies",
  "Architectural Concrete",
  "Concrete Staircases",
  "Concrete Swimming Pools",
  "Multi-Storey Car Parks",
  "Formwork, Steelfixing, and Shuttering Carpentry",
  "Sea Defence Walls",
  "Water & Sewerage Treatment Works",
  "Bespoke Concrete Structures",
  "Retaining Walls",
];

const Services = () => {
  return (
    <>
      <div className="container-services ser-banner">
        <h1 className="title">Atlantis Building</h1>
        <h1 className="title title-large">eFuse</h1>
        <div id="img-1" className="img-container">
          <img
            className="img"
            src="https://media.istockphoto.com/id/1406077905/photo/new-house-building-at-the-construction-site.jpg?s=612x612&w=0&k=20&c=DUpuARwIdKNEmt--VUNnFrb0s0AjiSWvyX85PhsdlcE="
          />
        </div>
        <div className="img-container second-animation">
          <img
            className="img"
            src="https://wp.buildingmaterials.co.uk/wp-content/uploads/2023/10/The-Benefits-of-Using-OSB-Board-in-Your-Construction-Projects.png"
          />
        </div>
        <div className="img-container third-animation">
          <img
            className="img"
            src="https://www.rubi.com/en/blog/wp-content/uploads/2023/02/header-v-small.jpg"
          />
        </div>
        <div className="img-container fourth-animation">
          <img
            className="img nba"
            src="https://wp.buildingmaterials.co.uk/wp-content/uploads/2022/12/shutterstock_253268197-960x641.jpg"
          />
        </div>
        <div className="img-container fifth-animation">
          <img
            className="img"
            src="https://www.metsec.com/wp-content/uploads/2023/10/SFS-what-is-sfs-steel-framing.jpg"
          />
        </div>
        <div id="img-6" className="img-container sixth-animation">
          <img
            className="img"
            src="https://www.rgbltd.co.uk/media/catalog/product/cache/4c23c7929c1658e1a0c40426d8fd793a/m/d/mdfl1012.jpg"
          />
        </div>
        <div id="img-7" className="img-container seventh-animation">
          <img
            className="img"
            src="https://www.tradeinsulations.co.uk/wp-content/uploads/2022/03/siniat-fire-boards.jpeg"
          />
        </div>
      </div>
      {/* Section list */}
      <>
        <div className="ag-maecenas-block">
          <div className="ag-maecenas_title">
            <div className="ag-format-container">Think Atlantis</div>
          </div>
          <div className="ag-format-container">
            <section className="ag-maecenas_box">
              <article className="ag-maecenas_item">
                <div className="ag-maecenas_descr">
                  <div className="ag-maecenas_title-item">Timbers</div>
                  <div className="ag-maecenas_tagline-item">
                    CLS, SFS , Treated
                  </div>
                  <ul className="ag-requirement_list">
                    <li className="ag-requirement_item">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit;
                    </li>
                    <li className="ag-requirement_item">
                      Aenean commodo ligula eget dolor;
                    </li>
                    <li className="ag-requirement_item">
                      Aenean massa. Cum sociis natoque penatibus et magnis;
                    </li>
                    <li className="ag-requirement_item">
                      Adis parturient montes, nascetur ridiculus mus;
                    </li>
                    <li className="ag-requirement_item">
                      Donec quam felis, ultricies nec, pellentesque eu;
                    </li>
                    <li className="ag-requirement_item">
                      Nulla consequat massa quis enim;
                    </li>
                    <li className="ag-requirement_item">
                      Donec pede justo, fringilla vel, aliquet nec;
                    </li>
                    <li className="ag-requirement_item">
                      Wulputate eget, arcu. In enim justo, rhoncus ut,
                      imperdiet;
                    </li>
                    <li className="ag-requirement_item">
                      Uvenenatis vitae, justo. Nullam dictum felis eu pede
                      mollis pretium.
                    </li>
                  </ul>
                </div>
                <div className="ag-maecenas_img-box">
                  {/* <svg className="svg-maecenas_img">
                    <use xlinkHref="#svg-img-1" />
                  </svg> */}
                  <img
                    height="400px"
                    width="400px"
                    src="https://www.allweatherwood.com/sites/default/files/styles/full_width/public/2019-06/AWW-Products-Timbers-Douglas-fir-662x720.jpg?itok=4z-LsQ8_"
                  />
                </div>
              </article>
              <article className="ag-maecenas_item">
                <div className="ag-maecenas_descr">
                  <div className="ag-maecenas_title-item">Plaster Boards</div>
                  <div className="ag-maecenas_tagline-item">
                    Fire, Moisture, Sound
                  </div>
                  <ul className="ag-requirement_list">
                    <li className="ag-requirement_item">
                      Integer tincidunt. Cras dapibus. Vivamus elementum semper
                      nisi;
                    </li>
                    <li className="ag-requirement_item">
                      Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                      ac, enim;
                    </li>
                    <li className="ag-requirement_item">
                      Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                      tellus;
                    </li>
                    <li className="ag-requirement_item">
                      Phasellus viverra nulla ut metus varius laoreet. Quisque
                      rutrum;
                    </li>
                    <li className="ag-requirement_item">
                      Aenean imperdiet. Etiam ultricies nisi vel augue.
                      Curabitur ullamcorper ultricies nisi;
                    </li>
                    <li className="ag-requirement_item">
                      Nam eget dui. Etiam rhoncus;
                    </li>
                    <li className="ag-requirement_item">
                      Maecenas tempus, tellus eget condimentum rhoncus;
                    </li>
                    <li className="ag-requirement_item">
                      Aenean vulputate eleifend tellus.
                    </li>
                  </ul>
                </div>
                <div className="ag-maecenas_img-box">
                  <svg className="svg-maecenas_img">
                    <use xlinkHref="#svg-img-2" />
                  </svg>
                </div>
              </article>
              <article className="ag-maecenas_item">
                <div className="ag-maecenas_descr">
                  <div className="ag-maecenas_title-item">
                    Oriental Stranded Board
                  </div>
                  <div className="ag-maecenas_tagline-item">OSB 18m & 11m</div>
                  <ul className="ag-requirement_list">
                    <li className="ag-requirement_item">
                      Deep knowledge of Node.js features and modern Node.js
                      frameworks
                    </li>
                    <li className="ag-requirement_item">
                      Strong understanding &amp; usage of algorithms and data
                      structures in your designs
                    </li>
                    <li className="ag-requirement_item">
                      Knowledge in Unit Testing
                    </li>
                    <li className="ag-requirement_item">
                      Knowledge of Cloud Based Solutions/Technologies (AWS,
                      Google, Azure)
                    </li>
                    <li className="ag-requirement_item">
                      Experience in Implementation of modern application and
                      infrastructure design patterns, including micro-services
                      and containers, disposable, reactive, stateless and
                      distributed patterns
                    </li>
                    <li className="ag-requirement_item">
                      Extensive experience with designing, building and
                      maintaining high-performance databases (both SQL and
                      NoSQL)
                    </li>
                    <li className="ag-requirement_item">
                      Knowledge of Version Control Systems
                    </li>
                    <li className="ag-requirement_item">Spoken English</li>
                  </ul>
                </div>
                <div className="ag-maecenas_img-box">
                  <svg className="svg-maecenas_img">
                    <use xlinkHref="#svg-img-3" />
                  </svg>
                </div>
              </article>
            </section>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-img-block">
          <symbol id="svg-img-1" viewBox="175.7 78 490.6 436.9">
            <g fill="#61dafb">
              <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
              <circle cx="420.9" cy="296.5" r="45.7" />
            </g>
          </symbol>
          <symbol id="svg-img-2" viewBox="0 0 261.76 226.69">
            <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
              <g transform="translate(178.06 235.01)">
                <path
                  d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                  fill="#41b883"
                />
              </g>
              <g transform="translate(178.06 235.01)">
                <path
                  d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                  fill="#34495e"
                />
              </g>
            </g>
          </symbol>
          <symbol id="svg-img-3" viewBox="0 0 512 314">
            <defs>
              <linearGradient
                x1="68.188%"
                y1="17.487%"
                x2="27.823%"
                y2="89.755%"
                id="b"
              >
                <stop stopColor="#41873F" offset="0%" />
                <stop stopColor="#418B3D" offset="32.88%" />
                <stop stopColor="#419637" offset="63.52%" />
                <stop stopColor="#3FA92D" offset="93.19%" />
                <stop stopColor="#3FAE2A" offset="100%" />
              </linearGradient>
              <path
                id="a"
                d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85z"
              />
              <linearGradient
                x1="43.277%"
                y1="55.169%"
                x2="159.245%"
                y2="-18.306%"
                id="d"
              >
                <stop stopColor="#41873F" offset="13.76%" />
                <stop stopColor="#54A044" offset="40.32%" />
                <stop stopColor="#66B848" offset="71.36%" />
                <stop stopColor="#6CC04A" offset="90.81%" />
              </linearGradient>
              <linearGradient
                x1="-4413.77%"
                y1="13.43%"
                x2="5327.93%"
                y2="13.43%"
                id="e"
              >
                <stop stopColor="#6CC04A" offset="9.192%" />
                <stop stopColor="#66B848" offset="28.64%" />
                <stop stopColor="#54A044" offset="59.68%" />
                <stop stopColor="#41873F" offset="86.24%" />
              </linearGradient>
              <linearGradient
                x1="-4.389%"
                y1="49.997%"
                x2="101.499%"
                y2="49.997%"
                id="f"
              >
                <stop stopColor="#6CC04A" offset="9.192%" />
                <stop stopColor="#66B848" offset="28.64%" />
                <stop stopColor="#54A044" offset="59.68%" />
                <stop stopColor="#41873F" offset="86.24%" />
              </linearGradient>
              <linearGradient
                x1="-9713.77%"
                y1="36.21%"
                x2="27.93%"
                y2="36.21%"
                id="g"
              >
                <stop stopColor="#6CC04A" offset="9.192%" />
                <stop stopColor="#66B848" offset="28.64%" />
                <stop stopColor="#54A044" offset="59.68%" />
                <stop stopColor="#41873F" offset="86.24%" />
              </linearGradient>
              <linearGradient
                x1="-103.861%"
                y1="50.275%"
                x2="100.797%"
                y2="50.275%"
                id="h"
              >
                <stop stopColor="#6CC04A" offset="9.192%" />
                <stop stopColor="#66B848" offset="28.64%" />
                <stop stopColor="#54A044" offset="59.68%" />
                <stop stopColor="#41873F" offset="86.24%" />
              </linearGradient>
              <linearGradient
                x1="130.613%"
                y1="-211.069%"
                x2="4.393%"
                y2="201.605%"
                id="i"
              >
                <stop stopColor="#41873F" offset="0%" />
                <stop stopColor="#418B3D" offset="32.88%" />
                <stop stopColor="#419637" offset="63.52%" />
                <stop stopColor="#3FA92D" offset="93.19%" />
                <stop stopColor="#3FAE2A" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="none">
              <path
                d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965 3.12-1.04 3.698-1.272 6.934-3.12.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105 0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156.925 6.125 3.583 9.13 15.834 9.13 9.708 0 13.87-2.196 13.87-7.397 0-3.005-1.157-5.2-16.297-6.703-12.598-1.272-20.457-4.045-20.457-14.1 0-9.362 7.86-14.91 21.035-14.91 14.793 0 22.075 5.086 23 16.18 0 .348-.116.694-.347 1.041-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04-1.387-6.356-4.97-8.437-14.447-8.437-10.633 0-11.905 3.699-11.905 6.472 0 3.352 1.503 4.392 15.834 6.241 14.216 1.85 20.92 4.508 20.92 14.447-.116 10.171-8.437 15.95-23.116 15.95z"
                fill="#539E43"
              />
              <path
                d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81 1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643c.925.578 2.08.578 3.005 0 .925-.463 1.503-1.503 1.503-2.543l-.116-75.817zM345.571.347c-.924-.463-2.08-.463-2.89 0-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417zM508.648 124.244c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.894 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.086v56.516c0 2.08 1.155 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.045 1.04 5.779 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543 0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.924-.577-1.502-1.502-1.502-2.542v-17.683c0-1.04.578-2.08 1.502-2.543l15.372-8.784a2.821 2.821 0 0 1 3.005 0l15.371 8.784c.925.578 1.503 1.502 1.503 2.543v13.869c0 1.04.578 2.08 1.502 2.542.925.578 2.08.578 3.005 0l29.125-16.99z"
                fill="#333"
              />
              <path
                d="M456.293 121.586a1.05 1.05 0 0 1 1.155 0l9.362 5.432c.347.23.578.577.578 1.04v10.864c0 .462-.231.809-.578 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.155 0l-9.362-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.231-.81.578-1.04l9.362-5.432z"
                fill="#539E43"
              />
              <g transform="translate(134.068 70.501)">
                <mask id="c" fill="#fff">
                  <use xlinkHref="#a" />
                </mask>
                <use fill="url(#b)" xlinkHref="#a" />
                <g mask="url(#c)">
                  <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693zM56.632 125.053c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079z" />
                  <path
                    d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156z"
                    fill="url(#d)"
                  />
                </g>
                <g mask="url(#c)">
                  <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271zM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116z" />
                  <path
                    fill="url(#e)"
                    fillRule="evenodd"
                    d="M50.391.809l-.693.347h.924l-.231-.347z"
                    transform="translate(0 -9.246)"
                  />
                  <path
                    d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2z"
                    fill="url(#f)"
                    fillRule="evenodd"
                    transform="translate(0 -9.246)"
                  />
                  <path
                    fill="url(#g)"
                    fillRule="evenodd"
                    d="M111.3 104.712l-.347-.578v.809l.346-.231z"
                    transform="translate(0 -9.246)"
                  />
                  <path
                    d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                    fill="url(#h)"
                    fillRule="evenodd"
                    transform="translate(0 -9.246)"
                  />
                  <path
                    d="M106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734 54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814z"
                    fill="url(#i)"
                    fillRule="evenodd"
                    transform="translate(0 -9.246)"
                  />
                </g>
              </g>
            </g>
          </symbol>
        </svg>
      </>
      6{/* Section list end*/}
      <div className="container service-image">
        <h2 className="text-center mt-4 mb-4">Our Recent Projects</h2>
        <img
          src="https://martchandrowden.co.uk/wp-content/uploads/2021/06/MARTH-MAP-1.jpeg"
          alt=""
        />
      </div>
    </>
  );
};

export default Services;
