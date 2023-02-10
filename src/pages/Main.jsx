const Main = () => {
  return (
    <div className="main">
      <div className="main__sidebar sidebar">
        <div className="sidebar__top">
          <span>Khasanov Yevhen</span>
          <button>logout</button>
        </div>
        <div className="sidebar__content">
          <div className="item">
            <img
              className="item__img"
              src="https://images.pexels.com/photos/14321116/pexels-photo-14321116.jpeg"
              alt="user avatar"
            />
            <div className="item__content">
              <span className="item__username">John</span>
              <span className="item__last-message">Hello!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main__chat chat">
        <div className="chat__top">
          <span className="chat__top-username">John</span>
        </div>
        <div className="chat__content messages">
          <p className="message">Hello!</p>
          <p className="message message--my">Morning!</p>
        </div>
        <div className="chat__message-input">
          <input className="message-input" type="text" placeholder="enter message ..." />
        </div>
      </div>
    </div>
  );
};

export default Main;
