import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
import RelatedContext from './RelatedContext.jsx';
import Modal from './Modal.jsx';
import styled from 'styled-components';

const Container = styled.div`
width: 60%;
display: flex;
flex-direction: column;
`

const ModalContainer = styled.div`
width: 100%;
height: 65%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const RelatedProduct = ({currentProductId}) => {

  // const [displayStyles, setStyles] = useState([]);
  const [displayProducts, setProducts] = useState([]);
  const [displayOutfit, setOutfit] = useState([]);
  const [relatedProductIds, setRelated] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [imgClicked, setImgClicked] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const getProducts = async () => {
    try {
      var type = ['styles', 'products']
      var key = ['style', 'product']
      for(var i = 0; i < relatedProductIds.length; i++) {
        var product = {};
        for(var j = 0; j < type.length; j++) {
          const {data} = await axios.get(`/${type[j]}/${relatedProductIds[i]}`)
          product[key[j]] = data;
        }
        await setProducts(prevState => (
          [...prevState, product]
        ));
      }
      await setLoaded(true);
    } catch (err) {
      console.error(err);
    }
  }

  const addOutfit = (addedItem) => {
    var doesContain = false;
    for (var a = 0 ;  a < displayOutfit.length; a++) {
      if(displayOutfit[a]['product']['id'] === addedItem.product.id) {
        doesContain = true;
      }
    }
    if(!doesContain) {
      setOutfit(prevState => (
        [...prevState, addedItem]
      ));
    }
  }

  const deleteOutfit = (deletedItem) => {
    for (var d = 0 ;  d < displayOutfit.length; d++) {
      if(displayOutfit.length === 1) {
        setOutfit([]);
      } else if(displayOutfit[d]['product']['id'] === deletedItem) {
        var front = displayOutfit.slice(0, d);
        var back = displayOutfit.slice(d + 1, displayOutfit.length)
        var newOutfit = front.concat(back);
        setOutfit(newOutfit);
        break;
      }
    }
  }

  useEffect(() => {
    axios.get(`/related/${currentProductId}`)
    .then(({data}) => {
      var noDups = [...new Set(data)];
      //console.log('this is data from server', data);
      setRelated(noDups);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    //getStyles()
    getProducts()
  }, [relatedProductIds])


  return (
    <Container>
      {
        imgClicked ?
        <ModalContainer>
          <Modal modalInfo={modalInfo}/>
        </ModalContainer>
        : null
      }
      {
        loaded ?
        <RelatedContext.Provider value={{addOutfit, deleteOutfit, setImgClicked, setModalInfo}}>
          <h4>Related Products</h4>
          <Carousel productInfo={displayProducts} isOutfit={false} />
          <h4>Outfit</h4>
          <Carousel productInfo={displayOutfit} isOutfit={true}/>
        </RelatedContext.Provider>
        : <div>Page Loading</div>
      }
    </Container>
  )
}

export default RelatedProduct;

  // const getStyles = async () => {
  //   try {
  //     for(var i = 0; i < relatedProductIds.length; i++) {
  //       const {data} = await axios.get(`/styles/${relatedProductIds[i]}`)
  //       var style = data;
  //       await setStyles(prevState => (
  //         [...prevState, data]
  //       ));
  //     }
  //     await setLoaded(true);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // const getProducts = async () => {
  //   try {
  //     for(var i = 0; i < relatedProductIds.length; i++) {
  //       const {data} = await axios.get(`/products/${relatedProductIds[i]}`)
  //       await setProducts(prevState => (
  //         [...prevState, data]
  //       ));
  //     }
  //     await setLoaded(true);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }