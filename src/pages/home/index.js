import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
//import styled from 'styled-components';

function home()  {
    return (
      <div style={{background: "#141414"}}>

      
            <Menu />
            <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription="Sempre fiz comédia stand up por amor, até porque se fosse por dinheiro eu não estaria há 9 anos fazendo, 6 deles ganhando nada, + 1 deles ganhando pouco e no último ano até que não vou reclamar não porque as coisas melhoraram bastante grazadeus."
            />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[6]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[7]} />
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[8]} />
            <Footer />
      </div>
    );
};

export default home;