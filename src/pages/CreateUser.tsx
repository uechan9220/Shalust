import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../AuthProvider'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import Dropzone from 'react-dropzone'

/**
 * styled-componets
 */

const Container = styled.div`
  padding: 1rem 4rem;
`

const Content = styled.div`
  margin: 2rem 0;
`

const Title = styled.p`
  font-weight:bold;
  text-align:center;
  font-size: 3rem;
  margin-bottom: 2rem;
`

const Img = styled.img`
  height: 100%;
`

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: .5rem;
`

const SubTitleUserName = styled(Subtitle) <{ NameValidation: boolean }> `
  color: ${props => props.NameValidation ? "#90CAF9" : "#f50057"};
`

const SubTitleUserId = styled(Subtitle) <{ IdValidation: boolean }>`
  color: ${props => props.IdValidation ? "#90CAF9" : "#f50057"};
`

const HeaderImageContainer = styled.div`
  height: 120px;
  border: 1px solid;
  padding: 4px;
`

const HeaderGetProps = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContent = styled.div`
  height: 100%;
`

const IconImageContainer = styled.div`
  height: 120px;
  width: 120px;
  border: 1px solid;
  padding: 4px;
`

const IconGetProps = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconContent = styled.div`
  height: 100%;
`

const Caption = styled.p`
  margin-top: .5rem;
  color: rgba(0,0,0,0.5);
`


/**
 * typescript
 */

interface userInfoProps {
  user_id?: string;
  user_name?: string | null;
  last_seen?: string;
  comment?: string;
  icon_image?: any;
  header_image?: any;
  account_id?: string;
}




const CreateUser: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext)
  const [header, setHeader] = useState<any>([])
  const [icon, setIcon] = useState<any>([])
  const [userIdValidation, setUserIdValidation] = useState(true)
  const [userNameValidation, setUserNameValidation] = useState(true)

  useEffect(() => {
    if (currentUser.status === "in") setUserInfo({ ...userInfo, user_id: currentUser.user?.uid, icon_image: currentUser.user?.photoURL, user_name: currentUser.user?.displayName })
  }, [currentUser])


  const getNowTime = () => {
    const date = new Date()
    const Y = date.getFullYear()
    const M = ("00" + (date.getMonth() + 1)).slice(-2)
    const D = ("00" + date.getDate()).slice(-2)
    const h = ("00" + date.getHours()).slice(-2)
    const m = ("00" + date.getMinutes()).slice(-2)
    const s = ("00" + date.getSeconds()).slice(-2)

    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
  }
  const [nowTime, setNowTime] = useState(getNowTime())
  const [userInfo, setUserInfo] = useState<userInfoProps>({ user_id: '', user_name: '', last_seen: nowTime, comment: '', icon_image: '', header_image: '', account_id: '' })


  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    let reg = new RegExp(/^[a-zA-Z0-9-_]+$/)
    switch (name) {
      case "account_id":
        let res = reg.test(value)
        setUserIdValidation(res)
        break;

      case "user_name":
        value !== '' ? setUserNameValidation(true) : setUserNameValidation(false)
        break

      default:
        break;
    }
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleInputHeaderImage = (e: any) => {
    let firstImage = e[0]
    setHeader([firstImage])
    setUserInfo({ ...userInfo, ["header_image"]: [firstImage] })
  }

  const handleInputIconImage = (e: any) => {
    let firstImage = e[0]
    setIcon([firstImage])
    setUserInfo({ ...userInfo, ["icon_image"]: [firstImage] })
  }

  return (
    <Container>
      <Title>ユーザ作成</Title>
      <Content>
        <Subtitle>ヘッダー画像</Subtitle>
        <Dropzone
          onDrop={acceptedFiles => handleInputHeaderImage(acceptedFiles)}
          accept="image/*"
        >
          {({ getRootProps, getInputProps }) => (
            <HeaderImageContainer>
              <HeaderGetProps {...getRootProps()}>
                <input {...getInputProps()} />
                {header.length > 0 ?
                  <HeaderContent>
                    {header.map((file: any) => (<Img alt="Preview" src={URL.createObjectURL(file)} />))}
                  </HeaderContent>
                  :
                  <p>クリック又は画像をドラッグ&ドロップしてください。</p>
                }
              </HeaderGetProps>
            </HeaderImageContainer>
          )}
        </Dropzone>
      </Content>
      <Content>
        <Subtitle>アイコン画像</Subtitle>
        <Dropzone
          onDrop={acceptedFiles => handleInputIconImage(acceptedFiles)}
          accept="image/*"
        >
          {({ getRootProps, getInputProps }) => (
            <IconImageContainer>
              <IconGetProps {...getRootProps()}>
                <input {...getInputProps()} />
                {icon.length > 0 ?
                  <IconContent>
                    {icon.map((file: any) => (<Img alt="Preview" src={URL.createObjectURL(file)} />))}
                  </IconContent>
                  :
                  <IconContent>
                    <Img alt="Preview" src={userInfo.icon_image} />
                  </IconContent>
                }
              </IconGetProps>
            </IconImageContainer>
          )}
        </Dropzone>
      </Content>
      {/* <p>user_id: {userInfo.user_id}</p> */}
      <Content>
        <SubTitleUserName NameValidation={userNameValidation}>名前 (必須)</SubTitleUserName>
        {userNameValidation ?
          <TextField
            name="user_name"
            required id="standard-required"
            onChange={handleInputChange}
            value={userInfo.user_name}
            fullWidth
            inputProps={{ maxLength: 20 }}
            helperText={`${userInfo.user_name?.length}/20`}
          />
          :
          <TextField
            name="user_name"
            required id="standard-required"
            onChange={handleInputChange}
            value={userInfo.user_name}
            color={'secondary'}
            fullWidth
            inputProps={{ maxLength: 20 }}
            helperText={`${userInfo.user_name?.length}/20`}
          />
        }

        <Caption>全体に表示される名前になります。後から変更も可能です。</Caption>
      </Content>
      <Content>
        <SubTitleUserId IdValidation={userIdValidation}>ユーザID (必須)</SubTitleUserId>
        {userIdValidation ? <TextField
          name="account_id"
          required id="standard-required"
          onChange={handleInputChange}
          value={userInfo.account_id}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">@</InputAdornment>,
          }}
          inputProps={{ maxLength: 20 }}
          helperText={`${userInfo.account_id?.length}/20`}
        /> : <TextField
            name="account_id"
            required id="standard-required"
            onChange={handleInputChange}
            value={userInfo.account_id}
            fullWidth
            color={'secondary'}
            InputProps={{
              startAdornment: <InputAdornment position="start">@</InputAdornment>,
            }}
            inputProps={{ maxLength: 20 }}
            helperText={`${userInfo.account_id?.length}/20`}
          />}

        <Caption>ユーザIDは英数字と’_’(アンダーバー)と’-’(ハイフン)が使えます</Caption>
      </Content>
      <Content>
        <Subtitle>コメント (任意)</Subtitle>
        <TextField
          name="comment"
          onChange={handleInputChange}
          id="outlined-multiline-static"
          multiline
          defaultValue="自己紹介とかを書きましょう"
          variant="outlined"
          inputProps={{ maxLength: 120 }}
          helperText={`${userInfo.comment?.length}/120`}
          value={userInfo.comment}
          fullWidth
        />
      </Content>
      {/* <p>icon_url: {currentUser.user?.photoURL}</p> */}
    </Container>
  )
}

export default CreateUser