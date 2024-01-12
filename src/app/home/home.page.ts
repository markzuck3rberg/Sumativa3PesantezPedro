import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Busqueda: string = "";

  onBuscar(event: string) {
    this.Busqueda = event;
  }

  noticias=[
    {
      title: "Noticia 1",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, autem.",
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/1200px-Fox_News_Channel_logo.svg.png"
    },
    {
      title: "Noticia 2",
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aspernatur maxime harum expedita tenetur libero.",
      img:"https://play-lh.googleusercontent.com/YQ5NoUyngOEY_ySnhxxaay8STxRuJk0ECxHG-kvo0Qai9oit3GpnTSYPUgersI2Ow5Q"
    },
    {
      title: "Noticia 3",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur necessitatibus adipisci.",
      img:"https://img.freepik.com/vector-premium/inscripcion-noticias-vivo-logotipo-vector-tema-periodismo-creado-ilustracion-planeta-tierra-azul_570429-35171.jpg"
    },
    {
      title: "Noticia 4",
      desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad dolorum illo voluptate quam distinctio magni.",
      img:"https://play-lh.googleusercontent.com/UmV6y1aez5F9VSIaIk9nPSJsliuXx5p4Mwf07CqDSzQF0Hq9gqj5c8t2Di1h6o4l0g"
    },
    {
      title: "Noticia 5",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellendus itaque tempora recusandae. Nostrum",
      img:"https://play-lh.googleusercontent.com/6h6i2l4Z2fM3i79KYh1UzA1ukrg4QuXOquke-yxYS1ouyvCkRiO-7VE1In-j0TlZuK4"
    },
  ]
}
