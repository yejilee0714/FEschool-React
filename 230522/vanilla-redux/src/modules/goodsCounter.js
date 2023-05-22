//액션 생성함수
export const addNumber = ()=> {
    return {type : "ADD"}
}

export const substractNumber = () =>{
    return {type: "SUBSTRACT"}
}

const initialState = {
    stock: 100,
    goods: 1
}

const goodsReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD":
            return {
                ...state, 
                stoke: state.stock - 1,
                goods: state.goods + 1,
            }
        case "SUBSTRACT":
            return {
                ...state, 
                stoke: state.stock + 1,
                goods: state.goods - 1,
            }
        default:
            return state;
    }
}

export default goodsReducer;