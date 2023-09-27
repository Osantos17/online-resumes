import React from "react";
import { Tweet, eagerLoadTwitterLibrary } from "react-twitter-widgets";

eagerLoadTwitterLibrary();

export default {
  title: "Tweet",
  component: Tweet,
};


export const TwitterFeed = (props) => (
  <div>
    <Tweet tweetId={props.tweetID} options={{ width: "400", theme: "dark" }} />;
  </div>
);
