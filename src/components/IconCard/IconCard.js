import * as S from './styles'

const IconCard = ({ icon, text, ...rest }) =>
  <S.IconCardComponent {...rest}>
    {icon}
    <S.Text>{text}</S.Text>
  </S.IconCardComponent>

export default IconCard