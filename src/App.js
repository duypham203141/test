import "./App.css";
import Logo from "./img/logoNCC1.png";
import Cart1 from "./img/css-icon 1.png";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <ul className="list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Services</li>
          <li className="navbar-item">News</li>
          <li className="navbar-item">Blog</li>
          <li className="navbar-item">Contact</li>
        </ul>
      </div>
      <div className="main">
        <div className="navbar-mobile">
          <ul className="list-mobile">
            <li className="navbar-item-mobile">Home</li>
            <li className="navbar-item-mobile">Services</li>
            <li className="navbar-item-mobile">News</li>
            <li className="navbar-item-mobile">Blog</li>
            <li className="navbar-item-mobile">Contact</li>
          </ul>
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" width="300" height="122" />
        </div>
        <div className="info">
          <div className="title">Lorem ipsum dolor sit asmet?</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </div>
        </div>
        <div className="list-card">
          <div className="card">
            <div className="card-title">Lorem ipsum dolor sit amet</div>
            <div>
              <p className="img">
                <img src={Cart1} height="200px" width="200px" alt="" />
              </p>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Lorem ipsum dolor sit amet</div>
            <div>
              <p className="img">
                <img src={Cart1} height="200px" width="200px" alt="" />
              </p>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Lorem ipsum dolor sit amet</div>
            <div>
              <p className="img">
                <img src={Cart1} height="200px" width="200px" alt="" />
              </p>
              <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
        </div>

        <div className="footer">Copyright © 2021</div>
      </div>
    </div>
  );
}

export default App;
