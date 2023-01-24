import Header from '../comp/header';


const Javascript = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="text">
          <h2>Page 4, Javascript</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            est fugit excepturi atque velit suscipit assumenda voluptas maiores!
          </p>
          <a href="#">All products</a>
        </div>
        <div className="img">
          <img className="img1" src="img/0.png" />
        </div>
      </div>
      <div className="icons">
        <img onclick="phones(this.src); colors('#000')" src="img/0.png" />
        <img onclick="phones(this.src); colors('#247ec8')" src="img/1.png" />
        <img onclick="phones(this.src); colors('#1e1e1e')" src="img/2.png" />
        <img onclick="phones(this.src); colors('#c79b53')" src="img/3.png" />
        <img onclick="phones(this.src); colors('#c82525')" src="img/4.png" />
      </div>
    </div>
  );
}

export default Javascript;
