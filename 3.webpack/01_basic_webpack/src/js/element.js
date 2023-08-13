//内联方式使用css-loader
// import "css-loader!../css/style.css";
import "../css/style.css";

const EL=document.createElement('div')
EL.className='title'
EL.innerHTML='你好啊，lalalalala'

document.body.appendChild(EL)