import React from "react";
import ReactPlayer from "react-player";

export interface videoProps {}

const video: React.FunctionComponent<videoProps> = (props) => {
  return (
    <>
      <ReactPlayer
        url={[
          {
            src: "https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm",
            type: "video/webm",
          },
        ]}
      />
    </>
  );
};
export default video;
