const addAttributes = (element, attrObj) => {
      for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr))
      element.setAttribute(attr,attrObj[attr])
      }
    };

    //Crear elementos con atributos e hijo
    const createCustomElement = (element,attributes,children) => {
      let customElement = document.createElement(element);
      if (children !== undefined) children.forEach(el => {
        if(el.nodeType) {
          if (el.nodeType === 1 || el.nodeType === 11)
      customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
      addAttributes(customElement,attributes);
      return customElement;
    };

    // Imprimir modal
    const printModal = content => {
      // crear contenedor interno
      const modalContentEl = createCustomElement('div', {
        id: 'ed-modal-content',
        class: 'ed-modal-content'
      }, [content]),

    // crear contenedor principal
      modalContainerEl = createCustomElement('div', {
        id: 'ed-modal-container',
        class: 'ed-modal-container'
      }, [modalContentEl]);

      // Imprimir el modal
      document.body.appendChild(modalContainerEl);

      //  Remover el modal
      const removeModal = () => document.body.removeChild(modalContainerEl);

        modalContainerEl.addEventListener('click', e => {
          if (e.target === modalContainerEl) removeModal();
        })
    }
    

    document.getElementById('verifyDetaill').addEventListener('click', () => {
      var content = informacionVerify.cloneNode(true)
      content.style["display"] = "block";
      printModal(content);
    });

    document.getElementById('sistemaActDetaill').addEventListener('click', () => {
      var content = infoSisteActinver.cloneNode(true)
      content.style["display"] = "block";
      printModal(content);
    });

    document.getElementById('bbvaDetaill').addEventListener('click', () => {
      var content = informacionBbva.cloneNode(true)
      content.style["display"] = "block";
      printModal(content);
    });

    document.getElementById('bursanetDetaill').addEventListener('click', () => {
      var content = infoBursanet.cloneNode(true)
      content.style["display"] = "block";
      printModal(content);
    });

    document.getElementById('modeloDetaill').addEventListener('click', () => {
      var content = infoModeloNow.cloneNode(true)
      content.style["display"] = "block";
      printModal(content);
    });

    document.getElementById('kanzleiDetaill').addEventListener('click', () => {
      var content = infoKanzlei.cloneNode(true)
      content.style["display"] = "block";
      printModal(content);
    });



    // imprime el contenido que contiene esta clase al dar click en este ID
    // document.getElementById('sistemaActDetaill').addEventListener('click', () => {
    //   printModal(infoSisteActinver.cloneNode(true));
    // });  

  // inside slide detaill 
    var i = 0,images = ["img/verify_max.png",
                            "img/verify_home.png",
                            "img/verify_instructions.png",
                            "img/verify_Empty.png"];
                            
          function mySlide(param)
          {
              if(param === 'next')
              {
                  i++;
                  if(i === images.length){ i = images.length - 1; }
              }else{
                  i--;
                  if(i < 0){ i = 0; }
              }              
              document.getElementById('slide').src = images[i];
          }

          var ib = 0,imagesb = ["img/actinverSistemaA.png",
                                "img/chartActinver.png",
                                "img/Sistema_A_wireframe.png"];                           
          function mySlideb(param)
          {
              if(param === 'next')
              {
                  ib++;
                  if(ib === imagesb.length){ ib = imagesb.length - 1; }
              }else{
                  ib--;
                  if(ib < 0){ ib = 0; }
              }              
              document.getElementById('slide2').src = imagesb[ib];
          }

          var ic = 0,imagesc = ["img/spendingBBVA.png",
                                "img/spendingConfirm.png",
                                "img/spendingSucces.png"];                            
          function mySlidec(param)
          {
              if(param === 'next')
              {
                  ic++;
                  if(ic === imagesc.length){ ic = imagesc.length - 1; }
              }else{
                  ic--;
                  if(ic < 0){ ic = 0; }
              }              
              document.getElementById('slide3').src = imagesc[ic];
          }



