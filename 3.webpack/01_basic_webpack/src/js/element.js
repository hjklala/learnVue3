//内联方式使用css-loader
// import "css-loader!../css/style.css";
import "../css/style.css";
import headimg from "../img/2.jpg";

const EL=document.createElement('div')
EL.className='title'
EL.innerHTML='你好啊，lalalalala'

//设置图片
const imgEL=document.createElement('img')
imgEL.src=headimg


document.body.appendChild(EL)
document.body.appendChild(imgEL)