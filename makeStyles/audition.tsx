import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const audition = makeStyles((theme) => ({
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    // '75%': {
    //   opacity: 0,
    //   transform: 'translate3d(0,100%,0)',
    // },
    '100%': {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },
  tie: {
    animation: '$myEffect 2s',
  },
  container: {
    background: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '140px',
    },
    [theme.breakpoints.up(768)]: {
      paddingTop: '180px',
      width: '786px',
    },
    [theme.breakpoints.up(992)]: {
      paddingTop: '180px',
      width: '1100px',
    },
    [theme.breakpoints.up(1200)]: {
      paddingTop: '180px',
      width: '1180px',
    },
  },
  mainBox: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#cfe8fc',
      width: '100%',
      height: '100%',
    },
  },
  introBox: {
    background: 'white',
    wordBreak: 'keep-all',
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      fontFamily: 'serif',
      marginBottom: '45px',
      marginTop: 0,
      '& h1': {
        animation: `$myEffect 1s `,
        fontSize: '22px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        animation: `$myEffect 2s `,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '14px',
        fontWeight: 350,
        lineHeight: '22px',
      },
    },
    [theme.breakpoints.up(768)]: {
      '& h1': {
        fontSize: '30px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '14px',
        fontWeight: 350,
        lineHeight: '28px',
        wordBreak: 'keep-all',
      },
    },
    [theme.breakpoints.up(993)]: {
      '& h1': {
        fontSize: '40px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '16px',
        fontWeight: 350,
        lineHeight: '28px',
        wordBreak: 'keep-all',
      },
    },
    [theme.breakpoints.up(1200)]: {
      '& h1': {
        fontSize: '50px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '17px',
        fontWeight: 350,
        lineHeight: '28px',
        wordBreak: 'keep-all',
      },
    },
  },
  blockbr: {
    [theme.breakpoints.up(768)]: {
      display: 'none',
    },
  },
  dash: {
    position: 'relative',
    paddingLeft: '15px',

    '& p::before': {
      position: 'absolute',
      content: "'-' ",
      top: 0,
      left: 0,
    },
  },
  star: {
    position: 'relative',
    paddingLeft: '15px',
    fontWeight: 300,
    '& p::before': {
      position: 'absolute',
      content: "'*' ",
      top: 0,
      left: 0,
    },
  },
  bold: {
    '& p': {
      fontWeight: 'bold',
    },
  },
  infobox: {
    wordBreak: 'keep-all',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      fontWeight: 700,

      '& dl': {
        marginTop: '0px',
      },
      '& span': {
        marginBottom: 30,
        fontSize: '17px',
        fontWeight: 800,
      },
      marginBottom: '40px',
      '& dt': {
        lineHeight: '35.4px',
        fontSize: '15px',
        fontWeight: 700,
      },
      '& p': {
        marginTop: '0px',
        marginBottom: '0px',

        fontSize: '15px',
        fontWeight: 'lighter',
      },
    },
    [theme.breakpoints.up(993)]: {
      fontSize: '21px',
    },
    '& dt': {
      fontSize: '16px',
    },
    '& p': {
      fontSize: '16px',
    },
  },
  textflex: {
    [theme.breakpoints.up(768)]: {
      display: 'flex',
      alignItems: 'center',
      '& dt ': {
        width: '80px',
      },
    },
  },
  HowToApply: {
    display: 'flex',
    [theme.breakpoints.up(768)]: {
      display: 'flex',
      width: '80px',
      height: '117px',
      verticalAlign: 'top',
    },
  },

  noticeBox: {
    paddingTop: '50px',
    borderTop: '1px solid #dadada',
    wordBreak: 'keep-all',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      fontWeight: 700,

      '& dl': {
        marginTop: '0px',
      },
      '& span': {
        marginBottom: 30,
        fontSize: '17px',
        fontWeight: 800,
      },
      marginBottom: '40px',
      '& dt': {
        lineHeight: '35.4px',
        fontSize: '15px',
        fontWeight: 700,
      },
      '& p': {
        fontFamily: 'Noto Sans KR',
        marginTop: '0px',
        marginBottom: '0px',
        lineHeight: '22.4px',
        fontSize: '14px',
        fontWeight: 'lighter',
      },
    },
  },
}));

