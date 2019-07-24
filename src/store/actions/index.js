export const REMOVE_FEATURES = 'REMOVE_FEATURES';
export const BUY_ITEM = 'BUY_ITEM';

export const buyItem = item => dispatch  => {
    console.log("item from AC: ", item);
    dispatch({ type: BUY_ITEM, payload: item})
}
export const removeFeature = item => dispatch  => {
    dispatch({ type: REMOVE_FEATURES, payload: item })
}