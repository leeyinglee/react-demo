import React from 'react';

import './BookItem.less';

const Item = (props) => {
  const { info } = props;
  return (
    <div className="Book-item">
      <div className="Book-info">
        <div className="Book-title">{info?.title}</div>
        <div className="Book-author">{info?.author}</div>
        <div className="Book-price">{info?.price}元</div>
      </div>
      <div className="Book-cover" style={{ backgroundImage: `url(${info?.cover})` }}></div>
    </div>
  );
};

export default React.memo(Item);
