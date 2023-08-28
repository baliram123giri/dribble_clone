import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <section className="flex-start flex-col paddings mb-6">
      <h4>Categories</h4>
      <h4>Posts</h4>
      <h4>LoadMore</h4>
    </section>
  );
}

export default Home;