export const auditionInfo = makeStyles((theme) => ({
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    // '75%': {
    //   opacity: 0,
    //   transform: 'translate3d(0,100%,0)',
    // },
    '100%': {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },
  '@keyframes infoEffect': {
    '0%': {
      opacity: 0,
    },

    '100%': {
      opacity: 1,
    },
  },

  info: {
    height: '100%',
    animation: '$infoEffect 1s',
    background: 'white',
    [theme.breakpoints.up('xs')]: {
      padding: 0,
    },
    [theme.breakpoints.up(768)]: {
      marginLeft: 'auto',
      marginRight: 'auto',

      padding: '15px',
    },
  },
}));

export const auditionTab = makeStyles((theme) => ({
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    // '75%': {
    //   opacity: 0,
    //   transform: 'translate3d(0,100%,0)',
    // },
    '100%': {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },
  MuiTab: {
    display: 'flex',
    background: 'white',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '40px',
    },
  },
  detail: {
    width: '184px',
    [theme.breakpoints.up(993)]: {
      fontSize: '20px',
    },
  },
}));

export const process = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      marginBottom: '20px',
    },
  },
  part: {
    marginBottom: '15px',
  },
  process: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '17px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
  },
  processingBox: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#333',
    height: '100%',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '10px 15px 10px 15px',

    zIndex: 1,
    [theme.breakpoints.up(768)]: {
      display: 'flex',
    },
    [theme.breakpoints.up(993)]: {
      display: 'flex',
    },
  },
  line: {
    display: 'none',
    border: '1px solid #DADADA',
    width: '80%',
    height: '0.5px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '47%',
    left: '10%',
    [theme.breakpoints.up(768)]: {
      display: 'block',
    },
    [theme.breakpoints.up(993)]: {
      display: 'block',
    },
  },
  circle: {
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: 'white',
    width: '110px',
    height: '110px',
    [theme.breakpoints.up('xs')]: {
      margin: '40px auto 50px auto',
    },
    [theme.breakpoints.up(993)]: {
      width: '125px',
      height: '125px',
    },
  },

  wideCircle: {
    borderRadius: '25px',
    textAlign: 'center',
    backgroundColor: 'black',
    width: '85px',
    color: 'white',
    height: '30px',

    [theme.breakpoints.up('xs')]: {
      margin: 'auto',
      marginTop: '30px',
      width: '90px',
      height: '45px',
    },
    [theme.breakpoints.up(768)]: {
      margin: 'auto',
      marginTop: '30px',
      marginLeft: '50px',
      marginRight: '50px',
      width: '90px',
      height: '45px',
    },
    [theme.breakpoints.up(993)]: {
      marginLeft: '100px',
      marginRight: '100px',
    },
  },

  textBox: {
    margin: '25px auto 25px auto',
  },

  circleText: {
    textAlign: 'center',
    paddingTop: '0px',
    width: '100%',
    [theme.breakpoints.up(993)]: {
      fontSize: '16px',
    },
  },
  resumes: {
    display: 'flex',
  },
  circleText2: {
    lineHeight: '40px',
    textAlign: 'center',
    paddingTop: '0px',
    width: '100%',
    marginBottom: '4px',
  },
  aor: {
    padding: '0px',
    margin: '0px',

    [theme.breakpoints.up(992)]: {
      display: 'flex',

      width: '100%',
    },
  },
  singer: {
    height: 'auto',

    color: '#333',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '44px',
    [theme.breakpoints.up(768)]: {
      width: '100%',
    },

    [theme.breakpoints.up(993)]: {
      width: '500px',
      height: '370px',
    },
    [theme.breakpoints.up(1200)]: {
      width: '550px',
      height: '420px',
    },
  },
  actor: {
    height: 'auto',
    margin: '0px',
    color: '#333',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '44px',
    [theme.breakpoints.up(768)]: { width: '100%' },
    [theme.breakpoints.up(993)]: {
      width: '500px',
      height: '370px',
    },
    [theme.breakpoints.up(1200)]: {
      width: '550px',
      height: '420px',
    },
  },
  singerBox: {
    width: '100%',
    [theme.breakpoints.up(993)]: {},
  },
  actorBox: {
    [theme.breakpoints.up(993)]: {},
  },

  // singActorFlex: {
  //   display: 'flex',
  // },
  singerActorTitle: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      width: '100%',
      fontSize: '17px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    [theme.breakpoints.up(993)]: {
      fontSize: '20px',
    },
  },

  notice: {
    paddingLeft: '30px',
    paddingRight: '30px',

    position: 'relative',
    '& p': {
      fontSize: '14px',
      fontWeight: 300,
    },
    '& p::before': {
      paddingLeft: '15px',
      position: 'absolute',
      content: "'-'",
      top: 0,
      left: 0,
    },
  },
  check: {
    paddingLeft: '15px',
    wordBreak: 'keep-all',
    position: 'relative',
    '& p': {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    '& p::before': {
      position: 'absolute',
      content: "'v'",
      top: 0,
      left: 0,
    },
  },
  plus: {
    paddingLeft: '30px',
    wordBreak: 'keep-all',
    position: 'relative',
    '& p': {
      fontWeight: 300,
      fontSize: '14px',
    },
    '& p::before': {
      paddingLeft: '15px',
      position: 'absolute',
      content: "'+'",
      top: 0,
      left: 0,
    },
  },
}));

