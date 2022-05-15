type MenuOptions = '' | 'tudo' | 'cachorros' | 'gatos' | 'peixes';
export const criarMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        tudo: false,
        cachorros: false,
        gatos: false,
        peixes: false
    };


    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    
    return returnObject;
}