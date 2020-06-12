export const openPopup = (payload:object) => ({ 
    type: 'OPEN_POPUP', 
    payload
});

export const closePopup = () => ({
    type: 'CLOSE_POPUP',
});
