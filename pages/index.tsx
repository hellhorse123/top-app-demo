import { GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { Htag, Button, P, Tag, Rating, Input, Textarea } from "../components";
import { withLayout } from "../layout/Layout";

import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="big">Большой</P>
      <P>Средний</P>
      <P size="small">Маленький</P>

      <Tag size="small">ghost</Tag>
      <Tag size="middle" color="red">
        red
      </Tag>
      <Tag size="small" color="green">
        green
      </Tag>
      <Tag color="primary">primary</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test" />
      <Textarea placeholder="test" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
