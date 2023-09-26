import React from "react";
import { Tweet } from "react-twitter-widgets";

export default {
  title: "Tweet",
  component: Tweet,
};

export const TwitterFeed = () => (
  <Tweet tweetId="841418541026877441" options={{ width: "400", align: "right", theme: "dark" }} />
);
