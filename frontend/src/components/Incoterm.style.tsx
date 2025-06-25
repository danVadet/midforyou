import { styled } from "styled-components";

export const IncotermsWrapper = styled.div`
  &.incoterms-component {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
    .gary {
        
        border: 1px solid  #d9d9d9;;
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
        top: 90px;


          @media (max-width: 767px) {
          top: 45px;
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
      gap: 32px;
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 32px 0px;


      @media (max-width: 576px) {
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
        --number-of-incoterms: 9;
      }

      .incoterm-dropdown.mobile {
        display: none;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        background-color: #d9d9d9;
        width: fit-content;
        cursor: pointer;
        margin-left: 12px;

        @media (max-width: 1400px) {
          display: flex;
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
        .incoterm-dropdown {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eaeaea;
          cursor: pointer;
          border-radius: 5px;
          width: 60%;

          @media (max-width: 1400px) {
            display: none;
          }

          .incoterm-dropdown__details {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex-grow: 1;

            .incoterm-dropdown__acronym {
              font-size: 2rem;
              font-weight: bold;
            }

            .incoterm-dropdown__name {
            }
          }
          .incoterm-dropdown__icon {
          }
        }

        .incoterm-stages {
          display: flex;
          flex-direction: column;
          background-color: rgb(255, 255, 255);
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
            background-color: #e1e8fa;
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

                @media (max-width: 1400px) {
                     width: calc(calc(100% / 18) * 6.5);

  
                }
                
              }
              &.size__1 {
                width: calc(calc(100% / 19) * 4);

                  @media (max-width: 1400px) {
                   width: calc(calc(100% / 18) * 8);  
                
                }
                
              }
              &.size__2 {
                width: calc(calc(100% / 19) * 6);
                 @media (max-width: 1400px) {
                   width: calc(calc(100% / 18) * 9.5);  
                
                }
              }
              &.size__3 {
                width: calc(calc(100% / 19) * 8);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 18) * 7);
                }
              }
              &.size__4 {
                width: calc(calc(100% / 19) * 10);
                 @media (max-width: 1400px) {
                   width: calc(calc(100% / 18) * 12.7);  
                
                }
              }
              &.size__5 {
                width: calc(calc(100% / 19) * 12.5);
                @media (max-width: 1400px) {
                   width: calc(calc(100% / 18) * 14);  
                
                }
              }
              &.size__6 {
                width: calc(calc(100% / 19) * 14);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 18) * 13);
                }
              }
              &.size__7 {
                width: calc(calc(100% / 19) * 16);
                @media (max-width: 1400px) {
                   width: calc(calc(100% / 18) * 17);  
                
                }
              }
              &.size__8 {
                width: calc(calc(100% / 19) * 18);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 18) * 17);
                }
              }
            }

            &.incoterm-stage__cost .factory-bar {
              color: inherit;
            }
          }

          .incoterm-stage__cost .factory-bar {
            background-color: #008dc5;
          }
          }
        }
      }

      .detail-line {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem 0 0 10rem;

        @media (max-width: 767px) {
          font-size: 15px;
        }



        @media (min-width: 1400px) {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (min-width: 992px) {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .second-column {
    

          @media (max-width: 767px) {
            font-size: 12px;
          }
        }

        .captions {
          display: flex;
          justify-content: space-between;
          gap: 30px;

          @media (max-width: 767px) {
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            font-size: 15px;
          }


          .captions__cost,
          .captions__risk,
          .captions__safety {
            display: flex;
            gap: 0.25rem;
            align-items: center;
          }

          .square {
            width: 1rem;
            height: 1rem;
            max-width: 1rem;
            max-height: 1rem;
            border-radius: 3px;
          }

          .captions__cost .square {
            background-color: #008dc5;
          }
          .captions__risk .square {
            background-color:  #e1e8fa;;
          }

        .first-column {
          display: flex;
          flex-direction: row;
          gap: 1rem;
        }
      }
    }
      
    }
  }
`;