export const Faq = makeStyles(() => ({
  FAQ: {
    fontSize: '18px',
    marginBottom: '10px',
    fontWeight: 'bolder',
  },

  list: {
    padding: '20px 10px',
    '& h4 ': {
      fontSize: '14px',
    },
  },
  listItem: {
    padding: '10px 10px 0px 10px',
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    fontSize: '13px',
    fontWeight: 300,
    color: '#3977cc',
  },
}));

export const dummy = [
  {
    id: 1,
    title: '오디션 지원 결과는 언제 알수 있나요?',
    dropCheck: false,
    content: (
      <span>
        오디션 담당자가 지원 서류 확인 후<span>, </span>합격자에 한해 개별 연락
        드립니다
        <span></span>.
      </span>
    ),
  },
  {
    id: 2,
    title: '이메일 접수 수신 확인이 되지 않습니다.',
    dropCheck: true,
    content: (
      <>
        <p>
          오디션 메일 계정은 보안에 따라 수신 확인이 되지 않을 수 있습니다만
          <span>,</span>
        </p>
        <p>
          <span>
            보내주시는 지원서들은 빠짐없이 확인하고 있으니 염려 않으셔도 됩니다
          </span>
          <span>.</span>
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: '이메일 접수 수신 확인이 되지 않습니다.',
    dropCheck: false,
    content: (
      <p>
        <span>네</span>
        <span>, </span>
        <span>가능합니다</span>
        <span>
          국내 지원자들과 동일하게 지원 서류 작성하여 필수 자료와 함께
          보내주세요
        </span>
        <span>.</span>
      </p>
    ),
  },
  {
    id: 4,
    title: '만 14세 미만은 오디션 지원이 불가한가요?',
    dropCheck: false,
    content: (
      <p>
        <span>
          지원 가능하나<span>, </span>만 <span>14</span>세 미만 청소년 지원자는
          법정 대리인의 정보와 오디션 동의서 확인 해주셔야 합니다
          <span>.</span>
        </span>
      </p>
    ),
  },
  {
    id: 5,
    title: '여러 분야에 지원 할 수 있나요?',
    dropCheck: false,
    content: (
      <p>
        <span>
          가능합니다<span>. </span>지원서에 표기해주시고<span>, </span>필수
          자료를 충분히 보내주시기 바랍니다<span>.</span>
        </span>
        &nbsp;
      </p>
    ),
  },
  {
    id: 6,
    title: '필수 자료 첨부 시 사진,동영상,파일 사양에 제한이 있나요?',
    dropCheck: false,
    content: (
      <p>
        <span>네</span>
        <span>, </span>
        <span>있습니다</span>
        <span>. </span>
        <span>모집 분야별 상세 내용을 다시 한 번 확인 해주세요</span>
        <span>.</span>
      </p>
    ),
  },
  {
    id: 7,
    title: '사진 첨부 시 프로필 사진이 아닌 핸드폰으로 촬영한 사진도 괜찮나요?',
    dropCheck: false,
    content: (
      <>
        <p>
          <span>
            전문가에 의해 촬영된 프로필 사진이 아니어도 얼굴 확인이 가능한
            사진이면 됩니다
          </span>
          <span>.</span>
        </p>
        <p>
          <span>단</span>
          <span>, </span>
          <span>보정이 된 사진</span>
          <span> (</span>
          <span>포토샵</span>
          <span>,</span>
          <span>휴대폰 어플 사용 등</span>
          <span>) </span>
          <span>은 심사에서 제외됩니다</span>
          <span>.</span>
        </p>
      </>
    ),
  },
];
