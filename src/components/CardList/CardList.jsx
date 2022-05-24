import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardList.style';
import Card from '../Card/Card';

function CardList({ data }) {
  return (
    <S.CardList>
      {data.map((obj) => (
        <Card key={obj.employee_id} data={obj} />
      ))}
    </S.CardList>
  );
}
CardList.propTypes = {};

export default CardList;