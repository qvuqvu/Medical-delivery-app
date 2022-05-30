let defaultState = {
    selectedItems: { items: [] }
}
let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            if (action.payload.checkboxValue) {
                console.log('ADD_TO_CART')
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                };

            }
            else {
                console.log('REMOVE FROM CART')
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.id !== action.payload.id
                        ),
                    ],
                }
            }
            console.log(newState.selectedItems, "👉");
            return newState;
        }
        case 'DELETE_TO_CART': {
            let newState = { ...state };
            newState.selectedItems = {
                items: [],
            };
            console.log(newState, "👉");
            return newState;
        }
        case 'UPDATE_TO_CART': {
            let newState = { ...state };
            const a = action.payload.SL;
            console.log('UPDATE CART')
            newState.selectedItems = {
                items: [...newState.selectedItems.items.map(
                    (item) => item.id === action.payload.id ? { ...item, SL: a }
                        : item
                )]
            }
            console.log(newState.selectedItems, "👉");
            return newState;
        }
        case 'UPDATE1_TO_CART': {
            let newState = { ...state };
            const a = action.payload.SL;
            console.log('UPDATE CART')
            newState.selectedItems = {
                items: [...newState.selectedItems.items.map(
                    (item) => item.id === item.id ? { ...item, SL: a }
                        : item
                )]
            }
            console.log(newState.selectedItems, "👉");
            return newState;
        }
        default:
            return state;
    }
};

export default cartReducer;