import { styled } from "styled-components";

export const IncotermsWrapper = styled.div`

  &.incoterms-component {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    .gary {
        
        border: 1px solid  rgb(217, 217, 217);
        height: 100px;
        position: absolute;
        top: 90px;

       @media (max-width: 767px) {
        height: 80px;
        top: 40px;
      }
      
       /* Tablets - Portrait */
       @media (min-width: 768px) and (max-width: 991px) {

            height: 100px;
            top: 50px;          
        }

              /* Tablets - Landscape */
        @media (min-width: 992px) and (max-width: 1199px) {

             height: 100px;
            top: 50px; 
        
        }

    }

    .transferRisk {
        position: absolute;
        top: 110px;


          @media (max-width: 767px) {
          top: 70px;
        } 
      

        /* Tablets - Portrait */
        @media (min-width: 768px) and (max-width: 991px) {

        top: 60px;
          
        }


      /* Tablets - Landscape */
        @media (min-width: 992px) and (max-width: 1199px) {

          top: 65px;
        
        }

        /* Small Laptops */
      @media (min-width: 1200px) and (max-width: 1439px) {

          top: 65px;
        
      }
    }

    .transferRisk svg {

          fill: rgb(255, 140, 0);
          width: 30px;
          height: 60px;

          @media (max-width: 767px) {

          width: 20px;
          height: 40px;
          
        } 
      

        /* Tablets - Portrait */
        @media (min-width: 768px) and (max-width: 991px) {

        top: 60px;
          
        }


      /* Tablets - Landscape */
        @media (min-width: 992px) and (max-width: 1199px) {

          top: 65px;
        
        }

        /* Small Laptops */
      @media (min-width: 1200px) and (max-width: 1439px) {

          top: 65px;
        
      }
    }

    .title {
      text-align: left;
      margin: 40px;
      font-size: 48px;


        @media (max-width: 991px) {
        text-align: center;

        font-size: 32px;
          
        }
    }

    .more-details {
      max-height: 300px;
    }

    .inconterms-informations {
      display: flex;
      flex-direction: column;
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 32px 0px;


      @media (max-width: 992px) {
        padding: 1rem;
      }

      .incoterms-container {
        padding: 1rem 0rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media (min-width: 1400px) {
          padding: 50px;
        }

        border-radius: 10px;

        background: rgb(255, 255, 255);
      }
      

      .incoterm-dropdown.mobile {
        display: none;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        gap: 1rem;
        padding: 1rem;
        background-color: rgb(217, 217, 217);
        max-width: fit-content;
        min-width: 300px;
        height: 50px;
        cursor: pointer;
        margin: 8px;

        @media (max-width: 1400px) {
          display: flex;
        }

          
        select {
        width: 100%;
        border-radius: 5px;
        outline: none;
        border: none;

        option {

         display: flex;
      align-items: center;
      padding: 10px;
      border-top: 1px solid #444;
      cursor: pointer;
      transition-property: color, background;
      transition-duration: 0.2s;
      transition-timing-function: ease-out;
         img {
           width: 30px;
         }
        }

       
       
       }

        

        .incoterm-dropdown__details {
          display: flex;
          gap: 0.5rem;

          .incoterm-dropdown__acronym {
            font-weight: bold;
          }
        }
      }

      .grid-line {
        display: grid;
      }

      

      .stage-line,
      .incoterm-line {
        grid-template-columns: 1fr 3fr;

        @media (max-width: 1400px) {
          grid-template-columns: 1fr;
        }
      }

      .stage-line {
        .stages-wrapper {

          .stages {
            margin-left: 30%;
            display: flex;
            justify-content: space-between;

            @media (max-width: 1400px) {
              margin: 0;
              grid-template-columns: repeat(9, 2fr);
              padding: 0 1rem;
            }


            .stage {
              min-width: 11%;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1rem;
              padding: 0.5rem;

              @media (max-width: 1400px) {
                &.blank {
                  display: none;
                  
                }
              }

              .stage__icon {
                max-height: 40px;
                max-width: 100%;
                flex-grow: 1;

                @media (max-width: 576px) {
                      max-height: 15px;
                }


              }

              .stage__div__name {
                justify-content: center;
                text-align: center;
              }

              .stage__name {
                font-weight: semibold;
                width: 100%;

                @media (max-width: 1400px) {
                  display: none;
                }
              }
            }
          }
        }

        @media (max-width: 1400px) {
          .blank-cell {
            display: none;
          }

          .stages-wrapper {
            padding: 0;
          }
        }
      }

      .incoterm-line {

      
        background: rgb(217, 217, 217);

        .incoterm-dropdown  {
          display: flex;
          align-items: center;
          justify-content: center;
        border-radius: 5px;
        padding: 1rem;
        background-color: rgb(232, 232, 232);
        cursor: pointer;
        margin: 8px;
        border: 0;
        outline: 0;



          @media (max-width: 1400px) {
            display: none;
          }

          

       
        }

        .incoterm-stages {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          background-color: rgb(244, 244, 244);
          border-radius: 5px;
          gap: 1rem;

          .bar-captions.mobile {
            display: none;

            @media (max-width: 1400px) {
              display: flex;
              justify-content: space-between;
            }
          }

          .incoterm-stage {
            display: flex;
            width:  100%;
            background-color: rgb(225, 232, 250);
            border-radius: 0.25rem;
            overflow: hidden;

            .factory-bar,
            .customer-bar {
              display: flex;
              padding: 0.1rem;

              @media (max-width: 1400px) {
                padding: 0;
                height: 20px;
              }

              span {
                display: block;

                @media (max-width: 1400px) {
                  display: none;
                }
              }
            }

            .customer-bar {
              justify-content: flex-start;
            }

            .factory-bar {
              color: white;
              justify-content: flex-end;
              --fracion: calc(100% / 20);
              &.size__0 {
                width: calc(calc(100% / 19) * 2);

                @media (max-width: 992px) {
                     width: calc(calc(100% / 18) * 2);

  
                }
                
              }
              &.size__1 {
                width: calc(calc(100% / 19) * 4);

                  @media (max-width: 992px) {
                   width: calc(calc(100% / 18) * 4);  
                
                }
                
              }
              &.size__2 {
                width: calc(calc(100% / 19) * 6);
                 @media (max-width: 992px) {
                   width: calc(calc(100% / 18) * 6);  
                
                }
              }
              &.size__3 {
                width: calc(calc(100% / 19) * 8);
                @media (max-width: 992px) {
                  width: calc(calc(100% / 18) * 8);
                }
              }
              &.size__4 {
                width: calc(calc(100% / 19) * 10);
                 @media (max-width: 992px) {
                   width: calc(calc(100% / 18) * 10);  
                
                }
              }
              &.size__5 {
                width: calc(calc(100% / 19) * 12.5);
                @media (max-width: 992px) {
                   width: calc(calc(100% / 18) * 12.5);  
                
                }
              }
              &.size__6 {
                width: calc(calc(100% / 19) * 14);
                @media (max-width: 992px) {
                  width: calc(calc(100% / 18) * 13);
                }
              }
              &.size__7 {
                width: calc(calc(100% / 19) * 16);
                @media (max-width: 992px) {
                   width: calc(calc(100% / 18) * 16);  
                
                }
              }
              &.size__8 {
                width: calc(calc(100% / 19) * 18);
                @media (max-width: 992px) {
                  width: calc(calc(100% / 18) * 18);
                }
              }
            }

            &.incoterm-stage__cost .factory-bar {
              color: inherit;
            }
          }

          .incoterm-stage__cost .factory-bar {
            background-color: rgb(0, 141, 197);
          }
          }
        }
      }

      .detail-line {
        display: flex;
        text-align: left;
        flex-direction: column;
        gap: 1rem;

        @media (max-width: 992px) {
          font-size: 15px;
        }



        @media (min-width: 1400px) {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (min-width: 992px) {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

       

        


        .captions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;

            @media (max-width: 992px) {
            font-size: 12px;
          }


    
          .captions__cost,
          .captions__risk,
          .captions__safety {
            display: flex;
            gap: 0.25rem;
            align-items: center;
          }
          .captions__safety svg {
             width: 30px; 
             height: 25px; 

               @media (max-width: 767px) {

          width: 20px;
          height: 40px;
          
        } 
          
          }
           

          .square {
            width: 1rem;
            height: 1rem;
            max-width: 1rem;
            max-height: 1rem;
            border-radius: 3px;
          }

          .captions__cost .square {
            background-color: rgb(0, 141, 197);
          }
          .captions__risk .square {
            background-color:  rgb(225, 232, 250)
          }

          

        .first-column {
          display: flex;
          gap: 1rem;

           
        
        }
          
      }
        
    }
      
    }
  }
`;