import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: solid 1px #f0f0f0
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    height: 56px;
    width: 100px;
    display: block;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;    
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size:17px;
  color: #333;
    &.left {
      float: left;
    }
    &.right {
      float: right;
      color:#969696
    }
    &.active {
      color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  margin-left: 20px;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 20px;
  border:none;
  outline:none;
  border-radius: 19px;
  background:#eee;
  &::placeholder{
    color:#999;
  }  
`;

export const Addition = styled.div`
  position:absolute;
  height:56px;
  top:0;
  right:0;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top:9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.writing{
    color: #fff;
    background: #ec6149;
  }
`