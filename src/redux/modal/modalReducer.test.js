import modalReducer from "./reducer";
import {setModal,setModalAction,setModalTitle,setProductName,setProductPrice} from './actionCreators'
const initialValue = {
    isActive: false,
    modalAction: null,
    title: "",
    name:"",
    price:"",
  };

describe("Modal reducer tests",() => {
    test("should modalReducer return default value without state and action", () => {
      expect(modalReducer()).toEqual(initialValue);
    })
    
    test("should modalReducer change isActive value", () => {
        expect(modalReducer(undefined,setModal(true))).toEqual({
            isActive: true,
            modalAction: null,
            title: "",
            name:"",
            price:"",
          });
      })
   
      test("should modalReducer change madalAction value", () => {
        expect(
          modalReducer(
            undefined,
            setModalAction(<button>Confirm</button>)
          )
        ).toEqual({
            isActive: false,
            modalAction:<button>Confirm</button>,
            title: "",
            name:"",
            price:"",
        });
      });
      test("should modalReducer change title  value", () => {
        expect(
          modalReducer(
            undefined,
            setModalTitle("TEST HELLO")
          )
        ).toEqual({
            isActive: false,
            modalAction:null,
            title: "TEST HELLO",
            name:"",
            price:"",
        });
      });

      test("should modalReducer change Product Name value", () => {
        expect(
          modalReducer(
            undefined,
            setProductName("Product")
          )
        ).toEqual({
            isActive: false,
            modalAction:null,
            title: "",
            name:"Product",
            price:"",
        });
      });
      test("should modalReducer change Product Price value", () => {
        expect(
          modalReducer(
            undefined,
            setProductPrice(123)
          )
        ).toEqual({
            isActive: false,
            modalAction:null,
            title: "",
            name:"",
            price:123,
        });
      });




    }
    )