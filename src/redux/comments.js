import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMess: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};

        default:
            return state;
    }
};

/*Ação Add Comentario, pega o tipo da ação no ActionTypes.js e faz a ação definida no
         ActionCreators.js, colocar os novos dados (salvos no payload) dentro do novo comment,
         que é um novo objeto que NÃO altera o state atual, apenas cria um novo (só cria na memoria, não existe um BD) */