import { styled } from "styled-components";

const IncotermsWrapper = styled.div`
  &.incoterms-component {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 120px;

    .title-mini {
      color: #4ca3b6;
      font-size: 16px;
      letter-spacing: 5.28px;
      text-align: start;
      text-transform: uppercase;
    }

    .title-big {
      color: #fff;
      font-size: 32px;

      @media (min-width: 992px) {
        font-size: 64px;
      }
    }

    h1 {
      margin: 0;
    }

    .padding-0 {
      padding: 0 !important;
    }

    .text-align-right {
      text-align: right;
    }

    .more-details {
      max-height: 300px;
    }

    .inconterms-informations {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 100%;

      @media (max-width: 576px) {
        padding: 1rem;
      }

      .incoterms-container {
        padding: 1rem 0rem;
        margin: 12px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 32px 0px;


        @media (min-width: 1400px) {
          padding: 120px;

        }

        border-radius: 10px;

        background: #fff;
        --number-of-incoterms: 9;

      .gary  {
          position: absolute;
          top: 80px;
          border-left: 6px dotted rgb(204, 201, 201);
          border-right: 0;
          height: 100px;
             @media (max-width: 1400px) {
             top: 50px;
             height: 70px;

             
            }
        }
        .transferRisk {
          position: absolute;
          top: 120%;

           @media (max-width: 1400px) {
            top: 125%
          }

          }
        .captions {
          display: flex;
          justify-content: end;
          align-items: center;
          flex-direction: row;
          gap: 20px;

          @media (max-width: 992px) {
            justify-content: center;
            gap: 1rem;
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
            background-color: rgb(0, 140, 196);
          }
          .captions__risk .square {
            background-color: rgb(225 232 250);
          }
        }
      }

      .incoterm-dropdown.mobile {
        display: none;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
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

     
      .stage-line,
      .incoterm-line {
        display: grid;
        grid-template-columns: 1fr 3fr;

        @media (max-width: 1400px) {
          grid-template-columns: 1fr;
        }
      }

      .stage-line {
        .stages-wrapper {

          .stages {
            margin-left: 5%;
            display: flex;
            justify-content: space-between;

            @media (max-width: 1400px) {
              grid-template-columns: repeat(9, 2fr);
              padding: 0 1rem;
            }

            .stage {
              min-width: 11%;
              display: flex;
              align-items: center;
              flex-direction: column;
              align-items: center;
              gap: 0.5rem;
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
          gap: 1rem;
          padding: 1rem;
          cursor: pointer;
          border-radius: 5px;

          @media (max-width: 1400px) {
            display: none;
          }

          .incoterm-dropdown__details {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex-grow: 1;

           
          }
         
        }

        .incoterm-stages {
          display: flex;
          flex-direction: column;
          background-color: white;
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
            width: 100%;
            background-color: rgb(225 232 250);
            border-radius: 0.25rem;
            overflow: hidden;

            .factory-bar,
            .customer-bar {
              display: flex;
              padding: 0.5rem 1rem;

              @media (max-width: 1400px) {
                padding: 0.30rem;
              }

              span {
                display: block;

                @media (max-width: 1400px) {
                }
              }
            }

            .customer-bar {
              justify-content: flex-start;
            }

            .factory-bar {
              color: white;
              justify-content: flex-end;

              &.size__0 {
                width: calc(calc(100% / 24) * 2);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 9) * 1);
                }
              }
              &.size__1 {
                width: calc(calc(100% / 22) * 4);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 13.5) * 3);
                }
              }
              &.size__2 {
                width: calc(calc(100% / 21) * 6);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 15) * 5);
                }
              }
              &.size__3 {
                width: calc(calc(100% / 21.4) * 8);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 16.5) * 7);
                }
              }
              &.size__4 {
                width: calc(calc(100% / 18.6) * 10);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 14.5) * 9);
                }
              }
              &.size__5 {
                width: calc(calc(100% / 18.7) * 12);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 18) * 11);
                }
              }
              &.size__6 {
                width: calc(calc(100% / 20) * 14);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 18) * 13);
                }
              }
              &.size__7 {
                width: calc(calc(100% / 21.4) * 16);
                @media (max-width: 1400px) {
                  width: calc(calc(100% / 18) * 15);
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
            background-color: rgb(0, 140, 196);
          }
          .incoterm-stage__risk .factory-bar {
            background-color: #6b7799;
          }
          .incoterm-stage__safety .factory-bar {
            background-color: #30bb50;
          }
        }
      }

      .detail-line {
        display: flex;
        flex-direction: column;

        @media (min-width: 1400px) {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          margin: 0 180px;
        }

        @media (min-width: 992px) {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .second-column span {
          grid-column: 2;

          @media (min-width: 992px) {
            grid-column: 1;
          }
        }

        

        .first-column {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
      }
    }
`;

export default IncotermsWrapper;