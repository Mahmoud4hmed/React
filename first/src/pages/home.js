import Header from '../comp/header';
import './script';


const Home = () => {
  return (
    <>
    <div className="container">
      <Header mark="home" />
      <div className="content">
        <div className="text">
          <h2>Page 1, Home</h2>
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
    <script src="script.js"></script>
    </>
  );
}

export default Home;
