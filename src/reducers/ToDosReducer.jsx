export const toDosReducer = (state, action) => {
    switch(action.type) {
        case 'add':
            return [
                ...state, {
                    id: Math.random() * 1000,
                    text: action.text
                }
            ];
        case 'remove':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
}