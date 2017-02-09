export default function(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            state += action.payload;
            return state;
        default:
            return state;
    }
} 