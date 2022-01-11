import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  Notice: [
    {
      id: 0,
      user: '글쓴이',
      date: '2020 09 11',
      Hit: 6060,
      title: '[EDAM] EDAM Entertainment 홈페이지 오픈',
      post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
    },
  ],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
