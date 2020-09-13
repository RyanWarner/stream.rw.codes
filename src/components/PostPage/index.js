import * as S from './styles'
import { SEO } from 'components'

const PostPage = ({ frontMatter, mdxHtml }) => {
  return (
    <>
      <S.Wrap>
        <SEO title={frontMatter.title} />
        <S.Main>
          <h1>{frontMatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: mdxHtml }} />
        </S.Main>
      </S.Wrap>
    </>
  )
}

export default PostPage
