import React from 'react';
import {Review} from '../../types/review-data';
import dayjs from 'dayjs';

interface Props {
  review: Review;
}

const ReviewItem = (props: Props): JSX.Element => {
  const {review: {author, avatar, date, rating, text}} = props;

  const dateHumanized = dayjs(date).format(`MMMM YYYY`);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{dateHumanized}</time>
      </div>
    </li>
  );
};

export default ReviewItem;
