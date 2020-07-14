import React from "react";
import styled from "styled-components";
import Button from "../Button";

const EButton = styled(Button)`
  padding: 5px 24px;
  background-color: ${props => (props.isFollowing ? "#ffffff" : props.theme.blueColor)};
  color: ${props => (props.isFollowing ? props.theme.lightBoxColor : "#ffffff")};
  border: 1px solid ${props => (props.isFollowing ? props.theme.lightBoxColor : "#ffffff")};
`;

export default ({ isFollowing, onClick }) =>
  <EButton isFollowing={isFollowing} text={isFollowing ? "팔로우 취소" : "팔로우"} onClick={onClick} />;
