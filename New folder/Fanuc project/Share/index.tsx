import React, { FC, useState } from "react";

// @ts-ignore
import { Template } from "@ffw/theme-registry";
import useTranslate from "~/hooks/useTranslate";

import { ShareProps } from "./share.types";
import {
  Container,
  Button,
  ButtonLabel,
  ShareMenuContainer,
  ShareContainer,
  ShareClose
} from "./share.styles";

import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton
} from "react-share";

const Share: FC<ShareProps> = ({ url }) => {
  const [shareContainerClass, setShareContainerClass] = useState("");
  const t = useTranslate();

  const location = typeof window === "undefined" ? "" : window.location.href;
  const shareBtnUrl = url || location;

  const handleShareOpenClose = () => {
    shareContainerClass === "active"
      ? setShareContainerClass("")
      : setShareContainerClass("active");
  };

  return (
    <Container>
      <Button onClick={handleShareOpenClose}>
        <Template template="share-icon" />
      </Button>
      <ShareContainer className={shareContainerClass}>
        <ButtonLabel onClick={handleShareOpenClose}>{t("Share")}</ButtonLabel>

        <ShareMenuContainer>
          <ul>
            <li>
              <EmailShareButton url={shareBtnUrl}>
                <Template template="share-mail-icon" />
              </EmailShareButton>
            </li>
            <li>
              <LinkedinShareButton url={shareBtnUrl}>
                <Template template="share-in-icon" />
              </LinkedinShareButton>
            </li>
            <li>
              <FacebookShareButton url={shareBtnUrl}>
                <Template template="share-facebook-icon" />
              </FacebookShareButton>
            </li>
          </ul>
          <ShareClose onClick={handleShareOpenClose} />
        </ShareMenuContainer>
      </ShareContainer>
    </Container>
  );
};

export default Share;
